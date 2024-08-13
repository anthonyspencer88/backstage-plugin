import { ROOTLY_ANNOTATION_SERVICE_ID, ROOTLY_ANNOTATION_SERVICE_SLUG, ROOTLY_ANNOTATION_FUNCTIONALITY_ID, ROOTLY_ANNOTATION_FUNCTIONALITY_SLUG, ROOTLY_ANNOTATION_TEAM_ID, ROOTLY_ANNOTATION_TEAM_SLUG } from '@rootly/backstage-plugin-common';

const isRootlyAvailable = (entity) => Boolean(entity.metadata.annotations?.[ROOTLY_ANNOTATION_SERVICE_ID]) && Boolean(entity.metadata.annotations?.[ROOTLY_ANNOTATION_SERVICE_ID]) || Boolean(entity.metadata.annotations?.[ROOTLY_ANNOTATION_SERVICE_SLUG]) && Boolean(entity.metadata.annotations?.[ROOTLY_ANNOTATION_SERVICE_SLUG]) || Boolean(entity.metadata.annotations?.[ROOTLY_ANNOTATION_FUNCTIONALITY_ID]) && Boolean(entity.metadata.annotations?.[ROOTLY_ANNOTATION_FUNCTIONALITY_ID]) || Boolean(entity.metadata.annotations?.[ROOTLY_ANNOTATION_FUNCTIONALITY_SLUG]) && Boolean(entity.metadata.annotations?.[ROOTLY_ANNOTATION_FUNCTIONALITY_SLUG]) || Boolean(entity.metadata.annotations?.[ROOTLY_ANNOTATION_TEAM_ID]) && Boolean(entity.metadata.annotations?.[ROOTLY_ANNOTATION_TEAM_ID]) || Boolean(entity.metadata.annotations?.[ROOTLY_ANNOTATION_TEAM_SLUG]) && Boolean(entity.metadata.annotations?.[ROOTLY_ANNOTATION_TEAM_SLUG]);

export { isRootlyAvailable };
//# sourceMappingURL=integration.esm.js.map
