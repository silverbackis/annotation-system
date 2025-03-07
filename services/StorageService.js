export default {
  getDocuments() {
    const savedData = localStorage.getItem('annotationDocuments');

    if (savedData) {
      return JSON.parse(savedData);
    }

    // Default sample data
    const defaultData = [
      {
        id: "155_2008_Van Nes",
        label: "Improving speed behaviour - the potential of in-car speed assistance and speed limit credibility",
        type: "Report of RCT",
        groups: [
          { id: 1, name: "Intelligent speed system" },
          { id: 2, name: "Intervention subgroup (Intelligent speed system + low credibility)" },
          { id: 3, name: "Intervention subgroup (Intelligent speed system + high credibility)" },
          { id: 100, name: "Control group" },
          { id: 101, name: "Control subgroup (No ISA + low credibility)" },
          { id: 102, name: "Control subgroup (No ISA + high credibility)" }
        ]
      },
      {
        id: "166_2010_Farmer",
        label: "Effects of in-vehicle monitoring on the driving behavior of teenagers",
        type: "Report of RCT",
        groups: [
          { id: 1, name: "Monitoring, alert and web notification" },
          { id: 2, name: "Monitoring, alert, no web" },
          { id: 3, name: "Monitoring only" },
          { id: 100, name: "Control group" }
        ]
      }
    ];

    // Save default data
    localStorage.setItem('annotationDocuments', JSON.stringify(defaultData));

    return defaultData;
  },

  saveDocuments(documents) {
    localStorage.setItem('annotationDocuments', JSON.stringify(documents));
  },

  getAnnotations() {
    const savedAnnotations = localStorage.getItem('annotations');

    if (savedAnnotations) {
      return JSON.parse(savedAnnotations);
    }

    return [];
  },

  saveAnnotations(annotations) {
    localStorage.setItem('annotations', JSON.stringify(annotations));
  },

  getDropdownOptions() {
    const savedOptions = localStorage.getItem('dropdownOptions');

    if (savedOptions) {
      return JSON.parse(savedOptions);
    }

    return null;
  },

  saveDropdownOptions(options) {
    localStorage.setItem('dropdownOptions', JSON.stringify(options));
  }
};
