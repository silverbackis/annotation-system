
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
interface _GlobalComponents {
      'AnnotationForm': typeof import("../components/AnnotationForm.vue")['default']
    'AnnotationList': typeof import("../components/AnnotationList.vue")['default']
    'AnnotationSystem': typeof import("../components/AnnotationSystem.vue")['default']
    'DocumentManager': typeof import("../components/DocumentManager.vue")['default']
    'ModalsAddDocumentModal': typeof import("../components/modals/AddDocumentModal.vue")['default']
    'ModalsAddGroupModal': typeof import("../components/modals/AddGroupModal.vue")['default']
    'ModalsAddOptionModal': typeof import("../components/modals/AddOptionModal.vue")['default']
    'ModalsConfirmDeleteModal': typeof import("../components/modals/ConfirmDeleteModal.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAnnotationForm': typeof import("../components/AnnotationForm.vue")['default']
    'LazyAnnotationList': typeof import("../components/AnnotationList.vue")['default']
    'LazyAnnotationSystem': typeof import("../components/AnnotationSystem.vue")['default']
    'LazyDocumentManager': typeof import("../components/DocumentManager.vue")['default']
    'LazyModalsAddDocumentModal': typeof import("../components/modals/AddDocumentModal.vue")['default']
    'LazyModalsAddGroupModal': typeof import("../components/modals/AddGroupModal.vue")['default']
    'LazyModalsAddOptionModal': typeof import("../components/modals/AddOptionModal.vue")['default']
    'LazyModalsConfirmDeleteModal': typeof import("../components/modals/ConfirmDeleteModal.vue")['default']
    'LazyNuxtWelcome': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'LazyNuxtLayout': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'LazyNuxtErrorBoundary': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'LazyClientOnly': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/client-only")['default']
    'LazyDevOnly': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/dev-only")['default']
    'LazyServerPlaceholder': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'LazyNuxtLink': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'LazyNuxtLoadingIndicator': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'LazyNuxtRouteAnnouncer': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'LazyNuxtImg': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'LazyNuxtPicture': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'LazyNuxtPage': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/pages/runtime/page")['default']
    'LazyNoScript': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'LazyLink': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Link']
    'LazyBase': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Base']
    'LazyTitle': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Title']
    'LazyMeta': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Meta']
    'LazyStyle': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Style']
    'LazyHead': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Head']
    'LazyHtml': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Html']
    'LazyBody': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Body']
    'LazyNuxtIsland': typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'LazyNuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AnnotationForm: typeof import("../components/AnnotationForm.vue")['default']
export const AnnotationList: typeof import("../components/AnnotationList.vue")['default']
export const AnnotationSystem: typeof import("../components/AnnotationSystem.vue")['default']
export const DocumentManager: typeof import("../components/DocumentManager.vue")['default']
export const ModalsAddDocumentModal: typeof import("../components/modals/AddDocumentModal.vue")['default']
export const ModalsAddGroupModal: typeof import("../components/modals/AddGroupModal.vue")['default']
export const ModalsAddOptionModal: typeof import("../components/modals/AddOptionModal.vue")['default']
export const ModalsConfirmDeleteModal: typeof import("../components/modals/ConfirmDeleteModal.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAnnotationForm: typeof import("../components/AnnotationForm.vue")['default']
export const LazyAnnotationList: typeof import("../components/AnnotationList.vue")['default']
export const LazyAnnotationSystem: typeof import("../components/AnnotationSystem.vue")['default']
export const LazyDocumentManager: typeof import("../components/DocumentManager.vue")['default']
export const LazyModalsAddDocumentModal: typeof import("../components/modals/AddDocumentModal.vue")['default']
export const LazyModalsAddGroupModal: typeof import("../components/modals/AddGroupModal.vue")['default']
export const LazyModalsAddOptionModal: typeof import("../components/modals/AddOptionModal.vue")['default']
export const LazyModalsConfirmDeleteModal: typeof import("../components/modals/ConfirmDeleteModal.vue")['default']
export const LazyNuxtWelcome: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const LazyNuxtLayout: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const LazyNuxtErrorBoundary: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const LazyClientOnly: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/client-only")['default']
export const LazyDevOnly: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/dev-only")['default']
export const LazyServerPlaceholder: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyNuxtLink: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const LazyNuxtLoadingIndicator: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const LazyNuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const LazyNuxtImg: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const LazyNuxtPicture: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const LazyNuxtPage: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/pages/runtime/page")['default']
export const LazyNoScript: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const LazyLink: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Link']
export const LazyBase: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Base']
export const LazyTitle: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Title']
export const LazyMeta: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const LazyStyle: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Style']
export const LazyHead: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Head']
export const LazyHtml: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Html']
export const LazyBody: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/head/runtime/components")['Body']
export const LazyNuxtIsland: typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyNuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_ioredis@5.6.0_lightning_e0b64f140af7b6f0446f9241063310c1/node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
