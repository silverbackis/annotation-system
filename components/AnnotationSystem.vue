<template>
  <div class="p-6 max-w-6xl mx-auto bg-white rounded-lg shadow-lg">
    <h1 class="text-2xl font-bold mb-6 text-blue-800">Scientific Intervention Annotation System</h1>

    <!-- Tabs -->
    <div class="flex border-b border-gray-200 mb-6">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="py-2 px-4 font-medium"
        :class="[
          activeTab === tab.id
            ? 'text-blue-600 border-b-2 border-blue-600'
            : 'text-gray-500 hover:text-gray-700'
        ]"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Create/Edit Tab -->
    <AnnotationForm
      v-if="activeTab === 'create'"
      :documents="documents"
      :dropdown-options="dropdownOptions"
      :annotations="annotations"
      @update-documents="updateDocuments"
      @update-annotations="updateAnnotations"
      @update-dropdown-options="updateDropdownOptions"
    />

    <!-- Manage Annotations Tab -->
    <AnnotationList
      v-if="activeTab === 'manage'"
      :documents="documents"
      :annotations="annotations"
      @edit-annotation="handleEditAnnotation"
      @delete-annotation="handleDeleteAnnotation"
      @export-excel="exportToExcel"
    />

    <!-- Manage Documents Tab -->
    <DocumentManager
      v-if="activeTab === 'documents'"
      :documents="documents"
      @update-documents="updateDocuments"
      @update-annotations="updateAnnotations"
    />
  </div>
</template>

<script>
import AnnotationForm from './AnnotationForm.vue';
import AnnotationList from './AnnotationList.vue';
import DocumentManager from './DocumentManager.vue';
import StorageService from '/services/StorageService';
import * as XLSX from 'xlsx';

export default {
  name: 'App',
  components: {
    AnnotationForm,
    AnnotationList,
    DocumentManager
  },
  data() {
    return {
      activeTab: 'create',
      tabs: [
        { id: 'create', label: 'Create/Edit Annotation' },
        { id: 'manage', label: 'Manage Annotations' },
        { id: 'documents', label: 'Manage Documents' }
      ],
      documents: [],
      annotations: [],
      dropdownOptions: {
        documentType: [
          "Report of RCT",
          "Report of observational study"
        ],
        entityType: [
          "Outcome incl motivation, capability, behaviour",
          "Intervention incl BCT, mode of delivery",
          "Setting incl vehicle type",
          "Methodology incl sample size",
          "Participants incl type of journey"
        ],
        confidence: [
          "High", "Low", "Marginal"
        ],
        entityValueDataType: [
          "Absolute value", "Change score"
        ],
        entityValueStatsType: [
          "Mean", "Percentage", "Regression coefficient (beta)", "Count", "Median"
        ],
        entityValueDispersionType: [
          "SD", "Variance"
        ]
      }
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      // Load documents
      this.documents = StorageService.getDocuments();

      // Load annotations
      this.annotations = StorageService.getAnnotations();

      // Load dropdown options
      const savedOptions = StorageService.getDropdownOptions();
      if (savedOptions) {
        this.dropdownOptions = { ...this.dropdownOptions, ...savedOptions };
      }
    },

    updateDocuments(documents) {
      this.documents = documents;
      StorageService.saveDocuments(documents);
    },

    updateAnnotations(annotations) {
      this.annotations = annotations;
      StorageService.saveAnnotations(annotations);
    },

    updateDropdownOptions(field, options) {
      this.dropdownOptions[field] = options;
      StorageService.saveDropdownOptions(this.dropdownOptions);
    },

    handleEditAnnotation(annotationId) {
      // Switch to create tab and set up for editing
      this.activeTab = 'create';
      // The actual editing will be handled by the AnnotationForm component
      // We'll pass the annotationId via an event bus or other method
      // this.$root.$emit('edit-annotation', annotationId);
    },

    handleDeleteAnnotation(annotationId) {
      const updatedAnnotations = this.annotations.filter(a => a.id !== annotationId);
      this.updateAnnotations(updatedAnnotations);
    },

    exportToExcel() {
      // Create a new workbook
      const wb = XLSX.utils.book_new();

      // Convert annotations to worksheet data
      const wsData = this.annotations.map(a => ({
        "Document ID": a.documentId,
        "Document label": a.documentLabel,
        "Document type": a.documentType,
        "Group ID": a.groupId,
        "Group name": a.groupName,
        "Entity type": a.entityType,
        "Confidence": a.confidence,
        "Entity label": a.entityLabel,
        "Entity description": a.entityDescription,
        "Revised entity label": a.revisedEntityLabel,
        "Revised entity description": a.revisedEntityDescription,
        "Effective": a.effective ? 1 : 0,
        "Entity value": a.entityValue,
        "Entity value data type": a.entityValueDataType,
        "Entity value stats type": a.entityValueStatsType,
        "Entity value dispersion": a.entityValueDispersion,
        "Entity value dispersion type": a.entityValueDispersionType,
        "Entity value unit of measurement": a.entityValueUnitOfMeasurement,
        "Context": a.context,
        "Comment": a.comment,
        "Person": a.person,
        "Questions for RW": a.questionsForRW,
        "Notes": a.notes
      }));

      // Create worksheet from data
      const ws = XLSX.utils.json_to_sheet(wsData);

      // Add worksheet to workbook
      XLSX.utils.book_append_sheet(wb, ws, "Annotations");

      // Generate Excel file and trigger download
      XLSX.writeFile(wb, "annotations_export.xlsx");
    }
  }
};
</script>
