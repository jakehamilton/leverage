const senchou = {
    wrapTemplate: <T, U>(x: T, y: U): U => {
        type MaybeTemplate = { __templateType?: string; __data?: object };
        const xTemplate = (x as unknown) as MaybeTemplate;
        const yTemplate = (y as unknown) as MaybeTemplate;
        if (x && y && xTemplate.__templateType !== undefined) {
            Object.defineProperty(yTemplate, "__templateType", {
                value: xTemplate.__templateType,
                enumerable: false,
                configurable: true,
                writable: true,
            });
            Object.defineProperty(yTemplate, "__data", {
                value: xTemplate.__data,
                enumerable: false,
                configurable: true,
                writable: true,
            });
        }
        return y;
    },
};
const prelude = {
    id: <T>(x: T) => x,
    isNotUndefined: <T>(x: T | undefined): x is T => x !== undefined,
    serialize: <T, U>(
        x: T,
        f: (x: T extends undefined ? never : T) => U
    ): T extends undefined ? undefined : U => {
        // @ts-ignore
        if (x === undefined) return undefined;
        //@ts-ignore
        return f(x);
    },
};

export type SerializedMutatingWebhookConfiguration = {
    apiVersion: "admissionregistration.k8s.io/v1";
    kind: "MutatingWebhookConfiguration";
} & SerializedMutatingWebhookConfigurationProps;
export const isMutatingWebhookConfiguration = (
    input: any
): input is SerializedMutatingWebhookConfiguration => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "admissionregistration.k8s.io/v1" &&
        input.kind === "MutatingWebhookConfiguration"
    );
};
/**
 * MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.
 *
 * @schema io.k8s.api.admissionregistration.v1.MutatingWebhookConfiguration
 */
export const MutatingWebhookConfiguration = (
    props: MutatingWebhookConfigurationProps = {}
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "admissionregistration.k8s.io/v1" as const,
        kind: "MutatingWebhookConfiguration" as const,
        ...serializeMutatingWebhookConfigurationProps(props),
    });
};

export type SerializedMutatingWebhookConfigurationList = {
    apiVersion: "admissionregistration.k8s.io/v1";
    kind: "MutatingWebhookConfigurationList";
} & SerializedMutatingWebhookConfigurationListProps;
export const isMutatingWebhookConfigurationList = (
    input: any
): input is SerializedMutatingWebhookConfigurationList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "admissionregistration.k8s.io/v1" &&
        input.kind === "MutatingWebhookConfigurationList"
    );
};
/**
 * MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
 *
 * @schema io.k8s.api.admissionregistration.v1.MutatingWebhookConfigurationList
 */
export const MutatingWebhookConfigurationList = (
    props: MutatingWebhookConfigurationListProps
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "admissionregistration.k8s.io/v1" as const,
        kind: "MutatingWebhookConfigurationList" as const,
        ...serializeMutatingWebhookConfigurationListProps(props),
    });
};

export type SerializedValidatingWebhookConfiguration = {
    apiVersion: "admissionregistration.k8s.io/v1";
    kind: "ValidatingWebhookConfiguration";
} & SerializedValidatingWebhookConfigurationProps;
export const isValidatingWebhookConfiguration = (
    input: any
): input is SerializedValidatingWebhookConfiguration => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "admissionregistration.k8s.io/v1" &&
        input.kind === "ValidatingWebhookConfiguration"
    );
};
/**
 * ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
 *
 * @schema io.k8s.api.admissionregistration.v1.ValidatingWebhookConfiguration
 */
export const ValidatingWebhookConfiguration = (
    props: ValidatingWebhookConfigurationProps = {}
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "admissionregistration.k8s.io/v1" as const,
        kind: "ValidatingWebhookConfiguration" as const,
        ...serializeValidatingWebhookConfigurationProps(props),
    });
};

export type SerializedValidatingWebhookConfigurationList = {
    apiVersion: "admissionregistration.k8s.io/v1";
    kind: "ValidatingWebhookConfigurationList";
} & SerializedValidatingWebhookConfigurationListProps;
export const isValidatingWebhookConfigurationList = (
    input: any
): input is SerializedValidatingWebhookConfigurationList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "admissionregistration.k8s.io/v1" &&
        input.kind === "ValidatingWebhookConfigurationList"
    );
};
/**
 * ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.
 *
 * @schema io.k8s.api.admissionregistration.v1.ValidatingWebhookConfigurationList
 */
export const ValidatingWebhookConfigurationList = (
    props: ValidatingWebhookConfigurationListProps
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "admissionregistration.k8s.io/v1" as const,
        kind: "ValidatingWebhookConfigurationList" as const,
        ...serializeValidatingWebhookConfigurationListProps(props),
    });
};

export type SerializedStorageVersionV1Alpha1 = {
    apiVersion: "internal.apiserver.k8s.io/v1alpha1";
    kind: "StorageVersion";
} & SerializedStorageVersionV1Alpha1Props;
export const isStorageVersionV1Alpha1 = (
    input: any
): input is SerializedStorageVersionV1Alpha1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "internal.apiserver.k8s.io/v1alpha1" &&
        input.kind === "StorageVersion"
    );
};
/**
 * 
 Storage version of a specific resource.
 *
 * @schema io.k8s.api.apiserverinternal.v1alpha1.StorageVersion
 */
export const StorageVersionV1Alpha1 = (props: StorageVersionV1Alpha1Props) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "internal.apiserver.k8s.io/v1alpha1" as const,
        kind: "StorageVersion" as const,
        ...serializeStorageVersionV1Alpha1Props(props),
    });
};

export type SerializedStorageVersionListV1Alpha1 = {
    apiVersion: "internal.apiserver.k8s.io/v1alpha1";
    kind: "StorageVersionList";
} & SerializedStorageVersionListV1Alpha1Props;
export const isStorageVersionListV1Alpha1 = (
    input: any
): input is SerializedStorageVersionListV1Alpha1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "internal.apiserver.k8s.io/v1alpha1" &&
        input.kind === "StorageVersionList"
    );
};
/**
 * A list of StorageVersions.
 *
 * @schema io.k8s.api.apiserverinternal.v1alpha1.StorageVersionList
 */
export const StorageVersionListV1Alpha1 = (
    props: StorageVersionListV1Alpha1Props
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "internal.apiserver.k8s.io/v1alpha1" as const,
        kind: "StorageVersionList" as const,
        ...serializeStorageVersionListV1Alpha1Props(props),
    });
};

export type SerializedControllerRevision = {
    apiVersion: "apps/v1";
    kind: "ControllerRevision";
} & SerializedControllerRevisionProps;
export const isControllerRevision = (
    input: any
): input is SerializedControllerRevision => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "apps/v1" &&
        input.kind === "ControllerRevision"
    );
};
/**
 * ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 *
 * @schema io.k8s.api.apps.v1.ControllerRevision
 */
export const ControllerRevision = (props: ControllerRevisionProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "apps/v1" as const,
        kind: "ControllerRevision" as const,
        ...serializeControllerRevisionProps(props),
    });
};

export type SerializedControllerRevisionList = {
    apiVersion: "apps/v1";
    kind: "ControllerRevisionList";
} & SerializedControllerRevisionListProps;
export const isControllerRevisionList = (
    input: any
): input is SerializedControllerRevisionList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "apps/v1" &&
        input.kind === "ControllerRevisionList"
    );
};
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 *
 * @schema io.k8s.api.apps.v1.ControllerRevisionList
 */
export const ControllerRevisionList = (props: ControllerRevisionListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "apps/v1" as const,
        kind: "ControllerRevisionList" as const,
        ...serializeControllerRevisionListProps(props),
    });
};

export type SerializedDaemonSet = {
    apiVersion: "apps/v1";
    kind: "DaemonSet";
} & SerializedDaemonSetProps;
export const isDaemonSet = (input: any): input is SerializedDaemonSet => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "apps/v1" &&
        input.kind === "DaemonSet"
    );
};
/**
 * DaemonSet represents the configuration of a daemon set.
 *
 * @schema io.k8s.api.apps.v1.DaemonSet
 */
export const DaemonSet = (props: DaemonSetProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "apps/v1" as const,
        kind: "DaemonSet" as const,
        ...serializeDaemonSetProps(props),
    });
};

export type SerializedDaemonSetList = {
    apiVersion: "apps/v1";
    kind: "DaemonSetList";
} & SerializedDaemonSetListProps;
export const isDaemonSetList = (
    input: any
): input is SerializedDaemonSetList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "apps/v1" &&
        input.kind === "DaemonSetList"
    );
};
/**
 * DaemonSetList is a collection of daemon sets.
 *
 * @schema io.k8s.api.apps.v1.DaemonSetList
 */
export const DaemonSetList = (props: DaemonSetListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "apps/v1" as const,
        kind: "DaemonSetList" as const,
        ...serializeDaemonSetListProps(props),
    });
};

export type SerializedDeployment = {
    apiVersion: "apps/v1";
    kind: "Deployment";
} & SerializedDeploymentProps;
export const isDeployment = (input: any): input is SerializedDeployment => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "apps/v1" &&
        input.kind === "Deployment"
    );
};
/**
 * Deployment enables declarative updates for Pods and ReplicaSets.
 *
 * @schema io.k8s.api.apps.v1.Deployment
 */
export const Deployment = (props: DeploymentProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "apps/v1" as const,
        kind: "Deployment" as const,
        ...serializeDeploymentProps(props),
    });
};

export type SerializedDeploymentList = {
    apiVersion: "apps/v1";
    kind: "DeploymentList";
} & SerializedDeploymentListProps;
export const isDeploymentList = (
    input: any
): input is SerializedDeploymentList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "apps/v1" &&
        input.kind === "DeploymentList"
    );
};
/**
 * DeploymentList is a list of Deployments.
 *
 * @schema io.k8s.api.apps.v1.DeploymentList
 */
export const DeploymentList = (props: DeploymentListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "apps/v1" as const,
        kind: "DeploymentList" as const,
        ...serializeDeploymentListProps(props),
    });
};

export type SerializedReplicaSet = {
    apiVersion: "apps/v1";
    kind: "ReplicaSet";
} & SerializedReplicaSetProps;
export const isReplicaSet = (input: any): input is SerializedReplicaSet => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "apps/v1" &&
        input.kind === "ReplicaSet"
    );
};
/**
 * ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 *
 * @schema io.k8s.api.apps.v1.ReplicaSet
 */
export const ReplicaSet = (props: ReplicaSetProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "apps/v1" as const,
        kind: "ReplicaSet" as const,
        ...serializeReplicaSetProps(props),
    });
};

export type SerializedReplicaSetList = {
    apiVersion: "apps/v1";
    kind: "ReplicaSetList";
} & SerializedReplicaSetListProps;
export const isReplicaSetList = (
    input: any
): input is SerializedReplicaSetList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "apps/v1" &&
        input.kind === "ReplicaSetList"
    );
};
/**
 * ReplicaSetList is a collection of ReplicaSets.
 *
 * @schema io.k8s.api.apps.v1.ReplicaSetList
 */
export const ReplicaSetList = (props: ReplicaSetListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "apps/v1" as const,
        kind: "ReplicaSetList" as const,
        ...serializeReplicaSetListProps(props),
    });
};

export type SerializedStatefulSet = {
    apiVersion: "apps/v1";
    kind: "StatefulSet";
} & SerializedStatefulSetProps;
export const isStatefulSet = (input: any): input is SerializedStatefulSet => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "apps/v1" &&
        input.kind === "StatefulSet"
    );
};
/**
 * StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 - Network: A single stable DNS and hostname.
 - Storage: As many VolumeClaims as requested.
The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 *
 * @schema io.k8s.api.apps.v1.StatefulSet
 */
export const StatefulSet = (props: StatefulSetProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "apps/v1" as const,
        kind: "StatefulSet" as const,
        ...serializeStatefulSetProps(props),
    });
};

export type SerializedStatefulSetList = {
    apiVersion: "apps/v1";
    kind: "StatefulSetList";
} & SerializedStatefulSetListProps;
export const isStatefulSetList = (
    input: any
): input is SerializedStatefulSetList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "apps/v1" &&
        input.kind === "StatefulSetList"
    );
};
/**
 * StatefulSetList is a collection of StatefulSets.
 *
 * @schema io.k8s.api.apps.v1.StatefulSetList
 */
export const StatefulSetList = (props: StatefulSetListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "apps/v1" as const,
        kind: "StatefulSetList" as const,
        ...serializeStatefulSetListProps(props),
    });
};

export type SerializedTokenRequest = {
    apiVersion: "authentication.k8s.io/v1";
    kind: "TokenRequest";
} & SerializedTokenRequestProps;
export const isTokenRequest = (input: any): input is SerializedTokenRequest => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "authentication.k8s.io/v1" &&
        input.kind === "TokenRequest"
    );
};
/**
 * TokenRequest requests a token for a given service account.
 *
 * @schema io.k8s.api.authentication.v1.TokenRequest
 */
export const TokenRequest = (props: TokenRequestProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "authentication.k8s.io/v1" as const,
        kind: "TokenRequest" as const,
        ...serializeTokenRequestProps(props),
    });
};

export type SerializedTokenReview = {
    apiVersion: "authentication.k8s.io/v1";
    kind: "TokenReview";
} & SerializedTokenReviewProps;
export const isTokenReview = (input: any): input is SerializedTokenReview => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "authentication.k8s.io/v1" &&
        input.kind === "TokenReview"
    );
};
/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 *
 * @schema io.k8s.api.authentication.v1.TokenReview
 */
export const TokenReview = (props: TokenReviewProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "authentication.k8s.io/v1" as const,
        kind: "TokenReview" as const,
        ...serializeTokenReviewProps(props),
    });
};

export type SerializedLocalSubjectAccessReview = {
    apiVersion: "authorization.k8s.io/v1";
    kind: "LocalSubjectAccessReview";
} & SerializedLocalSubjectAccessReviewProps;
export const isLocalSubjectAccessReview = (
    input: any
): input is SerializedLocalSubjectAccessReview => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "authorization.k8s.io/v1" &&
        input.kind === "LocalSubjectAccessReview"
    );
};
/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 *
 * @schema io.k8s.api.authorization.v1.LocalSubjectAccessReview
 */
export const LocalSubjectAccessReview = (
    props: LocalSubjectAccessReviewProps
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "authorization.k8s.io/v1" as const,
        kind: "LocalSubjectAccessReview" as const,
        ...serializeLocalSubjectAccessReviewProps(props),
    });
};

export type SerializedSelfSubjectAccessReview = {
    apiVersion: "authorization.k8s.io/v1";
    kind: "SelfSubjectAccessReview";
} & SerializedSelfSubjectAccessReviewProps;
export const isSelfSubjectAccessReview = (
    input: any
): input is SerializedSelfSubjectAccessReview => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "authorization.k8s.io/v1" &&
        input.kind === "SelfSubjectAccessReview"
    );
};
/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 *
 * @schema io.k8s.api.authorization.v1.SelfSubjectAccessReview
 */
export const SelfSubjectAccessReview = (
    props: SelfSubjectAccessReviewProps
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "authorization.k8s.io/v1" as const,
        kind: "SelfSubjectAccessReview" as const,
        ...serializeSelfSubjectAccessReviewProps(props),
    });
};

export type SerializedSelfSubjectRulesReview = {
    apiVersion: "authorization.k8s.io/v1";
    kind: "SelfSubjectRulesReview";
} & SerializedSelfSubjectRulesReviewProps;
export const isSelfSubjectRulesReview = (
    input: any
): input is SerializedSelfSubjectRulesReview => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "authorization.k8s.io/v1" &&
        input.kind === "SelfSubjectRulesReview"
    );
};
/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 *
 * @schema io.k8s.api.authorization.v1.SelfSubjectRulesReview
 */
export const SelfSubjectRulesReview = (props: SelfSubjectRulesReviewProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "authorization.k8s.io/v1" as const,
        kind: "SelfSubjectRulesReview" as const,
        ...serializeSelfSubjectRulesReviewProps(props),
    });
};

export type SerializedSubjectAccessReview = {
    apiVersion: "authorization.k8s.io/v1";
    kind: "SubjectAccessReview";
} & SerializedSubjectAccessReviewProps;
export const isSubjectAccessReview = (
    input: any
): input is SerializedSubjectAccessReview => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "authorization.k8s.io/v1" &&
        input.kind === "SubjectAccessReview"
    );
};
/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 *
 * @schema io.k8s.api.authorization.v1.SubjectAccessReview
 */
export const SubjectAccessReview = (props: SubjectAccessReviewProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "authorization.k8s.io/v1" as const,
        kind: "SubjectAccessReview" as const,
        ...serializeSubjectAccessReviewProps(props),
    });
};

export type SerializedHorizontalPodAutoscaler = {
    apiVersion: "autoscaling/v1";
    kind: "HorizontalPodAutoscaler";
} & SerializedHorizontalPodAutoscalerProps;
export const isHorizontalPodAutoscaler = (
    input: any
): input is SerializedHorizontalPodAutoscaler => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "autoscaling/v1" &&
        input.kind === "HorizontalPodAutoscaler"
    );
};
/**
 * configuration of a horizontal pod autoscaler.
 *
 * @schema io.k8s.api.autoscaling.v1.HorizontalPodAutoscaler
 */
export const HorizontalPodAutoscaler = (
    props: HorizontalPodAutoscalerProps = {}
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "autoscaling/v1" as const,
        kind: "HorizontalPodAutoscaler" as const,
        ...serializeHorizontalPodAutoscalerProps(props),
    });
};

export type SerializedHorizontalPodAutoscalerList = {
    apiVersion: "autoscaling/v1";
    kind: "HorizontalPodAutoscalerList";
} & SerializedHorizontalPodAutoscalerListProps;
export const isHorizontalPodAutoscalerList = (
    input: any
): input is SerializedHorizontalPodAutoscalerList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "autoscaling/v1" &&
        input.kind === "HorizontalPodAutoscalerList"
    );
};
/**
 * list of horizontal pod autoscaler objects.
 *
 * @schema io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerList
 */
export const HorizontalPodAutoscalerList = (
    props: HorizontalPodAutoscalerListProps
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "autoscaling/v1" as const,
        kind: "HorizontalPodAutoscalerList" as const,
        ...serializeHorizontalPodAutoscalerListProps(props),
    });
};

export type SerializedScale = {
    apiVersion: "autoscaling/v1";
    kind: "Scale";
} & SerializedScaleProps;
export const isScale = (input: any): input is SerializedScale => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "autoscaling/v1" &&
        input.kind === "Scale"
    );
};
/**
 * Scale represents a scaling request for a resource.
 *
 * @schema io.k8s.api.autoscaling.v1.Scale
 */
export const Scale = (props: ScaleProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "autoscaling/v1" as const,
        kind: "Scale" as const,
        ...serializeScaleProps(props),
    });
};

export type SerializedHorizontalPodAutoscalerV2Beta1 = {
    apiVersion: "autoscaling/v2beta1";
    kind: "HorizontalPodAutoscaler";
} & SerializedHorizontalPodAutoscalerV2Beta1Props;
export const isHorizontalPodAutoscalerV2Beta1 = (
    input: any
): input is SerializedHorizontalPodAutoscalerV2Beta1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "autoscaling/v2beta1" &&
        input.kind === "HorizontalPodAutoscaler"
    );
};
/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 *
 * @schema io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscaler
 */
export const HorizontalPodAutoscalerV2Beta1 = (
    props: HorizontalPodAutoscalerV2Beta1Props = {}
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "autoscaling/v2beta1" as const,
        kind: "HorizontalPodAutoscaler" as const,
        ...serializeHorizontalPodAutoscalerV2Beta1Props(props),
    });
};

export type SerializedHorizontalPodAutoscalerListV2Beta1 = {
    apiVersion: "autoscaling/v2beta1";
    kind: "HorizontalPodAutoscalerList";
} & SerializedHorizontalPodAutoscalerListV2Beta1Props;
export const isHorizontalPodAutoscalerListV2Beta1 = (
    input: any
): input is SerializedHorizontalPodAutoscalerListV2Beta1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "autoscaling/v2beta1" &&
        input.kind === "HorizontalPodAutoscalerList"
    );
};
/**
 * HorizontalPodAutoscaler is a list of horizontal pod autoscaler objects.
 *
 * @schema io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscalerList
 */
export const HorizontalPodAutoscalerListV2Beta1 = (
    props: HorizontalPodAutoscalerListV2Beta1Props
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "autoscaling/v2beta1" as const,
        kind: "HorizontalPodAutoscalerList" as const,
        ...serializeHorizontalPodAutoscalerListV2Beta1Props(props),
    });
};

export type SerializedHorizontalPodAutoscalerV2Beta2 = {
    apiVersion: "autoscaling/v2beta2";
    kind: "HorizontalPodAutoscaler";
} & SerializedHorizontalPodAutoscalerV2Beta2Props;
export const isHorizontalPodAutoscalerV2Beta2 = (
    input: any
): input is SerializedHorizontalPodAutoscalerV2Beta2 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "autoscaling/v2beta2" &&
        input.kind === "HorizontalPodAutoscaler"
    );
};
/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 *
 * @schema io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscaler
 */
export const HorizontalPodAutoscalerV2Beta2 = (
    props: HorizontalPodAutoscalerV2Beta2Props = {}
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "autoscaling/v2beta2" as const,
        kind: "HorizontalPodAutoscaler" as const,
        ...serializeHorizontalPodAutoscalerV2Beta2Props(props),
    });
};

export type SerializedHorizontalPodAutoscalerListV2Beta2 = {
    apiVersion: "autoscaling/v2beta2";
    kind: "HorizontalPodAutoscalerList";
} & SerializedHorizontalPodAutoscalerListV2Beta2Props;
export const isHorizontalPodAutoscalerListV2Beta2 = (
    input: any
): input is SerializedHorizontalPodAutoscalerListV2Beta2 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "autoscaling/v2beta2" &&
        input.kind === "HorizontalPodAutoscalerList"
    );
};
/**
 * HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects.
 *
 * @schema io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerList
 */
export const HorizontalPodAutoscalerListV2Beta2 = (
    props: HorizontalPodAutoscalerListV2Beta2Props
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "autoscaling/v2beta2" as const,
        kind: "HorizontalPodAutoscalerList" as const,
        ...serializeHorizontalPodAutoscalerListV2Beta2Props(props),
    });
};

export type SerializedCronJob = {
    apiVersion: "batch/v1";
    kind: "CronJob";
} & SerializedCronJobProps;
export const isCronJob = (input: any): input is SerializedCronJob => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "batch/v1" &&
        input.kind === "CronJob"
    );
};
/**
 * CronJob represents the configuration of a single cron job.
 *
 * @schema io.k8s.api.batch.v1.CronJob
 */
export const CronJob = (props: CronJobProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "batch/v1" as const,
        kind: "CronJob" as const,
        ...serializeCronJobProps(props),
    });
};

export type SerializedCronJobList = {
    apiVersion: "batch/v1";
    kind: "CronJobList";
} & SerializedCronJobListProps;
export const isCronJobList = (input: any): input is SerializedCronJobList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "batch/v1" &&
        input.kind === "CronJobList"
    );
};
/**
 * CronJobList is a collection of cron jobs.
 *
 * @schema io.k8s.api.batch.v1.CronJobList
 */
export const CronJobList = (props: CronJobListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "batch/v1" as const,
        kind: "CronJobList" as const,
        ...serializeCronJobListProps(props),
    });
};

export type SerializedJob = {
    apiVersion: "batch/v1";
    kind: "Job";
} & SerializedJobProps;
export const isJob = (input: any): input is SerializedJob => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "batch/v1" &&
        input.kind === "Job"
    );
};
/**
 * Job represents the configuration of a single job.
 *
 * @schema io.k8s.api.batch.v1.Job
 */
export const Job = (props: JobProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "batch/v1" as const,
        kind: "Job" as const,
        ...serializeJobProps(props),
    });
};

export type SerializedJobList = {
    apiVersion: "batch/v1";
    kind: "JobList";
} & SerializedJobListProps;
export const isJobList = (input: any): input is SerializedJobList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "batch/v1" &&
        input.kind === "JobList"
    );
};
/**
 * JobList is a collection of jobs.
 *
 * @schema io.k8s.api.batch.v1.JobList
 */
export const JobList = (props: JobListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "batch/v1" as const,
        kind: "JobList" as const,
        ...serializeJobListProps(props),
    });
};

export type SerializedCronJobV1Beta1 = {
    apiVersion: "batch/v1beta1";
    kind: "CronJob";
} & SerializedCronJobV1Beta1Props;
export const isCronJobV1Beta1 = (
    input: any
): input is SerializedCronJobV1Beta1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "batch/v1beta1" &&
        input.kind === "CronJob"
    );
};
/**
 * CronJob represents the configuration of a single cron job.
 *
 * @schema io.k8s.api.batch.v1beta1.CronJob
 */
export const CronJobV1Beta1 = (props: CronJobV1Beta1Props = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "batch/v1beta1" as const,
        kind: "CronJob" as const,
        ...serializeCronJobV1Beta1Props(props),
    });
};

export type SerializedCronJobListV1Beta1 = {
    apiVersion: "batch/v1beta1";
    kind: "CronJobList";
} & SerializedCronJobListV1Beta1Props;
export const isCronJobListV1Beta1 = (
    input: any
): input is SerializedCronJobListV1Beta1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "batch/v1beta1" &&
        input.kind === "CronJobList"
    );
};
/**
 * CronJobList is a collection of cron jobs.
 *
 * @schema io.k8s.api.batch.v1beta1.CronJobList
 */
export const CronJobListV1Beta1 = (props: CronJobListV1Beta1Props) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "batch/v1beta1" as const,
        kind: "CronJobList" as const,
        ...serializeCronJobListV1Beta1Props(props),
    });
};

export type SerializedCertificateSigningRequest = {
    apiVersion: "certificates.k8s.io/v1";
    kind: "CertificateSigningRequest";
} & SerializedCertificateSigningRequestProps;
export const isCertificateSigningRequest = (
    input: any
): input is SerializedCertificateSigningRequest => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "certificates.k8s.io/v1" &&
        input.kind === "CertificateSigningRequest"
    );
};
/**
 * CertificateSigningRequest objects provide a mechanism to obtain x509 certificates by submitting a certificate signing request, and having it asynchronously approved and issued.

Kubelets use this API to obtain:
 1. client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client-kubelet" signerName).
 2. serving certificates for TLS endpoints kube-apiserver can connect to securely (with the "kubernetes.io/kubelet-serving" signerName).

This API can be used to request client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client" signerName), or to obtain certificates from custom non-Kubernetes signers.
 *
 * @schema io.k8s.api.certificates.v1.CertificateSigningRequest
 */
export const CertificateSigningRequest = (
    props: CertificateSigningRequestProps
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "certificates.k8s.io/v1" as const,
        kind: "CertificateSigningRequest" as const,
        ...serializeCertificateSigningRequestProps(props),
    });
};

export type SerializedCertificateSigningRequestList = {
    apiVersion: "certificates.k8s.io/v1";
    kind: "CertificateSigningRequestList";
} & SerializedCertificateSigningRequestListProps;
export const isCertificateSigningRequestList = (
    input: any
): input is SerializedCertificateSigningRequestList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "certificates.k8s.io/v1" &&
        input.kind === "CertificateSigningRequestList"
    );
};
/**
 * CertificateSigningRequestList is a collection of CertificateSigningRequest objects
 *
 * @schema io.k8s.api.certificates.v1.CertificateSigningRequestList
 */
export const CertificateSigningRequestList = (
    props: CertificateSigningRequestListProps
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "certificates.k8s.io/v1" as const,
        kind: "CertificateSigningRequestList" as const,
        ...serializeCertificateSigningRequestListProps(props),
    });
};

export type SerializedLease = {
    apiVersion: "coordination.k8s.io/v1";
    kind: "Lease";
} & SerializedLeaseProps;
export const isLease = (input: any): input is SerializedLease => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "coordination.k8s.io/v1" &&
        input.kind === "Lease"
    );
};
/**
 * Lease defines a lease concept.
 *
 * @schema io.k8s.api.coordination.v1.Lease
 */
export const Lease = (props: LeaseProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "coordination.k8s.io/v1" as const,
        kind: "Lease" as const,
        ...serializeLeaseProps(props),
    });
};

export type SerializedLeaseList = {
    apiVersion: "coordination.k8s.io/v1";
    kind: "LeaseList";
} & SerializedLeaseListProps;
export const isLeaseList = (input: any): input is SerializedLeaseList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "coordination.k8s.io/v1" &&
        input.kind === "LeaseList"
    );
};
/**
 * LeaseList is a list of Lease objects.
 *
 * @schema io.k8s.api.coordination.v1.LeaseList
 */
export const LeaseList = (props: LeaseListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "coordination.k8s.io/v1" as const,
        kind: "LeaseList" as const,
        ...serializeLeaseListProps(props),
    });
};

export type SerializedBinding = {
    apiVersion: "v1";
    kind: "Binding";
} & SerializedBindingProps;
export const isBinding = (input: any): input is SerializedBinding => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "Binding"
    );
};
/**
 * Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead.
 *
 * @schema io.k8s.api.core.v1.Binding
 */
export const Binding = (props: BindingProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "Binding" as const,
        ...serializeBindingProps(props),
    });
};

export type SerializedComponentStatus = {
    apiVersion: "v1";
    kind: "ComponentStatus";
} & SerializedComponentStatusProps;
export const isComponentStatus = (
    input: any
): input is SerializedComponentStatus => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "ComponentStatus"
    );
};
/**
 * ComponentStatus (and ComponentStatusList) holds the cluster validation info. Deprecated: This API is deprecated in v1.19+
 *
 * @schema io.k8s.api.core.v1.ComponentStatus
 */
export const ComponentStatus = (props: ComponentStatusProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "ComponentStatus" as const,
        ...serializeComponentStatusProps(props),
    });
};

export type SerializedComponentStatusList = {
    apiVersion: "v1";
    kind: "ComponentStatusList";
} & SerializedComponentStatusListProps;
export const isComponentStatusList = (
    input: any
): input is SerializedComponentStatusList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "ComponentStatusList"
    );
};
/**
 * Status of all the conditions for the component as a list of ComponentStatus objects. Deprecated: This API is deprecated in v1.19+
 *
 * @schema io.k8s.api.core.v1.ComponentStatusList
 */
export const ComponentStatusList = (props: ComponentStatusListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "ComponentStatusList" as const,
        ...serializeComponentStatusListProps(props),
    });
};

export type SerializedConfigMap = {
    apiVersion: "v1";
    kind: "ConfigMap";
} & SerializedConfigMapProps;
export const isConfigMap = (input: any): input is SerializedConfigMap => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "ConfigMap"
    );
};
/**
 * ConfigMap holds configuration data for pods to consume.
 *
 * @schema io.k8s.api.core.v1.ConfigMap
 */
export const ConfigMap = (props: ConfigMapProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "ConfigMap" as const,
        ...serializeConfigMapProps(props),
    });
};

export type SerializedConfigMapList = {
    apiVersion: "v1";
    kind: "ConfigMapList";
} & SerializedConfigMapListProps;
export const isConfigMapList = (
    input: any
): input is SerializedConfigMapList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "ConfigMapList"
    );
};
/**
 * ConfigMapList is a resource containing a list of ConfigMap objects.
 *
 * @schema io.k8s.api.core.v1.ConfigMapList
 */
export const ConfigMapList = (props: ConfigMapListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "ConfigMapList" as const,
        ...serializeConfigMapListProps(props),
    });
};

export type SerializedEndpoints = {
    apiVersion: "v1";
    kind: "Endpoints";
} & SerializedEndpointsProps;
export const isEndpoints = (input: any): input is SerializedEndpoints => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "Endpoints"
    );
};
/**
 * Endpoints is a collection of endpoints that implement the actual service. Example:
  Name: "mysvc",
  Subsets: [
    {
      Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
      Ports: [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
    },
    {
      Addresses: [{"ip": "10.10.3.3"}],
      Ports: [{"name": "a", "port": 93}, {"name": "b", "port": 76}]
    },
 ]
 *
 * @schema io.k8s.api.core.v1.Endpoints
 */
export const Endpoints = (props: EndpointsProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "Endpoints" as const,
        ...serializeEndpointsProps(props),
    });
};

export type SerializedEndpointsList = {
    apiVersion: "v1";
    kind: "EndpointsList";
} & SerializedEndpointsListProps;
export const isEndpointsList = (
    input: any
): input is SerializedEndpointsList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "EndpointsList"
    );
};
/**
 * EndpointsList is a list of endpoints.
 *
 * @schema io.k8s.api.core.v1.EndpointsList
 */
export const EndpointsList = (props: EndpointsListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "EndpointsList" as const,
        ...serializeEndpointsListProps(props),
    });
};

export type SerializedEvent = {
    apiVersion: "events.k8s.io/v1";
    kind: "Event";
} & SerializedEventProps;
export const isEvent = (input: any): input is SerializedEvent => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "events.k8s.io/v1" &&
        input.kind === "Event"
    );
};
/**
 * Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system. Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data.
 *
 * @schema io.k8s.api.events.v1.Event
 */
export const Event = (props: EventProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "events.k8s.io/v1" as const,
        kind: "Event" as const,
        ...serializeEventProps(props),
    });
};

export type SerializedEventList = {
    apiVersion: "events.k8s.io/v1";
    kind: "EventList";
} & SerializedEventListProps;
export const isEventList = (input: any): input is SerializedEventList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "events.k8s.io/v1" &&
        input.kind === "EventList"
    );
};
/**
 * EventList is a list of Event objects.
 *
 * @schema io.k8s.api.events.v1.EventList
 */
export const EventList = (props: EventListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "events.k8s.io/v1" as const,
        kind: "EventList" as const,
        ...serializeEventListProps(props),
    });
};

export type SerializedLimitRange = {
    apiVersion: "v1";
    kind: "LimitRange";
} & SerializedLimitRangeProps;
export const isLimitRange = (input: any): input is SerializedLimitRange => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "LimitRange"
    );
};
/**
 * LimitRange sets resource usage limits for each kind of resource in a Namespace.
 *
 * @schema io.k8s.api.core.v1.LimitRange
 */
export const LimitRange = (props: LimitRangeProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "LimitRange" as const,
        ...serializeLimitRangeProps(props),
    });
};

export type SerializedLimitRangeList = {
    apiVersion: "v1";
    kind: "LimitRangeList";
} & SerializedLimitRangeListProps;
export const isLimitRangeList = (
    input: any
): input is SerializedLimitRangeList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "LimitRangeList"
    );
};
/**
 * LimitRangeList is a list of LimitRange items.
 *
 * @schema io.k8s.api.core.v1.LimitRangeList
 */
export const LimitRangeList = (props: LimitRangeListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "LimitRangeList" as const,
        ...serializeLimitRangeListProps(props),
    });
};

export type SerializedNamespace = {
    apiVersion: "v1";
    kind: "Namespace";
} & SerializedNamespaceProps;
export const isNamespace = (input: any): input is SerializedNamespace => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "Namespace"
    );
};
/**
 * Namespace provides a scope for Names. Use of multiple namespaces is optional.
 *
 * @schema io.k8s.api.core.v1.Namespace
 */
export const Namespace = (props: NamespaceProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "Namespace" as const,
        ...serializeNamespaceProps(props),
    });
};

export type SerializedNamespaceList = {
    apiVersion: "v1";
    kind: "NamespaceList";
} & SerializedNamespaceListProps;
export const isNamespaceList = (
    input: any
): input is SerializedNamespaceList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "NamespaceList"
    );
};
/**
 * NamespaceList is a list of Namespaces.
 *
 * @schema io.k8s.api.core.v1.NamespaceList
 */
export const NamespaceList = (props: NamespaceListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "NamespaceList" as const,
        ...serializeNamespaceListProps(props),
    });
};

export type SerializedNode = {
    apiVersion: "v1";
    kind: "Node";
} & SerializedNodeProps;
export const isNode = (input: any): input is SerializedNode => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "Node"
    );
};
/**
 * Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).
 *
 * @schema io.k8s.api.core.v1.Node
 */
export const Node = (props: NodeProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "Node" as const,
        ...serializeNodeProps(props),
    });
};

export type SerializedNodeList = {
    apiVersion: "v1";
    kind: "NodeList";
} & SerializedNodeListProps;
export const isNodeList = (input: any): input is SerializedNodeList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "NodeList"
    );
};
/**
 * NodeList is the whole list of all Nodes which have been registered with master.
 *
 * @schema io.k8s.api.core.v1.NodeList
 */
export const NodeList = (props: NodeListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "NodeList" as const,
        ...serializeNodeListProps(props),
    });
};

export type SerializedPersistentVolume = {
    apiVersion: "v1";
    kind: "PersistentVolume";
} & SerializedPersistentVolumeProps;
export const isPersistentVolume = (
    input: any
): input is SerializedPersistentVolume => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "PersistentVolume"
    );
};
/**
 * PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
 *
 * @schema io.k8s.api.core.v1.PersistentVolume
 */
export const PersistentVolume = (props: PersistentVolumeProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "PersistentVolume" as const,
        ...serializePersistentVolumeProps(props),
    });
};

export type SerializedPersistentVolumeClaim = {
    apiVersion: "v1";
    kind: "PersistentVolumeClaim";
} & SerializedPersistentVolumeClaimProps;
export const isPersistentVolumeClaim = (
    input: any
): input is SerializedPersistentVolumeClaim => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "PersistentVolumeClaim"
    );
};
/**
 * PersistentVolumeClaim is a user's request for and claim to a persistent volume
 *
 * @schema io.k8s.api.core.v1.PersistentVolumeClaim
 */
export const PersistentVolumeClaim = (
    props: PersistentVolumeClaimProps = {}
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "PersistentVolumeClaim" as const,
        ...serializePersistentVolumeClaimProps(props),
    });
};

export type SerializedPersistentVolumeClaimList = {
    apiVersion: "v1";
    kind: "PersistentVolumeClaimList";
} & SerializedPersistentVolumeClaimListProps;
export const isPersistentVolumeClaimList = (
    input: any
): input is SerializedPersistentVolumeClaimList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "PersistentVolumeClaimList"
    );
};
/**
 * PersistentVolumeClaimList is a list of PersistentVolumeClaim items.
 *
 * @schema io.k8s.api.core.v1.PersistentVolumeClaimList
 */
export const PersistentVolumeClaimList = (
    props: PersistentVolumeClaimListProps
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "PersistentVolumeClaimList" as const,
        ...serializePersistentVolumeClaimListProps(props),
    });
};

export type SerializedPersistentVolumeList = {
    apiVersion: "v1";
    kind: "PersistentVolumeList";
} & SerializedPersistentVolumeListProps;
export const isPersistentVolumeList = (
    input: any
): input is SerializedPersistentVolumeList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "PersistentVolumeList"
    );
};
/**
 * PersistentVolumeList is a list of PersistentVolume items.
 *
 * @schema io.k8s.api.core.v1.PersistentVolumeList
 */
export const PersistentVolumeList = (props: PersistentVolumeListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "PersistentVolumeList" as const,
        ...serializePersistentVolumeListProps(props),
    });
};

export type SerializedPod = {
    apiVersion: "v1";
    kind: "Pod";
} & SerializedPodProps;
export const isPod = (input: any): input is SerializedPod => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "Pod"
    );
};
/**
 * Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts.
 *
 * @schema io.k8s.api.core.v1.Pod
 */
export const Pod = (props: PodProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "Pod" as const,
        ...serializePodProps(props),
    });
};

export type SerializedPodList = {
    apiVersion: "v1";
    kind: "PodList";
} & SerializedPodListProps;
export const isPodList = (input: any): input is SerializedPodList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "PodList"
    );
};
/**
 * PodList is a list of Pods.
 *
 * @schema io.k8s.api.core.v1.PodList
 */
export const PodList = (props: PodListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "PodList" as const,
        ...serializePodListProps(props),
    });
};

export type SerializedPodTemplate = {
    apiVersion: "v1";
    kind: "PodTemplate";
} & SerializedPodTemplateProps;
export const isPodTemplate = (input: any): input is SerializedPodTemplate => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "PodTemplate"
    );
};
/**
 * PodTemplate describes a template for creating copies of a predefined pod.
 *
 * @schema io.k8s.api.core.v1.PodTemplate
 */
export const PodTemplate = (props: PodTemplateProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "PodTemplate" as const,
        ...serializePodTemplateProps(props),
    });
};

export type SerializedPodTemplateList = {
    apiVersion: "v1";
    kind: "PodTemplateList";
} & SerializedPodTemplateListProps;
export const isPodTemplateList = (
    input: any
): input is SerializedPodTemplateList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "PodTemplateList"
    );
};
/**
 * PodTemplateList is a list of PodTemplates.
 *
 * @schema io.k8s.api.core.v1.PodTemplateList
 */
export const PodTemplateList = (props: PodTemplateListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "PodTemplateList" as const,
        ...serializePodTemplateListProps(props),
    });
};

export type SerializedReplicationController = {
    apiVersion: "v1";
    kind: "ReplicationController";
} & SerializedReplicationControllerProps;
export const isReplicationController = (
    input: any
): input is SerializedReplicationController => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "ReplicationController"
    );
};
/**
 * ReplicationController represents the configuration of a replication controller.
 *
 * @schema io.k8s.api.core.v1.ReplicationController
 */
export const ReplicationController = (
    props: ReplicationControllerProps = {}
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "ReplicationController" as const,
        ...serializeReplicationControllerProps(props),
    });
};

export type SerializedReplicationControllerList = {
    apiVersion: "v1";
    kind: "ReplicationControllerList";
} & SerializedReplicationControllerListProps;
export const isReplicationControllerList = (
    input: any
): input is SerializedReplicationControllerList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "ReplicationControllerList"
    );
};
/**
 * ReplicationControllerList is a collection of replication controllers.
 *
 * @schema io.k8s.api.core.v1.ReplicationControllerList
 */
export const ReplicationControllerList = (
    props: ReplicationControllerListProps
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "ReplicationControllerList" as const,
        ...serializeReplicationControllerListProps(props),
    });
};

export type SerializedResourceQuota = {
    apiVersion: "v1";
    kind: "ResourceQuota";
} & SerializedResourceQuotaProps;
export const isResourceQuota = (
    input: any
): input is SerializedResourceQuota => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "ResourceQuota"
    );
};
/**
 * ResourceQuota sets aggregate quota restrictions enforced per namespace
 *
 * @schema io.k8s.api.core.v1.ResourceQuota
 */
export const ResourceQuota = (props: ResourceQuotaProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "ResourceQuota" as const,
        ...serializeResourceQuotaProps(props),
    });
};

export type SerializedResourceQuotaList = {
    apiVersion: "v1";
    kind: "ResourceQuotaList";
} & SerializedResourceQuotaListProps;
export const isResourceQuotaList = (
    input: any
): input is SerializedResourceQuotaList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "ResourceQuotaList"
    );
};
/**
 * ResourceQuotaList is a list of ResourceQuota items.
 *
 * @schema io.k8s.api.core.v1.ResourceQuotaList
 */
export const ResourceQuotaList = (props: ResourceQuotaListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "ResourceQuotaList" as const,
        ...serializeResourceQuotaListProps(props),
    });
};

export type SerializedSecret = {
    apiVersion: "v1";
    kind: "Secret";
} & SerializedSecretProps;
export const isSecret = (input: any): input is SerializedSecret => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "Secret"
    );
};
/**
 * Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes.
 *
 * @schema io.k8s.api.core.v1.Secret
 */
export const Secret = (props: SecretProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "Secret" as const,
        ...serializeSecretProps(props),
    });
};

export type SerializedSecretList = {
    apiVersion: "v1";
    kind: "SecretList";
} & SerializedSecretListProps;
export const isSecretList = (input: any): input is SerializedSecretList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "SecretList"
    );
};
/**
 * SecretList is a list of Secret.
 *
 * @schema io.k8s.api.core.v1.SecretList
 */
export const SecretList = (props: SecretListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "SecretList" as const,
        ...serializeSecretListProps(props),
    });
};

export type SerializedService = {
    apiVersion: "v1";
    kind: "Service";
} & SerializedServiceProps;
export const isService = (input: any): input is SerializedService => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "Service"
    );
};
/**
 * Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy.
 *
 * @schema io.k8s.api.core.v1.Service
 */
export const Service = (props: ServiceProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "Service" as const,
        ...serializeServiceProps(props),
    });
};

export type SerializedServiceAccount = {
    apiVersion: "v1";
    kind: "ServiceAccount";
} & SerializedServiceAccountProps;
export const isServiceAccount = (
    input: any
): input is SerializedServiceAccount => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "ServiceAccount"
    );
};
/**
 * ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets
 *
 * @schema io.k8s.api.core.v1.ServiceAccount
 */
export const ServiceAccount = (props: ServiceAccountProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "ServiceAccount" as const,
        ...serializeServiceAccountProps(props),
    });
};

export type SerializedServiceAccountList = {
    apiVersion: "v1";
    kind: "ServiceAccountList";
} & SerializedServiceAccountListProps;
export const isServiceAccountList = (
    input: any
): input is SerializedServiceAccountList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "ServiceAccountList"
    );
};
/**
 * ServiceAccountList is a list of ServiceAccount objects
 *
 * @schema io.k8s.api.core.v1.ServiceAccountList
 */
export const ServiceAccountList = (props: ServiceAccountListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "ServiceAccountList" as const,
        ...serializeServiceAccountListProps(props),
    });
};

export type SerializedServiceList = {
    apiVersion: "v1";
    kind: "ServiceList";
} & SerializedServiceListProps;
export const isServiceList = (input: any): input is SerializedServiceList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "ServiceList"
    );
};
/**
 * ServiceList holds a list of services.
 *
 * @schema io.k8s.api.core.v1.ServiceList
 */
export const ServiceList = (props: ServiceListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "ServiceList" as const,
        ...serializeServiceListProps(props),
    });
};

export type SerializedEndpointSlice = {
    apiVersion: "discovery.k8s.io/v1";
    kind: "EndpointSlice";
} & SerializedEndpointSliceProps;
export const isEndpointSlice = (
    input: any
): input is SerializedEndpointSlice => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "discovery.k8s.io/v1" &&
        input.kind === "EndpointSlice"
    );
};
/**
 * EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints.
 *
 * @schema io.k8s.api.discovery.v1.EndpointSlice
 */
export const EndpointSlice = (props: EndpointSliceProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "discovery.k8s.io/v1" as const,
        kind: "EndpointSlice" as const,
        ...serializeEndpointSliceProps(props),
    });
};

export type SerializedEndpointSliceList = {
    apiVersion: "discovery.k8s.io/v1";
    kind: "EndpointSliceList";
} & SerializedEndpointSliceListProps;
export const isEndpointSliceList = (
    input: any
): input is SerializedEndpointSliceList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "discovery.k8s.io/v1" &&
        input.kind === "EndpointSliceList"
    );
};
/**
 * EndpointSliceList represents a list of endpoint slices
 *
 * @schema io.k8s.api.discovery.v1.EndpointSliceList
 */
export const EndpointSliceList = (props: EndpointSliceListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "discovery.k8s.io/v1" as const,
        kind: "EndpointSliceList" as const,
        ...serializeEndpointSliceListProps(props),
    });
};

export type SerializedEndpointSliceV1Beta1 = {
    apiVersion: "discovery.k8s.io/v1beta1";
    kind: "EndpointSlice";
} & SerializedEndpointSliceV1Beta1Props;
export const isEndpointSliceV1Beta1 = (
    input: any
): input is SerializedEndpointSliceV1Beta1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "discovery.k8s.io/v1beta1" &&
        input.kind === "EndpointSlice"
    );
};
/**
 * EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints.
 *
 * @schema io.k8s.api.discovery.v1beta1.EndpointSlice
 */
export const EndpointSliceV1Beta1 = (props: EndpointSliceV1Beta1Props) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "discovery.k8s.io/v1beta1" as const,
        kind: "EndpointSlice" as const,
        ...serializeEndpointSliceV1Beta1Props(props),
    });
};

export type SerializedEndpointSliceListV1Beta1 = {
    apiVersion: "discovery.k8s.io/v1beta1";
    kind: "EndpointSliceList";
} & SerializedEndpointSliceListV1Beta1Props;
export const isEndpointSliceListV1Beta1 = (
    input: any
): input is SerializedEndpointSliceListV1Beta1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "discovery.k8s.io/v1beta1" &&
        input.kind === "EndpointSliceList"
    );
};
/**
 * EndpointSliceList represents a list of endpoint slices
 *
 * @schema io.k8s.api.discovery.v1beta1.EndpointSliceList
 */
export const EndpointSliceListV1Beta1 = (
    props: EndpointSliceListV1Beta1Props
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "discovery.k8s.io/v1beta1" as const,
        kind: "EndpointSliceList" as const,
        ...serializeEndpointSliceListV1Beta1Props(props),
    });
};

export type SerializedEventV1Beta1 = {
    apiVersion: "events.k8s.io/v1beta1";
    kind: "Event";
} & SerializedEventV1Beta1Props;
export const isEventV1Beta1 = (input: any): input is SerializedEventV1Beta1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "events.k8s.io/v1beta1" &&
        input.kind === "Event"
    );
};
/**
 * Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system. Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data.
 *
 * @schema io.k8s.api.events.v1beta1.Event
 */
export const EventV1Beta1 = (props: EventV1Beta1Props) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "events.k8s.io/v1beta1" as const,
        kind: "Event" as const,
        ...serializeEventV1Beta1Props(props),
    });
};

export type SerializedEventListV1Beta1 = {
    apiVersion: "events.k8s.io/v1beta1";
    kind: "EventList";
} & SerializedEventListV1Beta1Props;
export const isEventListV1Beta1 = (
    input: any
): input is SerializedEventListV1Beta1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "events.k8s.io/v1beta1" &&
        input.kind === "EventList"
    );
};
/**
 * EventList is a list of Event objects.
 *
 * @schema io.k8s.api.events.v1beta1.EventList
 */
export const EventListV1Beta1 = (props: EventListV1Beta1Props) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "events.k8s.io/v1beta1" as const,
        kind: "EventList" as const,
        ...serializeEventListV1Beta1Props(props),
    });
};

export type SerializedFlowSchemaV1Beta1 = {
    apiVersion: "flowcontrol.apiserver.k8s.io/v1beta1";
    kind: "FlowSchema";
} & SerializedFlowSchemaV1Beta1Props;
export const isFlowSchemaV1Beta1 = (
    input: any
): input is SerializedFlowSchemaV1Beta1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "flowcontrol.apiserver.k8s.io/v1beta1" &&
        input.kind === "FlowSchema"
    );
};
/**
 * FlowSchema defines the schema of a group of flows. Note that a flow is made up of a set of inbound API requests with similar attributes and is identified by a pair of strings: the name of the FlowSchema and a "flow distinguisher".
 *
 * @schema io.k8s.api.flowcontrol.v1beta1.FlowSchema
 */
export const FlowSchemaV1Beta1 = (props: FlowSchemaV1Beta1Props = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "flowcontrol.apiserver.k8s.io/v1beta1" as const,
        kind: "FlowSchema" as const,
        ...serializeFlowSchemaV1Beta1Props(props),
    });
};

export type SerializedFlowSchemaListV1Beta1 = {
    apiVersion: "flowcontrol.apiserver.k8s.io/v1beta1";
    kind: "FlowSchemaList";
} & SerializedFlowSchemaListV1Beta1Props;
export const isFlowSchemaListV1Beta1 = (
    input: any
): input is SerializedFlowSchemaListV1Beta1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "flowcontrol.apiserver.k8s.io/v1beta1" &&
        input.kind === "FlowSchemaList"
    );
};
/**
 * FlowSchemaList is a list of FlowSchema objects.
 *
 * @schema io.k8s.api.flowcontrol.v1beta1.FlowSchemaList
 */
export const FlowSchemaListV1Beta1 = (props: FlowSchemaListV1Beta1Props) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "flowcontrol.apiserver.k8s.io/v1beta1" as const,
        kind: "FlowSchemaList" as const,
        ...serializeFlowSchemaListV1Beta1Props(props),
    });
};

export type SerializedPriorityLevelConfigurationV1Beta1 = {
    apiVersion: "flowcontrol.apiserver.k8s.io/v1beta1";
    kind: "PriorityLevelConfiguration";
} & SerializedPriorityLevelConfigurationV1Beta1Props;
export const isPriorityLevelConfigurationV1Beta1 = (
    input: any
): input is SerializedPriorityLevelConfigurationV1Beta1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "flowcontrol.apiserver.k8s.io/v1beta1" &&
        input.kind === "PriorityLevelConfiguration"
    );
};
/**
 * PriorityLevelConfiguration represents the configuration of a priority level.
 *
 * @schema io.k8s.api.flowcontrol.v1beta1.PriorityLevelConfiguration
 */
export const PriorityLevelConfigurationV1Beta1 = (
    props: PriorityLevelConfigurationV1Beta1Props = {}
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "flowcontrol.apiserver.k8s.io/v1beta1" as const,
        kind: "PriorityLevelConfiguration" as const,
        ...serializePriorityLevelConfigurationV1Beta1Props(props),
    });
};

export type SerializedPriorityLevelConfigurationListV1Beta1 = {
    apiVersion: "flowcontrol.apiserver.k8s.io/v1beta1";
    kind: "PriorityLevelConfigurationList";
} & SerializedPriorityLevelConfigurationListV1Beta1Props;
export const isPriorityLevelConfigurationListV1Beta1 = (
    input: any
): input is SerializedPriorityLevelConfigurationListV1Beta1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "flowcontrol.apiserver.k8s.io/v1beta1" &&
        input.kind === "PriorityLevelConfigurationList"
    );
};
/**
 * PriorityLevelConfigurationList is a list of PriorityLevelConfiguration objects.
 *
 * @schema io.k8s.api.flowcontrol.v1beta1.PriorityLevelConfigurationList
 */
export const PriorityLevelConfigurationListV1Beta1 = (
    props: PriorityLevelConfigurationListV1Beta1Props
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "flowcontrol.apiserver.k8s.io/v1beta1" as const,
        kind: "PriorityLevelConfigurationList" as const,
        ...serializePriorityLevelConfigurationListV1Beta1Props(props),
    });
};

export type SerializedIngress = {
    apiVersion: "networking.k8s.io/v1";
    kind: "Ingress";
} & SerializedIngressProps;
export const isIngress = (input: any): input is SerializedIngress => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "networking.k8s.io/v1" &&
        input.kind === "Ingress"
    );
};
/**
 * Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
 *
 * @schema io.k8s.api.networking.v1.Ingress
 */
export const Ingress = (props: IngressProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "networking.k8s.io/v1" as const,
        kind: "Ingress" as const,
        ...serializeIngressProps(props),
    });
};

export type SerializedIngressClass = {
    apiVersion: "networking.k8s.io/v1";
    kind: "IngressClass";
} & SerializedIngressClassProps;
export const isIngressClass = (input: any): input is SerializedIngressClass => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "networking.k8s.io/v1" &&
        input.kind === "IngressClass"
    );
};
/**
 * IngressClass represents the class of the Ingress, referenced by the Ingress Spec. The `ingressclass.kubernetes.io/is-default-class` annotation can be used to indicate that an IngressClass should be considered default. When a single IngressClass resource has this annotation set to true, new Ingress resources without a class specified will be assigned this default class.
 *
 * @schema io.k8s.api.networking.v1.IngressClass
 */
export const IngressClass = (props: IngressClassProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "networking.k8s.io/v1" as const,
        kind: "IngressClass" as const,
        ...serializeIngressClassProps(props),
    });
};

export type SerializedIngressClassList = {
    apiVersion: "networking.k8s.io/v1";
    kind: "IngressClassList";
} & SerializedIngressClassListProps;
export const isIngressClassList = (
    input: any
): input is SerializedIngressClassList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "networking.k8s.io/v1" &&
        input.kind === "IngressClassList"
    );
};
/**
 * IngressClassList is a collection of IngressClasses.
 *
 * @schema io.k8s.api.networking.v1.IngressClassList
 */
export const IngressClassList = (props: IngressClassListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "networking.k8s.io/v1" as const,
        kind: "IngressClassList" as const,
        ...serializeIngressClassListProps(props),
    });
};

export type SerializedIngressList = {
    apiVersion: "networking.k8s.io/v1";
    kind: "IngressList";
} & SerializedIngressListProps;
export const isIngressList = (input: any): input is SerializedIngressList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "networking.k8s.io/v1" &&
        input.kind === "IngressList"
    );
};
/**
 * IngressList is a collection of Ingress.
 *
 * @schema io.k8s.api.networking.v1.IngressList
 */
export const IngressList = (props: IngressListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "networking.k8s.io/v1" as const,
        kind: "IngressList" as const,
        ...serializeIngressListProps(props),
    });
};

export type SerializedNetworkPolicy = {
    apiVersion: "networking.k8s.io/v1";
    kind: "NetworkPolicy";
} & SerializedNetworkPolicyProps;
export const isNetworkPolicy = (
    input: any
): input is SerializedNetworkPolicy => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "networking.k8s.io/v1" &&
        input.kind === "NetworkPolicy"
    );
};
/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 *
 * @schema io.k8s.api.networking.v1.NetworkPolicy
 */
export const NetworkPolicy = (props: NetworkPolicyProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "networking.k8s.io/v1" as const,
        kind: "NetworkPolicy" as const,
        ...serializeNetworkPolicyProps(props),
    });
};

export type SerializedNetworkPolicyList = {
    apiVersion: "networking.k8s.io/v1";
    kind: "NetworkPolicyList";
} & SerializedNetworkPolicyListProps;
export const isNetworkPolicyList = (
    input: any
): input is SerializedNetworkPolicyList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "networking.k8s.io/v1" &&
        input.kind === "NetworkPolicyList"
    );
};
/**
 * NetworkPolicyList is a list of NetworkPolicy objects.
 *
 * @schema io.k8s.api.networking.v1.NetworkPolicyList
 */
export const NetworkPolicyList = (props: NetworkPolicyListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "networking.k8s.io/v1" as const,
        kind: "NetworkPolicyList" as const,
        ...serializeNetworkPolicyListProps(props),
    });
};

export type SerializedRuntimeClass = {
    apiVersion: "node.k8s.io/v1";
    kind: "RuntimeClass";
} & SerializedRuntimeClassProps;
export const isRuntimeClass = (input: any): input is SerializedRuntimeClass => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "node.k8s.io/v1" &&
        input.kind === "RuntimeClass"
    );
};
/**
 * RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://kubernetes.io/docs/concepts/containers/runtime-class/
 *
 * @schema io.k8s.api.node.v1.RuntimeClass
 */
export const RuntimeClass = (props: RuntimeClassProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "node.k8s.io/v1" as const,
        kind: "RuntimeClass" as const,
        ...serializeRuntimeClassProps(props),
    });
};

export type SerializedRuntimeClassList = {
    apiVersion: "node.k8s.io/v1";
    kind: "RuntimeClassList";
} & SerializedRuntimeClassListProps;
export const isRuntimeClassList = (
    input: any
): input is SerializedRuntimeClassList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "node.k8s.io/v1" &&
        input.kind === "RuntimeClassList"
    );
};
/**
 * RuntimeClassList is a list of RuntimeClass objects.
 *
 * @schema io.k8s.api.node.v1.RuntimeClassList
 */
export const RuntimeClassList = (props: RuntimeClassListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "node.k8s.io/v1" as const,
        kind: "RuntimeClassList" as const,
        ...serializeRuntimeClassListProps(props),
    });
};

export type SerializedRuntimeClassV1Alpha1 = {
    apiVersion: "node.k8s.io/v1alpha1";
    kind: "RuntimeClass";
} & SerializedRuntimeClassV1Alpha1Props;
export const isRuntimeClassV1Alpha1 = (
    input: any
): input is SerializedRuntimeClassV1Alpha1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "node.k8s.io/v1alpha1" &&
        input.kind === "RuntimeClass"
    );
};
/**
 * RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class
 *
 * @schema io.k8s.api.node.v1alpha1.RuntimeClass
 */
export const RuntimeClassV1Alpha1 = (props: RuntimeClassV1Alpha1Props) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "node.k8s.io/v1alpha1" as const,
        kind: "RuntimeClass" as const,
        ...serializeRuntimeClassV1Alpha1Props(props),
    });
};

export type SerializedRuntimeClassListV1Alpha1 = {
    apiVersion: "node.k8s.io/v1alpha1";
    kind: "RuntimeClassList";
} & SerializedRuntimeClassListV1Alpha1Props;
export const isRuntimeClassListV1Alpha1 = (
    input: any
): input is SerializedRuntimeClassListV1Alpha1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "node.k8s.io/v1alpha1" &&
        input.kind === "RuntimeClassList"
    );
};
/**
 * RuntimeClassList is a list of RuntimeClass objects.
 *
 * @schema io.k8s.api.node.v1alpha1.RuntimeClassList
 */
export const RuntimeClassListV1Alpha1 = (
    props: RuntimeClassListV1Alpha1Props
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "node.k8s.io/v1alpha1" as const,
        kind: "RuntimeClassList" as const,
        ...serializeRuntimeClassListV1Alpha1Props(props),
    });
};

export type SerializedRuntimeClassV1Beta1 = {
    apiVersion: "node.k8s.io/v1beta1";
    kind: "RuntimeClass";
} & SerializedRuntimeClassV1Beta1Props;
export const isRuntimeClassV1Beta1 = (
    input: any
): input is SerializedRuntimeClassV1Beta1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "node.k8s.io/v1beta1" &&
        input.kind === "RuntimeClass"
    );
};
/**
 * RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class
 *
 * @schema io.k8s.api.node.v1beta1.RuntimeClass
 */
export const RuntimeClassV1Beta1 = (props: RuntimeClassV1Beta1Props) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "node.k8s.io/v1beta1" as const,
        kind: "RuntimeClass" as const,
        ...serializeRuntimeClassV1Beta1Props(props),
    });
};

export type SerializedRuntimeClassListV1Beta1 = {
    apiVersion: "node.k8s.io/v1beta1";
    kind: "RuntimeClassList";
} & SerializedRuntimeClassListV1Beta1Props;
export const isRuntimeClassListV1Beta1 = (
    input: any
): input is SerializedRuntimeClassListV1Beta1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "node.k8s.io/v1beta1" &&
        input.kind === "RuntimeClassList"
    );
};
/**
 * RuntimeClassList is a list of RuntimeClass objects.
 *
 * @schema io.k8s.api.node.v1beta1.RuntimeClassList
 */
export const RuntimeClassListV1Beta1 = (
    props: RuntimeClassListV1Beta1Props
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "node.k8s.io/v1beta1" as const,
        kind: "RuntimeClassList" as const,
        ...serializeRuntimeClassListV1Beta1Props(props),
    });
};

export type SerializedEviction = {
    apiVersion: "policy/v1";
    kind: "Eviction";
} & SerializedEvictionProps;
export const isEviction = (input: any): input is SerializedEviction => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "policy/v1" &&
        input.kind === "Eviction"
    );
};
/**
 * Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
 *
 * @schema io.k8s.api.policy.v1.Eviction
 */
export const Eviction = (props: EvictionProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "policy/v1" as const,
        kind: "Eviction" as const,
        ...serializeEvictionProps(props),
    });
};

export type SerializedPodDisruptionBudget = {
    apiVersion: "policy/v1";
    kind: "PodDisruptionBudget";
} & SerializedPodDisruptionBudgetProps;
export const isPodDisruptionBudget = (
    input: any
): input is SerializedPodDisruptionBudget => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "policy/v1" &&
        input.kind === "PodDisruptionBudget"
    );
};
/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 *
 * @schema io.k8s.api.policy.v1.PodDisruptionBudget
 */
export const PodDisruptionBudget = (props: PodDisruptionBudgetProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "policy/v1" as const,
        kind: "PodDisruptionBudget" as const,
        ...serializePodDisruptionBudgetProps(props),
    });
};

export type SerializedPodDisruptionBudgetList = {
    apiVersion: "policy/v1";
    kind: "PodDisruptionBudgetList";
} & SerializedPodDisruptionBudgetListProps;
export const isPodDisruptionBudgetList = (
    input: any
): input is SerializedPodDisruptionBudgetList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "policy/v1" &&
        input.kind === "PodDisruptionBudgetList"
    );
};
/**
 * PodDisruptionBudgetList is a collection of PodDisruptionBudgets.
 *
 * @schema io.k8s.api.policy.v1.PodDisruptionBudgetList
 */
export const PodDisruptionBudgetList = (
    props: PodDisruptionBudgetListProps
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "policy/v1" as const,
        kind: "PodDisruptionBudgetList" as const,
        ...serializePodDisruptionBudgetListProps(props),
    });
};

export type SerializedPodDisruptionBudgetV1Beta1 = {
    apiVersion: "policy/v1beta1";
    kind: "PodDisruptionBudget";
} & SerializedPodDisruptionBudgetV1Beta1Props;
export const isPodDisruptionBudgetV1Beta1 = (
    input: any
): input is SerializedPodDisruptionBudgetV1Beta1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "policy/v1beta1" &&
        input.kind === "PodDisruptionBudget"
    );
};
/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 *
 * @schema io.k8s.api.policy.v1beta1.PodDisruptionBudget
 */
export const PodDisruptionBudgetV1Beta1 = (
    props: PodDisruptionBudgetV1Beta1Props = {}
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "policy/v1beta1" as const,
        kind: "PodDisruptionBudget" as const,
        ...serializePodDisruptionBudgetV1Beta1Props(props),
    });
};

export type SerializedPodDisruptionBudgetListV1Beta1 = {
    apiVersion: "policy/v1beta1";
    kind: "PodDisruptionBudgetList";
} & SerializedPodDisruptionBudgetListV1Beta1Props;
export const isPodDisruptionBudgetListV1Beta1 = (
    input: any
): input is SerializedPodDisruptionBudgetListV1Beta1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "policy/v1beta1" &&
        input.kind === "PodDisruptionBudgetList"
    );
};
/**
 * PodDisruptionBudgetList is a collection of PodDisruptionBudgets.
 *
 * @schema io.k8s.api.policy.v1beta1.PodDisruptionBudgetList
 */
export const PodDisruptionBudgetListV1Beta1 = (
    props: PodDisruptionBudgetListV1Beta1Props
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "policy/v1beta1" as const,
        kind: "PodDisruptionBudgetList" as const,
        ...serializePodDisruptionBudgetListV1Beta1Props(props),
    });
};

export type SerializedPodSecurityPolicyV1Beta1 = {
    apiVersion: "policy/v1beta1";
    kind: "PodSecurityPolicy";
} & SerializedPodSecurityPolicyV1Beta1Props;
export const isPodSecurityPolicyV1Beta1 = (
    input: any
): input is SerializedPodSecurityPolicyV1Beta1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "policy/v1beta1" &&
        input.kind === "PodSecurityPolicy"
    );
};
/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container. Deprecated in 1.21.
 *
 * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicy
 */
export const PodSecurityPolicyV1Beta1 = (
    props: PodSecurityPolicyV1Beta1Props = {}
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "policy/v1beta1" as const,
        kind: "PodSecurityPolicy" as const,
        ...serializePodSecurityPolicyV1Beta1Props(props),
    });
};

export type SerializedPodSecurityPolicyListV1Beta1 = {
    apiVersion: "policy/v1beta1";
    kind: "PodSecurityPolicyList";
} & SerializedPodSecurityPolicyListV1Beta1Props;
export const isPodSecurityPolicyListV1Beta1 = (
    input: any
): input is SerializedPodSecurityPolicyListV1Beta1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "policy/v1beta1" &&
        input.kind === "PodSecurityPolicyList"
    );
};
/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects.
 *
 * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicyList
 */
export const PodSecurityPolicyListV1Beta1 = (
    props: PodSecurityPolicyListV1Beta1Props
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "policy/v1beta1" as const,
        kind: "PodSecurityPolicyList" as const,
        ...serializePodSecurityPolicyListV1Beta1Props(props),
    });
};

export type SerializedClusterRole = {
    apiVersion: "rbac.authorization.k8s.io/v1";
    kind: "ClusterRole";
} & SerializedClusterRoleProps;
export const isClusterRole = (input: any): input is SerializedClusterRole => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "rbac.authorization.k8s.io/v1" &&
        input.kind === "ClusterRole"
    );
};
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 *
 * @schema io.k8s.api.rbac.v1.ClusterRole
 */
export const ClusterRole = (props: ClusterRoleProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "rbac.authorization.k8s.io/v1" as const,
        kind: "ClusterRole" as const,
        ...serializeClusterRoleProps(props),
    });
};

export type SerializedClusterRoleBinding = {
    apiVersion: "rbac.authorization.k8s.io/v1";
    kind: "ClusterRoleBinding";
} & SerializedClusterRoleBindingProps;
export const isClusterRoleBinding = (
    input: any
): input is SerializedClusterRoleBinding => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "rbac.authorization.k8s.io/v1" &&
        input.kind === "ClusterRoleBinding"
    );
};
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 *
 * @schema io.k8s.api.rbac.v1.ClusterRoleBinding
 */
export const ClusterRoleBinding = (props: ClusterRoleBindingProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "rbac.authorization.k8s.io/v1" as const,
        kind: "ClusterRoleBinding" as const,
        ...serializeClusterRoleBindingProps(props),
    });
};

export type SerializedClusterRoleBindingList = {
    apiVersion: "rbac.authorization.k8s.io/v1";
    kind: "ClusterRoleBindingList";
} & SerializedClusterRoleBindingListProps;
export const isClusterRoleBindingList = (
    input: any
): input is SerializedClusterRoleBindingList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "rbac.authorization.k8s.io/v1" &&
        input.kind === "ClusterRoleBindingList"
    );
};
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 *
 * @schema io.k8s.api.rbac.v1.ClusterRoleBindingList
 */
export const ClusterRoleBindingList = (props: ClusterRoleBindingListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "rbac.authorization.k8s.io/v1" as const,
        kind: "ClusterRoleBindingList" as const,
        ...serializeClusterRoleBindingListProps(props),
    });
};

export type SerializedClusterRoleList = {
    apiVersion: "rbac.authorization.k8s.io/v1";
    kind: "ClusterRoleList";
} & SerializedClusterRoleListProps;
export const isClusterRoleList = (
    input: any
): input is SerializedClusterRoleList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "rbac.authorization.k8s.io/v1" &&
        input.kind === "ClusterRoleList"
    );
};
/**
 * ClusterRoleList is a collection of ClusterRoles
 *
 * @schema io.k8s.api.rbac.v1.ClusterRoleList
 */
export const ClusterRoleList = (props: ClusterRoleListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "rbac.authorization.k8s.io/v1" as const,
        kind: "ClusterRoleList" as const,
        ...serializeClusterRoleListProps(props),
    });
};

export type SerializedRole = {
    apiVersion: "rbac.authorization.k8s.io/v1";
    kind: "Role";
} & SerializedRoleProps;
export const isRole = (input: any): input is SerializedRole => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "rbac.authorization.k8s.io/v1" &&
        input.kind === "Role"
    );
};
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 *
 * @schema io.k8s.api.rbac.v1.Role
 */
export const Role = (props: RoleProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "rbac.authorization.k8s.io/v1" as const,
        kind: "Role" as const,
        ...serializeRoleProps(props),
    });
};

export type SerializedRoleBinding = {
    apiVersion: "rbac.authorization.k8s.io/v1";
    kind: "RoleBinding";
} & SerializedRoleBindingProps;
export const isRoleBinding = (input: any): input is SerializedRoleBinding => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "rbac.authorization.k8s.io/v1" &&
        input.kind === "RoleBinding"
    );
};
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 *
 * @schema io.k8s.api.rbac.v1.RoleBinding
 */
export const RoleBinding = (props: RoleBindingProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "rbac.authorization.k8s.io/v1" as const,
        kind: "RoleBinding" as const,
        ...serializeRoleBindingProps(props),
    });
};

export type SerializedRoleBindingList = {
    apiVersion: "rbac.authorization.k8s.io/v1";
    kind: "RoleBindingList";
} & SerializedRoleBindingListProps;
export const isRoleBindingList = (
    input: any
): input is SerializedRoleBindingList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "rbac.authorization.k8s.io/v1" &&
        input.kind === "RoleBindingList"
    );
};
/**
 * RoleBindingList is a collection of RoleBindings
 *
 * @schema io.k8s.api.rbac.v1.RoleBindingList
 */
export const RoleBindingList = (props: RoleBindingListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "rbac.authorization.k8s.io/v1" as const,
        kind: "RoleBindingList" as const,
        ...serializeRoleBindingListProps(props),
    });
};

export type SerializedRoleList = {
    apiVersion: "rbac.authorization.k8s.io/v1";
    kind: "RoleList";
} & SerializedRoleListProps;
export const isRoleList = (input: any): input is SerializedRoleList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "rbac.authorization.k8s.io/v1" &&
        input.kind === "RoleList"
    );
};
/**
 * RoleList is a collection of Roles
 *
 * @schema io.k8s.api.rbac.v1.RoleList
 */
export const RoleList = (props: RoleListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "rbac.authorization.k8s.io/v1" as const,
        kind: "RoleList" as const,
        ...serializeRoleListProps(props),
    });
};

export type SerializedClusterRoleV1Alpha1 = {
    apiVersion: "rbac.authorization.k8s.io/v1alpha1";
    kind: "ClusterRole";
} & SerializedClusterRoleV1Alpha1Props;
export const isClusterRoleV1Alpha1 = (
    input: any
): input is SerializedClusterRoleV1Alpha1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "rbac.authorization.k8s.io/v1alpha1" &&
        input.kind === "ClusterRole"
    );
};
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRole, and will no longer be served in v1.22.
 *
 * @schema io.k8s.api.rbac.v1alpha1.ClusterRole
 */
export const ClusterRoleV1Alpha1 = (props: ClusterRoleV1Alpha1Props = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "rbac.authorization.k8s.io/v1alpha1" as const,
        kind: "ClusterRole" as const,
        ...serializeClusterRoleV1Alpha1Props(props),
    });
};

export type SerializedClusterRoleBindingV1Alpha1 = {
    apiVersion: "rbac.authorization.k8s.io/v1alpha1";
    kind: "ClusterRoleBinding";
} & SerializedClusterRoleBindingV1Alpha1Props;
export const isClusterRoleBindingV1Alpha1 = (
    input: any
): input is SerializedClusterRoleBindingV1Alpha1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "rbac.authorization.k8s.io/v1alpha1" &&
        input.kind === "ClusterRoleBinding"
    );
};
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRoleBinding, and will no longer be served in v1.22.
 *
 * @schema io.k8s.api.rbac.v1alpha1.ClusterRoleBinding
 */
export const ClusterRoleBindingV1Alpha1 = (
    props: ClusterRoleBindingV1Alpha1Props
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "rbac.authorization.k8s.io/v1alpha1" as const,
        kind: "ClusterRoleBinding" as const,
        ...serializeClusterRoleBindingV1Alpha1Props(props),
    });
};

export type SerializedClusterRoleBindingListV1Alpha1 = {
    apiVersion: "rbac.authorization.k8s.io/v1alpha1";
    kind: "ClusterRoleBindingList";
} & SerializedClusterRoleBindingListV1Alpha1Props;
export const isClusterRoleBindingListV1Alpha1 = (
    input: any
): input is SerializedClusterRoleBindingListV1Alpha1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "rbac.authorization.k8s.io/v1alpha1" &&
        input.kind === "ClusterRoleBindingList"
    );
};
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRoleBindings, and will no longer be served in v1.22.
 *
 * @schema io.k8s.api.rbac.v1alpha1.ClusterRoleBindingList
 */
export const ClusterRoleBindingListV1Alpha1 = (
    props: ClusterRoleBindingListV1Alpha1Props
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "rbac.authorization.k8s.io/v1alpha1" as const,
        kind: "ClusterRoleBindingList" as const,
        ...serializeClusterRoleBindingListV1Alpha1Props(props),
    });
};

export type SerializedClusterRoleListV1Alpha1 = {
    apiVersion: "rbac.authorization.k8s.io/v1alpha1";
    kind: "ClusterRoleList";
} & SerializedClusterRoleListV1Alpha1Props;
export const isClusterRoleListV1Alpha1 = (
    input: any
): input is SerializedClusterRoleListV1Alpha1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "rbac.authorization.k8s.io/v1alpha1" &&
        input.kind === "ClusterRoleList"
    );
};
/**
 * ClusterRoleList is a collection of ClusterRoles. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRoles, and will no longer be served in v1.22.
 *
 * @schema io.k8s.api.rbac.v1alpha1.ClusterRoleList
 */
export const ClusterRoleListV1Alpha1 = (
    props: ClusterRoleListV1Alpha1Props
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "rbac.authorization.k8s.io/v1alpha1" as const,
        kind: "ClusterRoleList" as const,
        ...serializeClusterRoleListV1Alpha1Props(props),
    });
};

export type SerializedRoleV1Alpha1 = {
    apiVersion: "rbac.authorization.k8s.io/v1alpha1";
    kind: "Role";
} & SerializedRoleV1Alpha1Props;
export const isRoleV1Alpha1 = (input: any): input is SerializedRoleV1Alpha1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "rbac.authorization.k8s.io/v1alpha1" &&
        input.kind === "Role"
    );
};
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 Role, and will no longer be served in v1.22.
 *
 * @schema io.k8s.api.rbac.v1alpha1.Role
 */
export const RoleV1Alpha1 = (props: RoleV1Alpha1Props = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "rbac.authorization.k8s.io/v1alpha1" as const,
        kind: "Role" as const,
        ...serializeRoleV1Alpha1Props(props),
    });
};

export type SerializedRoleBindingV1Alpha1 = {
    apiVersion: "rbac.authorization.k8s.io/v1alpha1";
    kind: "RoleBinding";
} & SerializedRoleBindingV1Alpha1Props;
export const isRoleBindingV1Alpha1 = (
    input: any
): input is SerializedRoleBindingV1Alpha1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "rbac.authorization.k8s.io/v1alpha1" &&
        input.kind === "RoleBinding"
    );
};
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 RoleBinding, and will no longer be served in v1.22.
 *
 * @schema io.k8s.api.rbac.v1alpha1.RoleBinding
 */
export const RoleBindingV1Alpha1 = (props: RoleBindingV1Alpha1Props) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "rbac.authorization.k8s.io/v1alpha1" as const,
        kind: "RoleBinding" as const,
        ...serializeRoleBindingV1Alpha1Props(props),
    });
};

export type SerializedRoleBindingListV1Alpha1 = {
    apiVersion: "rbac.authorization.k8s.io/v1alpha1";
    kind: "RoleBindingList";
} & SerializedRoleBindingListV1Alpha1Props;
export const isRoleBindingListV1Alpha1 = (
    input: any
): input is SerializedRoleBindingListV1Alpha1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "rbac.authorization.k8s.io/v1alpha1" &&
        input.kind === "RoleBindingList"
    );
};
/**
 * RoleBindingList is a collection of RoleBindings Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 RoleBindingList, and will no longer be served in v1.22.
 *
 * @schema io.k8s.api.rbac.v1alpha1.RoleBindingList
 */
export const RoleBindingListV1Alpha1 = (
    props: RoleBindingListV1Alpha1Props
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "rbac.authorization.k8s.io/v1alpha1" as const,
        kind: "RoleBindingList" as const,
        ...serializeRoleBindingListV1Alpha1Props(props),
    });
};

export type SerializedRoleListV1Alpha1 = {
    apiVersion: "rbac.authorization.k8s.io/v1alpha1";
    kind: "RoleList";
} & SerializedRoleListV1Alpha1Props;
export const isRoleListV1Alpha1 = (
    input: any
): input is SerializedRoleListV1Alpha1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "rbac.authorization.k8s.io/v1alpha1" &&
        input.kind === "RoleList"
    );
};
/**
 * RoleList is a collection of Roles. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 RoleList, and will no longer be served in v1.22.
 *
 * @schema io.k8s.api.rbac.v1alpha1.RoleList
 */
export const RoleListV1Alpha1 = (props: RoleListV1Alpha1Props) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "rbac.authorization.k8s.io/v1alpha1" as const,
        kind: "RoleList" as const,
        ...serializeRoleListV1Alpha1Props(props),
    });
};

export type SerializedPriorityClass = {
    apiVersion: "scheduling.k8s.io/v1";
    kind: "PriorityClass";
} & SerializedPriorityClassProps;
export const isPriorityClass = (
    input: any
): input is SerializedPriorityClass => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "scheduling.k8s.io/v1" &&
        input.kind === "PriorityClass"
    );
};
/**
 * PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 *
 * @schema io.k8s.api.scheduling.v1.PriorityClass
 */
export const PriorityClass = (props: PriorityClassProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "scheduling.k8s.io/v1" as const,
        kind: "PriorityClass" as const,
        ...serializePriorityClassProps(props),
    });
};

export type SerializedPriorityClassList = {
    apiVersion: "scheduling.k8s.io/v1";
    kind: "PriorityClassList";
} & SerializedPriorityClassListProps;
export const isPriorityClassList = (
    input: any
): input is SerializedPriorityClassList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "scheduling.k8s.io/v1" &&
        input.kind === "PriorityClassList"
    );
};
/**
 * PriorityClassList is a collection of priority classes.
 *
 * @schema io.k8s.api.scheduling.v1.PriorityClassList
 */
export const PriorityClassList = (props: PriorityClassListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "scheduling.k8s.io/v1" as const,
        kind: "PriorityClassList" as const,
        ...serializePriorityClassListProps(props),
    });
};

export type SerializedPriorityClassV1Alpha1 = {
    apiVersion: "scheduling.k8s.io/v1alpha1";
    kind: "PriorityClass";
} & SerializedPriorityClassV1Alpha1Props;
export const isPriorityClassV1Alpha1 = (
    input: any
): input is SerializedPriorityClassV1Alpha1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "scheduling.k8s.io/v1alpha1" &&
        input.kind === "PriorityClass"
    );
};
/**
 * DEPRECATED - This group version of PriorityClass is deprecated by scheduling.k8s.io/v1/PriorityClass. PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 *
 * @schema io.k8s.api.scheduling.v1alpha1.PriorityClass
 */
export const PriorityClassV1Alpha1 = (props: PriorityClassV1Alpha1Props) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "scheduling.k8s.io/v1alpha1" as const,
        kind: "PriorityClass" as const,
        ...serializePriorityClassV1Alpha1Props(props),
    });
};

export type SerializedPriorityClassListV1Alpha1 = {
    apiVersion: "scheduling.k8s.io/v1alpha1";
    kind: "PriorityClassList";
} & SerializedPriorityClassListV1Alpha1Props;
export const isPriorityClassListV1Alpha1 = (
    input: any
): input is SerializedPriorityClassListV1Alpha1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "scheduling.k8s.io/v1alpha1" &&
        input.kind === "PriorityClassList"
    );
};
/**
 * PriorityClassList is a collection of priority classes.
 *
 * @schema io.k8s.api.scheduling.v1alpha1.PriorityClassList
 */
export const PriorityClassListV1Alpha1 = (
    props: PriorityClassListV1Alpha1Props
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "scheduling.k8s.io/v1alpha1" as const,
        kind: "PriorityClassList" as const,
        ...serializePriorityClassListV1Alpha1Props(props),
    });
};

export type SerializedCSIDriver = {
    apiVersion: "storage.k8s.io/v1";
    kind: "CSIDriver";
} & SerializedCSIDriverProps;
export const isCSIDriver = (input: any): input is SerializedCSIDriver => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "storage.k8s.io/v1" &&
        input.kind === "CSIDriver"
    );
};
/**
 * CSIDriver captures information about a Container Storage Interface (CSI) volume driver deployed on the cluster. Kubernetes attach detach controller uses this object to determine whether attach is required. Kubelet uses this object to determine whether pod information needs to be passed on mount. CSIDriver objects are non-namespaced.
 *
 * @schema io.k8s.api.storage.v1.CSIDriver
 */
export const CSIDriver = (props: CSIDriverProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "storage.k8s.io/v1" as const,
        kind: "CSIDriver" as const,
        ...serializeCSIDriverProps(props),
    });
};

export type SerializedCSIDriverList = {
    apiVersion: "storage.k8s.io/v1";
    kind: "CSIDriverList";
} & SerializedCSIDriverListProps;
export const isCSIDriverList = (
    input: any
): input is SerializedCSIDriverList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "storage.k8s.io/v1" &&
        input.kind === "CSIDriverList"
    );
};
/**
 * CSIDriverList is a collection of CSIDriver objects.
 *
 * @schema io.k8s.api.storage.v1.CSIDriverList
 */
export const CSIDriverList = (props: CSIDriverListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "storage.k8s.io/v1" as const,
        kind: "CSIDriverList" as const,
        ...serializeCSIDriverListProps(props),
    });
};

export type SerializedCSINode = {
    apiVersion: "storage.k8s.io/v1";
    kind: "CSINode";
} & SerializedCSINodeProps;
export const isCSINode = (input: any): input is SerializedCSINode => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "storage.k8s.io/v1" &&
        input.kind === "CSINode"
    );
};
/**
 * CSINode holds information about all CSI drivers installed on a node. CSI drivers do not need to create the CSINode object directly. As long as they use the node-driver-registrar sidecar container, the kubelet will automatically populate the CSINode object for the CSI driver as part of kubelet plugin registration. CSINode has the same name as a node. If the object is missing, it means either there are no CSI Drivers available on the node, or the Kubelet version is low enough that it doesn't create this object. CSINode has an OwnerReference that points to the corresponding node object.
 *
 * @schema io.k8s.api.storage.v1.CSINode
 */
export const CSINode = (props: CSINodeProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "storage.k8s.io/v1" as const,
        kind: "CSINode" as const,
        ...serializeCSINodeProps(props),
    });
};

export type SerializedCSINodeList = {
    apiVersion: "storage.k8s.io/v1";
    kind: "CSINodeList";
} & SerializedCSINodeListProps;
export const isCSINodeList = (input: any): input is SerializedCSINodeList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "storage.k8s.io/v1" &&
        input.kind === "CSINodeList"
    );
};
/**
 * CSINodeList is a collection of CSINode objects.
 *
 * @schema io.k8s.api.storage.v1.CSINodeList
 */
export const CSINodeList = (props: CSINodeListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "storage.k8s.io/v1" as const,
        kind: "CSINodeList" as const,
        ...serializeCSINodeListProps(props),
    });
};

export type SerializedStorageClass = {
    apiVersion: "storage.k8s.io/v1";
    kind: "StorageClass";
} & SerializedStorageClassProps;
export const isStorageClass = (input: any): input is SerializedStorageClass => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "storage.k8s.io/v1" &&
        input.kind === "StorageClass"
    );
};
/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.

StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 *
 * @schema io.k8s.api.storage.v1.StorageClass
 */
export const StorageClass = (props: StorageClassProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "storage.k8s.io/v1" as const,
        kind: "StorageClass" as const,
        ...serializeStorageClassProps(props),
    });
};

export type SerializedStorageClassList = {
    apiVersion: "storage.k8s.io/v1";
    kind: "StorageClassList";
} & SerializedStorageClassListProps;
export const isStorageClassList = (
    input: any
): input is SerializedStorageClassList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "storage.k8s.io/v1" &&
        input.kind === "StorageClassList"
    );
};
/**
 * StorageClassList is a collection of storage classes.
 *
 * @schema io.k8s.api.storage.v1.StorageClassList
 */
export const StorageClassList = (props: StorageClassListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "storage.k8s.io/v1" as const,
        kind: "StorageClassList" as const,
        ...serializeStorageClassListProps(props),
    });
};

export type SerializedVolumeAttachment = {
    apiVersion: "storage.k8s.io/v1";
    kind: "VolumeAttachment";
} & SerializedVolumeAttachmentProps;
export const isVolumeAttachment = (
    input: any
): input is SerializedVolumeAttachment => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "storage.k8s.io/v1" &&
        input.kind === "VolumeAttachment"
    );
};
/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.

VolumeAttachment objects are non-namespaced.
 *
 * @schema io.k8s.api.storage.v1.VolumeAttachment
 */
export const VolumeAttachment = (props: VolumeAttachmentProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "storage.k8s.io/v1" as const,
        kind: "VolumeAttachment" as const,
        ...serializeVolumeAttachmentProps(props),
    });
};

export type SerializedVolumeAttachmentList = {
    apiVersion: "storage.k8s.io/v1";
    kind: "VolumeAttachmentList";
} & SerializedVolumeAttachmentListProps;
export const isVolumeAttachmentList = (
    input: any
): input is SerializedVolumeAttachmentList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "storage.k8s.io/v1" &&
        input.kind === "VolumeAttachmentList"
    );
};
/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 *
 * @schema io.k8s.api.storage.v1.VolumeAttachmentList
 */
export const VolumeAttachmentList = (props: VolumeAttachmentListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "storage.k8s.io/v1" as const,
        kind: "VolumeAttachmentList" as const,
        ...serializeVolumeAttachmentListProps(props),
    });
};

export type SerializedCSIStorageCapacityV1Alpha1 = {
    apiVersion: "storage.k8s.io/v1alpha1";
    kind: "CSIStorageCapacity";
} & SerializedCSIStorageCapacityV1Alpha1Props;
export const isCSIStorageCapacityV1Alpha1 = (
    input: any
): input is SerializedCSIStorageCapacityV1Alpha1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "storage.k8s.io/v1alpha1" &&
        input.kind === "CSIStorageCapacity"
    );
};
/**
 * CSIStorageCapacity stores the result of one CSI GetCapacity call. For a given StorageClass, this describes the available capacity in a particular topology segment.  This can be used when considering where to instantiate new PersistentVolumes.

For example this can express things like: - StorageClass "standard" has "1234 GiB" available in "topology.kubernetes.io/zone=us-east1" - StorageClass "localssd" has "10 GiB" available in "kubernetes.io/hostname=knode-abc123"

The following three cases all imply that no capacity is available for a certain combination: - no object exists with suitable topology and storage class name - such an object exists, but the capacity is unset - such an object exists, but the capacity is zero

The producer of these objects can decide which approach is more suitable.

They are consumed by the kube-scheduler if the CSIStorageCapacity beta feature gate is enabled there and a CSI driver opts into capacity-aware scheduling with CSIDriver.StorageCapacity.
 *
 * @schema io.k8s.api.storage.v1alpha1.CSIStorageCapacity
 */
export const CSIStorageCapacityV1Alpha1 = (
    props: CSIStorageCapacityV1Alpha1Props
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "storage.k8s.io/v1alpha1" as const,
        kind: "CSIStorageCapacity" as const,
        ...serializeCSIStorageCapacityV1Alpha1Props(props),
    });
};

export type SerializedCSIStorageCapacityListV1Alpha1 = {
    apiVersion: "storage.k8s.io/v1alpha1";
    kind: "CSIStorageCapacityList";
} & SerializedCSIStorageCapacityListV1Alpha1Props;
export const isCSIStorageCapacityListV1Alpha1 = (
    input: any
): input is SerializedCSIStorageCapacityListV1Alpha1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "storage.k8s.io/v1alpha1" &&
        input.kind === "CSIStorageCapacityList"
    );
};
/**
 * CSIStorageCapacityList is a collection of CSIStorageCapacity objects.
 *
 * @schema io.k8s.api.storage.v1alpha1.CSIStorageCapacityList
 */
export const CSIStorageCapacityListV1Alpha1 = (
    props: CSIStorageCapacityListV1Alpha1Props
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "storage.k8s.io/v1alpha1" as const,
        kind: "CSIStorageCapacityList" as const,
        ...serializeCSIStorageCapacityListV1Alpha1Props(props),
    });
};

export type SerializedVolumeAttachmentV1Alpha1 = {
    apiVersion: "storage.k8s.io/v1alpha1";
    kind: "VolumeAttachment";
} & SerializedVolumeAttachmentV1Alpha1Props;
export const isVolumeAttachmentV1Alpha1 = (
    input: any
): input is SerializedVolumeAttachmentV1Alpha1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "storage.k8s.io/v1alpha1" &&
        input.kind === "VolumeAttachment"
    );
};
/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.

VolumeAttachment objects are non-namespaced.
 *
 * @schema io.k8s.api.storage.v1alpha1.VolumeAttachment
 */
export const VolumeAttachmentV1Alpha1 = (
    props: VolumeAttachmentV1Alpha1Props
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "storage.k8s.io/v1alpha1" as const,
        kind: "VolumeAttachment" as const,
        ...serializeVolumeAttachmentV1Alpha1Props(props),
    });
};

export type SerializedVolumeAttachmentListV1Alpha1 = {
    apiVersion: "storage.k8s.io/v1alpha1";
    kind: "VolumeAttachmentList";
} & SerializedVolumeAttachmentListV1Alpha1Props;
export const isVolumeAttachmentListV1Alpha1 = (
    input: any
): input is SerializedVolumeAttachmentListV1Alpha1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "storage.k8s.io/v1alpha1" &&
        input.kind === "VolumeAttachmentList"
    );
};
/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 *
 * @schema io.k8s.api.storage.v1alpha1.VolumeAttachmentList
 */
export const VolumeAttachmentListV1Alpha1 = (
    props: VolumeAttachmentListV1Alpha1Props
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "storage.k8s.io/v1alpha1" as const,
        kind: "VolumeAttachmentList" as const,
        ...serializeVolumeAttachmentListV1Alpha1Props(props),
    });
};

export type SerializedCSIStorageCapacityV1Beta1 = {
    apiVersion: "storage.k8s.io/v1beta1";
    kind: "CSIStorageCapacity";
} & SerializedCSIStorageCapacityV1Beta1Props;
export const isCSIStorageCapacityV1Beta1 = (
    input: any
): input is SerializedCSIStorageCapacityV1Beta1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "storage.k8s.io/v1beta1" &&
        input.kind === "CSIStorageCapacity"
    );
};
/**
 * CSIStorageCapacity stores the result of one CSI GetCapacity call. For a given StorageClass, this describes the available capacity in a particular topology segment.  This can be used when considering where to instantiate new PersistentVolumes.

For example this can express things like: - StorageClass "standard" has "1234 GiB" available in "topology.kubernetes.io/zone=us-east1" - StorageClass "localssd" has "10 GiB" available in "kubernetes.io/hostname=knode-abc123"

The following three cases all imply that no capacity is available for a certain combination: - no object exists with suitable topology and storage class name - such an object exists, but the capacity is unset - such an object exists, but the capacity is zero

The producer of these objects can decide which approach is more suitable.

They are consumed by the kube-scheduler if the CSIStorageCapacity beta feature gate is enabled there and a CSI driver opts into capacity-aware scheduling with CSIDriver.StorageCapacity.
 *
 * @schema io.k8s.api.storage.v1beta1.CSIStorageCapacity
 */
export const CSIStorageCapacityV1Beta1 = (
    props: CSIStorageCapacityV1Beta1Props
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "storage.k8s.io/v1beta1" as const,
        kind: "CSIStorageCapacity" as const,
        ...serializeCSIStorageCapacityV1Beta1Props(props),
    });
};

export type SerializedCSIStorageCapacityListV1Beta1 = {
    apiVersion: "storage.k8s.io/v1beta1";
    kind: "CSIStorageCapacityList";
} & SerializedCSIStorageCapacityListV1Beta1Props;
export const isCSIStorageCapacityListV1Beta1 = (
    input: any
): input is SerializedCSIStorageCapacityListV1Beta1 => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "storage.k8s.io/v1beta1" &&
        input.kind === "CSIStorageCapacityList"
    );
};
/**
 * CSIStorageCapacityList is a collection of CSIStorageCapacity objects.
 *
 * @schema io.k8s.api.storage.v1beta1.CSIStorageCapacityList
 */
export const CSIStorageCapacityListV1Beta1 = (
    props: CSIStorageCapacityListV1Beta1Props
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "storage.k8s.io/v1beta1" as const,
        kind: "CSIStorageCapacityList" as const,
        ...serializeCSIStorageCapacityListV1Beta1Props(props),
    });
};

export type SerializedCustomResourceDefinition = {
    apiVersion: "apiextensions.k8s.io/v1";
    kind: "CustomResourceDefinition";
} & SerializedCustomResourceDefinitionProps;
export const isCustomResourceDefinition = (
    input: any
): input is SerializedCustomResourceDefinition => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "apiextensions.k8s.io/v1" &&
        input.kind === "CustomResourceDefinition"
    );
};
/**
 * CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
 *
 * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition
 */
export const CustomResourceDefinition = (
    props: CustomResourceDefinitionProps
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "apiextensions.k8s.io/v1" as const,
        kind: "CustomResourceDefinition" as const,
        ...serializeCustomResourceDefinitionProps(props),
    });
};

export type SerializedCustomResourceDefinitionList = {
    apiVersion: "apiextensions.k8s.io/v1";
    kind: "CustomResourceDefinitionList";
} & SerializedCustomResourceDefinitionListProps;
export const isCustomResourceDefinitionList = (
    input: any
): input is SerializedCustomResourceDefinitionList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "apiextensions.k8s.io/v1" &&
        input.kind === "CustomResourceDefinitionList"
    );
};
/**
 * CustomResourceDefinitionList is a list of CustomResourceDefinition objects.
 *
 * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionList
 */
export const CustomResourceDefinitionList = (
    props: CustomResourceDefinitionListProps
) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "apiextensions.k8s.io/v1" as const,
        kind: "CustomResourceDefinitionList" as const,
        ...serializeCustomResourceDefinitionListProps(props),
    });
};

export type SerializedStatus = {
    apiVersion: "v1";
    kind: "Status";
} & SerializedStatusProps;
export const isStatus = (input: any): input is SerializedStatus => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "v1" &&
        input.kind === "Status"
    );
};
/**
 * Status is a return value for calls that don't return other objects.
 *
 * @schema io.k8s.apimachinery.pkg.apis.meta.v1.Status
 */
export const Status = (props: StatusProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "v1" as const,
        kind: "Status" as const,
        ...serializeStatusProps(props),
    });
};

export type SerializedAPIService = {
    apiVersion: "apiregistration.k8s.io/v1";
    kind: "APIService";
} & SerializedAPIServiceProps;
export const isAPIService = (input: any): input is SerializedAPIService => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "apiregistration.k8s.io/v1" &&
        input.kind === "APIService"
    );
};
/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 *
 * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIService
 */
export const APIService = (props: APIServiceProps = {}) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "apiregistration.k8s.io/v1" as const,
        kind: "APIService" as const,
        ...serializeAPIServiceProps(props),
    });
};

export type SerializedAPIServiceList = {
    apiVersion: "apiregistration.k8s.io/v1";
    kind: "APIServiceList";
} & SerializedAPIServiceListProps;
export const isAPIServiceList = (
    input: any
): input is SerializedAPIServiceList => {
    return (
        typeof input === "object" &&
        input !== null &&
        input.apiVersion === "apiregistration.k8s.io/v1" &&
        input.kind === "APIServiceList"
    );
};
/**
 * APIServiceList is a list of APIService objects.
 *
 * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceList
 */
export const APIServiceList = (props: APIServiceListProps) => {
    return senchou.wrapTemplate(props, {
        apiVersion: "apiregistration.k8s.io/v1" as const,
        kind: "APIServiceList" as const,
        ...serializeAPIServiceListProps(props),
    });
};

export type MutatingWebhookConfigurationProps = {
    readonly metadata?: ObjectMeta;
    readonly webhooks?: Array<MutatingWebhook>;
};

export type SerializedMutatingWebhookConfigurationProps = {
    metadata?: SerializedObjectMeta;
    webhooks?: Array<SerializedMutatingWebhook>;
};

export function serializeMutatingWebhookConfigurationProps(
    options: undefined
): undefined;
export function serializeMutatingWebhookConfigurationProps(
    options: MutatingWebhookConfigurationProps
): SerializedMutatingWebhookConfigurationProps;
export function serializeMutatingWebhookConfigurationProps(
    options: MutatingWebhookConfigurationProps | undefined
): SerializedMutatingWebhookConfigurationProps | undefined;
export function serializeMutatingWebhookConfigurationProps(
    options: MutatingWebhookConfigurationProps | undefined
): SerializedMutatingWebhookConfigurationProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedMutatingWebhookConfigurationProps = {
        metadata: serializeObjectMeta(options.metadata),
        webhooks: prelude.serialize(options.webhooks, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeMutatingWebhook(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type MutatingWebhookConfigurationListProps = {
    readonly items: Array<MutatingWebhookConfigurationProps>;
    readonly metadata?: ListMeta;
};

export type SerializedMutatingWebhookConfigurationListProps = {
    items: Array<SerializedMutatingWebhookConfiguration>;
    metadata?: SerializedListMeta;
};

export function serializeMutatingWebhookConfigurationListProps(
    options: undefined
): undefined;
export function serializeMutatingWebhookConfigurationListProps(
    options: MutatingWebhookConfigurationListProps
): SerializedMutatingWebhookConfigurationListProps;
export function serializeMutatingWebhookConfigurationListProps(
    options: MutatingWebhookConfigurationListProps | undefined
): SerializedMutatingWebhookConfigurationListProps | undefined;
export function serializeMutatingWebhookConfigurationListProps(
    options: MutatingWebhookConfigurationListProps | undefined
): SerializedMutatingWebhookConfigurationListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedMutatingWebhookConfigurationListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => MutatingWebhookConfiguration(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type ValidatingWebhookConfigurationProps = {
    readonly metadata?: ObjectMeta;
    readonly webhooks?: Array<ValidatingWebhook>;
};

export type SerializedValidatingWebhookConfigurationProps = {
    metadata?: SerializedObjectMeta;
    webhooks?: Array<SerializedValidatingWebhook>;
};

export function serializeValidatingWebhookConfigurationProps(
    options: undefined
): undefined;
export function serializeValidatingWebhookConfigurationProps(
    options: ValidatingWebhookConfigurationProps
): SerializedValidatingWebhookConfigurationProps;
export function serializeValidatingWebhookConfigurationProps(
    options: ValidatingWebhookConfigurationProps | undefined
): SerializedValidatingWebhookConfigurationProps | undefined;
export function serializeValidatingWebhookConfigurationProps(
    options: ValidatingWebhookConfigurationProps | undefined
): SerializedValidatingWebhookConfigurationProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedValidatingWebhookConfigurationProps = {
        metadata: serializeObjectMeta(options.metadata),
        webhooks: prelude.serialize(options.webhooks, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeValidatingWebhook(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type ValidatingWebhookConfigurationListProps = {
    readonly items: Array<ValidatingWebhookConfigurationProps>;
    readonly metadata?: ListMeta;
};

export type SerializedValidatingWebhookConfigurationListProps = {
    items: Array<SerializedValidatingWebhookConfiguration>;
    metadata?: SerializedListMeta;
};

export function serializeValidatingWebhookConfigurationListProps(
    options: undefined
): undefined;
export function serializeValidatingWebhookConfigurationListProps(
    options: ValidatingWebhookConfigurationListProps
): SerializedValidatingWebhookConfigurationListProps;
export function serializeValidatingWebhookConfigurationListProps(
    options: ValidatingWebhookConfigurationListProps | undefined
): SerializedValidatingWebhookConfigurationListProps | undefined;
export function serializeValidatingWebhookConfigurationListProps(
    options: ValidatingWebhookConfigurationListProps | undefined
): SerializedValidatingWebhookConfigurationListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedValidatingWebhookConfigurationListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => ValidatingWebhookConfiguration(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type StorageVersionV1Alpha1Props = {
    readonly metadata?: ObjectMeta;
    readonly spec: any;
};

export type SerializedStorageVersionV1Alpha1Props = {
    metadata?: SerializedObjectMeta;
    spec: any;
};

export function serializeStorageVersionV1Alpha1Props(
    options: undefined
): undefined;
export function serializeStorageVersionV1Alpha1Props(
    options: StorageVersionV1Alpha1Props
): SerializedStorageVersionV1Alpha1Props;
export function serializeStorageVersionV1Alpha1Props(
    options: StorageVersionV1Alpha1Props | undefined
): SerializedStorageVersionV1Alpha1Props | undefined;
export function serializeStorageVersionV1Alpha1Props(
    options: StorageVersionV1Alpha1Props | undefined
): SerializedStorageVersionV1Alpha1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedStorageVersionV1Alpha1Props = {
        metadata: serializeObjectMeta(options.metadata),
        spec: options.spec,
    };

    return senchou.wrapTemplate(options, result);
}

export type StorageVersionListV1Alpha1Props = {
    readonly items: Array<StorageVersionV1Alpha1Props>;
    readonly metadata?: ListMeta;
};

export type SerializedStorageVersionListV1Alpha1Props = {
    items: Array<SerializedStorageVersionV1Alpha1>;
    metadata?: SerializedListMeta;
};

export function serializeStorageVersionListV1Alpha1Props(
    options: undefined
): undefined;
export function serializeStorageVersionListV1Alpha1Props(
    options: StorageVersionListV1Alpha1Props
): SerializedStorageVersionListV1Alpha1Props;
export function serializeStorageVersionListV1Alpha1Props(
    options: StorageVersionListV1Alpha1Props | undefined
): SerializedStorageVersionListV1Alpha1Props | undefined;
export function serializeStorageVersionListV1Alpha1Props(
    options: StorageVersionListV1Alpha1Props | undefined
): SerializedStorageVersionListV1Alpha1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedStorageVersionListV1Alpha1Props = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => StorageVersionV1Alpha1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type ControllerRevisionProps = {
    readonly data?: any;
    readonly metadata?: ObjectMeta;
    readonly revision: number;
};

export type SerializedControllerRevisionProps = {
    data?: any;
    metadata?: SerializedObjectMeta;
    revision: number;
};

export function serializeControllerRevisionProps(options: undefined): undefined;
export function serializeControllerRevisionProps(
    options: ControllerRevisionProps
): SerializedControllerRevisionProps;
export function serializeControllerRevisionProps(
    options: ControllerRevisionProps | undefined
): SerializedControllerRevisionProps | undefined;
export function serializeControllerRevisionProps(
    options: ControllerRevisionProps | undefined
): SerializedControllerRevisionProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedControllerRevisionProps = {
        data: options.data,
        metadata: serializeObjectMeta(options.metadata),
        revision: options.revision,
    };

    return senchou.wrapTemplate(options, result);
}

export type ControllerRevisionListProps = {
    readonly items: Array<ControllerRevisionProps>;
    readonly metadata?: ListMeta;
};

export type SerializedControllerRevisionListProps = {
    items: Array<SerializedControllerRevision>;
    metadata?: SerializedListMeta;
};

export function serializeControllerRevisionListProps(
    options: undefined
): undefined;
export function serializeControllerRevisionListProps(
    options: ControllerRevisionListProps
): SerializedControllerRevisionListProps;
export function serializeControllerRevisionListProps(
    options: ControllerRevisionListProps | undefined
): SerializedControllerRevisionListProps | undefined;
export function serializeControllerRevisionListProps(
    options: ControllerRevisionListProps | undefined
): SerializedControllerRevisionListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedControllerRevisionListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => ControllerRevision(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type DaemonSetProps = {
    readonly metadata?: ObjectMeta;
    readonly spec?: DaemonSetSpec;
};

export type SerializedDaemonSetProps = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedDaemonSetSpec;
};

export function serializeDaemonSetProps(options: undefined): undefined;
export function serializeDaemonSetProps(
    options: DaemonSetProps
): SerializedDaemonSetProps;
export function serializeDaemonSetProps(
    options: DaemonSetProps | undefined
): SerializedDaemonSetProps | undefined;
export function serializeDaemonSetProps(
    options: DaemonSetProps | undefined
): SerializedDaemonSetProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedDaemonSetProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeDaemonSetSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type DaemonSetListProps = {
    readonly items: Array<DaemonSetProps>;
    readonly metadata?: ListMeta;
};

export type SerializedDaemonSetListProps = {
    items: Array<SerializedDaemonSet>;
    metadata?: SerializedListMeta;
};

export function serializeDaemonSetListProps(options: undefined): undefined;
export function serializeDaemonSetListProps(
    options: DaemonSetListProps
): SerializedDaemonSetListProps;
export function serializeDaemonSetListProps(
    options: DaemonSetListProps | undefined
): SerializedDaemonSetListProps | undefined;
export function serializeDaemonSetListProps(
    options: DaemonSetListProps | undefined
): SerializedDaemonSetListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedDaemonSetListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => DaemonSet(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type DeploymentProps = {
    readonly metadata?: ObjectMeta;
    readonly spec?: DeploymentSpec;
};

export type SerializedDeploymentProps = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedDeploymentSpec;
};

export function serializeDeploymentProps(options: undefined): undefined;
export function serializeDeploymentProps(
    options: DeploymentProps
): SerializedDeploymentProps;
export function serializeDeploymentProps(
    options: DeploymentProps | undefined
): SerializedDeploymentProps | undefined;
export function serializeDeploymentProps(
    options: DeploymentProps | undefined
): SerializedDeploymentProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedDeploymentProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeDeploymentSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type DeploymentListProps = {
    readonly items: Array<DeploymentProps>;
    readonly metadata?: ListMeta;
};

export type SerializedDeploymentListProps = {
    items: Array<SerializedDeployment>;
    metadata?: SerializedListMeta;
};

export function serializeDeploymentListProps(options: undefined): undefined;
export function serializeDeploymentListProps(
    options: DeploymentListProps
): SerializedDeploymentListProps;
export function serializeDeploymentListProps(
    options: DeploymentListProps | undefined
): SerializedDeploymentListProps | undefined;
export function serializeDeploymentListProps(
    options: DeploymentListProps | undefined
): SerializedDeploymentListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedDeploymentListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => Deployment(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type ReplicaSetProps = {
    readonly metadata?: ObjectMeta;
    readonly spec?: ReplicaSetSpec;
};

export type SerializedReplicaSetProps = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedReplicaSetSpec;
};

export function serializeReplicaSetProps(options: undefined): undefined;
export function serializeReplicaSetProps(
    options: ReplicaSetProps
): SerializedReplicaSetProps;
export function serializeReplicaSetProps(
    options: ReplicaSetProps | undefined
): SerializedReplicaSetProps | undefined;
export function serializeReplicaSetProps(
    options: ReplicaSetProps | undefined
): SerializedReplicaSetProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedReplicaSetProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeReplicaSetSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type ReplicaSetListProps = {
    readonly items: Array<ReplicaSetProps>;
    readonly metadata?: ListMeta;
};

export type SerializedReplicaSetListProps = {
    items: Array<SerializedReplicaSet>;
    metadata?: SerializedListMeta;
};

export function serializeReplicaSetListProps(options: undefined): undefined;
export function serializeReplicaSetListProps(
    options: ReplicaSetListProps
): SerializedReplicaSetListProps;
export function serializeReplicaSetListProps(
    options: ReplicaSetListProps | undefined
): SerializedReplicaSetListProps | undefined;
export function serializeReplicaSetListProps(
    options: ReplicaSetListProps | undefined
): SerializedReplicaSetListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedReplicaSetListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => ReplicaSet(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type StatefulSetProps = {
    readonly metadata?: ObjectMeta;
    readonly spec?: StatefulSetSpec;
};

export type SerializedStatefulSetProps = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedStatefulSetSpec;
};

export function serializeStatefulSetProps(options: undefined): undefined;
export function serializeStatefulSetProps(
    options: StatefulSetProps
): SerializedStatefulSetProps;
export function serializeStatefulSetProps(
    options: StatefulSetProps | undefined
): SerializedStatefulSetProps | undefined;
export function serializeStatefulSetProps(
    options: StatefulSetProps | undefined
): SerializedStatefulSetProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedStatefulSetProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeStatefulSetSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type StatefulSetListProps = {
    readonly items: Array<StatefulSetProps>;
    readonly metadata?: ListMeta;
};

export type SerializedStatefulSetListProps = {
    items: Array<SerializedStatefulSet>;
    metadata?: SerializedListMeta;
};

export function serializeStatefulSetListProps(options: undefined): undefined;
export function serializeStatefulSetListProps(
    options: StatefulSetListProps
): SerializedStatefulSetListProps;
export function serializeStatefulSetListProps(
    options: StatefulSetListProps | undefined
): SerializedStatefulSetListProps | undefined;
export function serializeStatefulSetListProps(
    options: StatefulSetListProps | undefined
): SerializedStatefulSetListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedStatefulSetListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => StatefulSet(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type TokenRequestProps = {
    readonly metadata?: ObjectMeta;
    readonly spec: TokenRequestSpec;
};

export type SerializedTokenRequestProps = {
    metadata?: SerializedObjectMeta;
    spec: SerializedTokenRequestSpec;
};

export function serializeTokenRequestProps(options: undefined): undefined;
export function serializeTokenRequestProps(
    options: TokenRequestProps
): SerializedTokenRequestProps;
export function serializeTokenRequestProps(
    options: TokenRequestProps | undefined
): SerializedTokenRequestProps | undefined;
export function serializeTokenRequestProps(
    options: TokenRequestProps | undefined
): SerializedTokenRequestProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedTokenRequestProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeTokenRequestSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type TokenReviewProps = {
    readonly metadata?: ObjectMeta;
    readonly spec: TokenReviewSpec;
};

export type SerializedTokenReviewProps = {
    metadata?: SerializedObjectMeta;
    spec: SerializedTokenReviewSpec;
};

export function serializeTokenReviewProps(options: undefined): undefined;
export function serializeTokenReviewProps(
    options: TokenReviewProps
): SerializedTokenReviewProps;
export function serializeTokenReviewProps(
    options: TokenReviewProps | undefined
): SerializedTokenReviewProps | undefined;
export function serializeTokenReviewProps(
    options: TokenReviewProps | undefined
): SerializedTokenReviewProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedTokenReviewProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeTokenReviewSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type LocalSubjectAccessReviewProps = {
    readonly metadata?: ObjectMeta;
    readonly spec: SubjectAccessReviewSpec;
};

export type SerializedLocalSubjectAccessReviewProps = {
    metadata?: SerializedObjectMeta;
    spec: SerializedSubjectAccessReviewSpec;
};

export function serializeLocalSubjectAccessReviewProps(
    options: undefined
): undefined;
export function serializeLocalSubjectAccessReviewProps(
    options: LocalSubjectAccessReviewProps
): SerializedLocalSubjectAccessReviewProps;
export function serializeLocalSubjectAccessReviewProps(
    options: LocalSubjectAccessReviewProps | undefined
): SerializedLocalSubjectAccessReviewProps | undefined;
export function serializeLocalSubjectAccessReviewProps(
    options: LocalSubjectAccessReviewProps | undefined
): SerializedLocalSubjectAccessReviewProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedLocalSubjectAccessReviewProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeSubjectAccessReviewSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type SelfSubjectAccessReviewProps = {
    readonly metadata?: ObjectMeta;
    readonly spec: SelfSubjectAccessReviewSpec;
};

export type SerializedSelfSubjectAccessReviewProps = {
    metadata?: SerializedObjectMeta;
    spec: SerializedSelfSubjectAccessReviewSpec;
};

export function serializeSelfSubjectAccessReviewProps(
    options: undefined
): undefined;
export function serializeSelfSubjectAccessReviewProps(
    options: SelfSubjectAccessReviewProps
): SerializedSelfSubjectAccessReviewProps;
export function serializeSelfSubjectAccessReviewProps(
    options: SelfSubjectAccessReviewProps | undefined
): SerializedSelfSubjectAccessReviewProps | undefined;
export function serializeSelfSubjectAccessReviewProps(
    options: SelfSubjectAccessReviewProps | undefined
): SerializedSelfSubjectAccessReviewProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSelfSubjectAccessReviewProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeSelfSubjectAccessReviewSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type SelfSubjectRulesReviewProps = {
    readonly metadata?: ObjectMeta;
    readonly spec: SelfSubjectRulesReviewSpec;
};

export type SerializedSelfSubjectRulesReviewProps = {
    metadata?: SerializedObjectMeta;
    spec: SerializedSelfSubjectRulesReviewSpec;
};

export function serializeSelfSubjectRulesReviewProps(
    options: undefined
): undefined;
export function serializeSelfSubjectRulesReviewProps(
    options: SelfSubjectRulesReviewProps
): SerializedSelfSubjectRulesReviewProps;
export function serializeSelfSubjectRulesReviewProps(
    options: SelfSubjectRulesReviewProps | undefined
): SerializedSelfSubjectRulesReviewProps | undefined;
export function serializeSelfSubjectRulesReviewProps(
    options: SelfSubjectRulesReviewProps | undefined
): SerializedSelfSubjectRulesReviewProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSelfSubjectRulesReviewProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeSelfSubjectRulesReviewSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type SubjectAccessReviewProps = {
    readonly metadata?: ObjectMeta;
    readonly spec: SubjectAccessReviewSpec;
};

export type SerializedSubjectAccessReviewProps = {
    metadata?: SerializedObjectMeta;
    spec: SerializedSubjectAccessReviewSpec;
};

export function serializeSubjectAccessReviewProps(
    options: undefined
): undefined;
export function serializeSubjectAccessReviewProps(
    options: SubjectAccessReviewProps
): SerializedSubjectAccessReviewProps;
export function serializeSubjectAccessReviewProps(
    options: SubjectAccessReviewProps | undefined
): SerializedSubjectAccessReviewProps | undefined;
export function serializeSubjectAccessReviewProps(
    options: SubjectAccessReviewProps | undefined
): SerializedSubjectAccessReviewProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSubjectAccessReviewProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeSubjectAccessReviewSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type HorizontalPodAutoscalerProps = {
    readonly metadata?: ObjectMeta;
    readonly spec?: HorizontalPodAutoscalerSpec;
};

export type SerializedHorizontalPodAutoscalerProps = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedHorizontalPodAutoscalerSpec;
};

export function serializeHorizontalPodAutoscalerProps(
    options: undefined
): undefined;
export function serializeHorizontalPodAutoscalerProps(
    options: HorizontalPodAutoscalerProps
): SerializedHorizontalPodAutoscalerProps;
export function serializeHorizontalPodAutoscalerProps(
    options: HorizontalPodAutoscalerProps | undefined
): SerializedHorizontalPodAutoscalerProps | undefined;
export function serializeHorizontalPodAutoscalerProps(
    options: HorizontalPodAutoscalerProps | undefined
): SerializedHorizontalPodAutoscalerProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedHorizontalPodAutoscalerProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeHorizontalPodAutoscalerSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type HorizontalPodAutoscalerListProps = {
    readonly items: Array<HorizontalPodAutoscalerProps>;
    readonly metadata?: ListMeta;
};

export type SerializedHorizontalPodAutoscalerListProps = {
    items: Array<SerializedHorizontalPodAutoscaler>;
    metadata?: SerializedListMeta;
};

export function serializeHorizontalPodAutoscalerListProps(
    options: undefined
): undefined;
export function serializeHorizontalPodAutoscalerListProps(
    options: HorizontalPodAutoscalerListProps
): SerializedHorizontalPodAutoscalerListProps;
export function serializeHorizontalPodAutoscalerListProps(
    options: HorizontalPodAutoscalerListProps | undefined
): SerializedHorizontalPodAutoscalerListProps | undefined;
export function serializeHorizontalPodAutoscalerListProps(
    options: HorizontalPodAutoscalerListProps | undefined
): SerializedHorizontalPodAutoscalerListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedHorizontalPodAutoscalerListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => HorizontalPodAutoscaler(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type ScaleProps = {
    readonly metadata?: ObjectMeta;
    readonly spec?: ScaleSpec;
};

export type SerializedScaleProps = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedScaleSpec;
};

export function serializeScaleProps(options: undefined): undefined;
export function serializeScaleProps(options: ScaleProps): SerializedScaleProps;
export function serializeScaleProps(
    options: ScaleProps | undefined
): SerializedScaleProps | undefined;
export function serializeScaleProps(
    options: ScaleProps | undefined
): SerializedScaleProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedScaleProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeScaleSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type HorizontalPodAutoscalerV2Beta1Props = {
    readonly metadata?: ObjectMeta;
    readonly spec?: HorizontalPodAutoscalerSpecV2Beta1;
};

export type SerializedHorizontalPodAutoscalerV2Beta1Props = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedHorizontalPodAutoscalerSpecV2Beta1;
};

export function serializeHorizontalPodAutoscalerV2Beta1Props(
    options: undefined
): undefined;
export function serializeHorizontalPodAutoscalerV2Beta1Props(
    options: HorizontalPodAutoscalerV2Beta1Props
): SerializedHorizontalPodAutoscalerV2Beta1Props;
export function serializeHorizontalPodAutoscalerV2Beta1Props(
    options: HorizontalPodAutoscalerV2Beta1Props | undefined
): SerializedHorizontalPodAutoscalerV2Beta1Props | undefined;
export function serializeHorizontalPodAutoscalerV2Beta1Props(
    options: HorizontalPodAutoscalerV2Beta1Props | undefined
): SerializedHorizontalPodAutoscalerV2Beta1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedHorizontalPodAutoscalerV2Beta1Props = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeHorizontalPodAutoscalerSpecV2Beta1(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type HorizontalPodAutoscalerListV2Beta1Props = {
    readonly items: Array<HorizontalPodAutoscalerV2Beta1Props>;
    readonly metadata?: ListMeta;
};

export type SerializedHorizontalPodAutoscalerListV2Beta1Props = {
    items: Array<SerializedHorizontalPodAutoscalerV2Beta1>;
    metadata?: SerializedListMeta;
};

export function serializeHorizontalPodAutoscalerListV2Beta1Props(
    options: undefined
): undefined;
export function serializeHorizontalPodAutoscalerListV2Beta1Props(
    options: HorizontalPodAutoscalerListV2Beta1Props
): SerializedHorizontalPodAutoscalerListV2Beta1Props;
export function serializeHorizontalPodAutoscalerListV2Beta1Props(
    options: HorizontalPodAutoscalerListV2Beta1Props | undefined
): SerializedHorizontalPodAutoscalerListV2Beta1Props | undefined;
export function serializeHorizontalPodAutoscalerListV2Beta1Props(
    options: HorizontalPodAutoscalerListV2Beta1Props | undefined
): SerializedHorizontalPodAutoscalerListV2Beta1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedHorizontalPodAutoscalerListV2Beta1Props = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => HorizontalPodAutoscalerV2Beta1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type HorizontalPodAutoscalerV2Beta2Props = {
    readonly metadata?: ObjectMeta;
    readonly spec?: HorizontalPodAutoscalerSpecV2Beta2;
};

export type SerializedHorizontalPodAutoscalerV2Beta2Props = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedHorizontalPodAutoscalerSpecV2Beta2;
};

export function serializeHorizontalPodAutoscalerV2Beta2Props(
    options: undefined
): undefined;
export function serializeHorizontalPodAutoscalerV2Beta2Props(
    options: HorizontalPodAutoscalerV2Beta2Props
): SerializedHorizontalPodAutoscalerV2Beta2Props;
export function serializeHorizontalPodAutoscalerV2Beta2Props(
    options: HorizontalPodAutoscalerV2Beta2Props | undefined
): SerializedHorizontalPodAutoscalerV2Beta2Props | undefined;
export function serializeHorizontalPodAutoscalerV2Beta2Props(
    options: HorizontalPodAutoscalerV2Beta2Props | undefined
): SerializedHorizontalPodAutoscalerV2Beta2Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedHorizontalPodAutoscalerV2Beta2Props = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeHorizontalPodAutoscalerSpecV2Beta2(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type HorizontalPodAutoscalerListV2Beta2Props = {
    readonly items: Array<HorizontalPodAutoscalerV2Beta2Props>;
    readonly metadata?: ListMeta;
};

export type SerializedHorizontalPodAutoscalerListV2Beta2Props = {
    items: Array<SerializedHorizontalPodAutoscalerV2Beta2>;
    metadata?: SerializedListMeta;
};

export function serializeHorizontalPodAutoscalerListV2Beta2Props(
    options: undefined
): undefined;
export function serializeHorizontalPodAutoscalerListV2Beta2Props(
    options: HorizontalPodAutoscalerListV2Beta2Props
): SerializedHorizontalPodAutoscalerListV2Beta2Props;
export function serializeHorizontalPodAutoscalerListV2Beta2Props(
    options: HorizontalPodAutoscalerListV2Beta2Props | undefined
): SerializedHorizontalPodAutoscalerListV2Beta2Props | undefined;
export function serializeHorizontalPodAutoscalerListV2Beta2Props(
    options: HorizontalPodAutoscalerListV2Beta2Props | undefined
): SerializedHorizontalPodAutoscalerListV2Beta2Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedHorizontalPodAutoscalerListV2Beta2Props = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => HorizontalPodAutoscalerV2Beta2(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type CronJobProps = {
    readonly metadata?: ObjectMeta;
    readonly spec?: CronJobSpec;
};

export type SerializedCronJobProps = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedCronJobSpec;
};

export function serializeCronJobProps(options: undefined): undefined;
export function serializeCronJobProps(
    options: CronJobProps
): SerializedCronJobProps;
export function serializeCronJobProps(
    options: CronJobProps | undefined
): SerializedCronJobProps | undefined;
export function serializeCronJobProps(
    options: CronJobProps | undefined
): SerializedCronJobProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCronJobProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeCronJobSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type CronJobListProps = {
    readonly items: Array<CronJobProps>;
    readonly metadata?: ListMeta;
};

export type SerializedCronJobListProps = {
    items: Array<SerializedCronJob>;
    metadata?: SerializedListMeta;
};

export function serializeCronJobListProps(options: undefined): undefined;
export function serializeCronJobListProps(
    options: CronJobListProps
): SerializedCronJobListProps;
export function serializeCronJobListProps(
    options: CronJobListProps | undefined
): SerializedCronJobListProps | undefined;
export function serializeCronJobListProps(
    options: CronJobListProps | undefined
): SerializedCronJobListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCronJobListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => CronJob(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type JobProps = {
    readonly metadata?: ObjectMeta;
    readonly spec?: JobSpec;
};

export type SerializedJobProps = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedJobSpec;
};

export function serializeJobProps(options: undefined): undefined;
export function serializeJobProps(options: JobProps): SerializedJobProps;
export function serializeJobProps(
    options: JobProps | undefined
): SerializedJobProps | undefined;
export function serializeJobProps(
    options: JobProps | undefined
): SerializedJobProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedJobProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeJobSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type JobListProps = {
    readonly items: Array<JobProps>;
    readonly metadata?: ListMeta;
};

export type SerializedJobListProps = {
    items: Array<SerializedJob>;
    metadata?: SerializedListMeta;
};

export function serializeJobListProps(options: undefined): undefined;
export function serializeJobListProps(
    options: JobListProps
): SerializedJobListProps;
export function serializeJobListProps(
    options: JobListProps | undefined
): SerializedJobListProps | undefined;
export function serializeJobListProps(
    options: JobListProps | undefined
): SerializedJobListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedJobListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => Job(item)).filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type CronJobV1Beta1Props = {
    readonly metadata?: ObjectMeta;
    readonly spec?: CronJobSpecV1Beta1;
};

export type SerializedCronJobV1Beta1Props = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedCronJobSpecV1Beta1;
};

export function serializeCronJobV1Beta1Props(options: undefined): undefined;
export function serializeCronJobV1Beta1Props(
    options: CronJobV1Beta1Props
): SerializedCronJobV1Beta1Props;
export function serializeCronJobV1Beta1Props(
    options: CronJobV1Beta1Props | undefined
): SerializedCronJobV1Beta1Props | undefined;
export function serializeCronJobV1Beta1Props(
    options: CronJobV1Beta1Props | undefined
): SerializedCronJobV1Beta1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCronJobV1Beta1Props = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeCronJobSpecV1Beta1(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type CronJobListV1Beta1Props = {
    readonly items: Array<CronJobV1Beta1Props>;
    readonly metadata?: ListMeta;
};

export type SerializedCronJobListV1Beta1Props = {
    items: Array<SerializedCronJobV1Beta1>;
    metadata?: SerializedListMeta;
};

export function serializeCronJobListV1Beta1Props(options: undefined): undefined;
export function serializeCronJobListV1Beta1Props(
    options: CronJobListV1Beta1Props
): SerializedCronJobListV1Beta1Props;
export function serializeCronJobListV1Beta1Props(
    options: CronJobListV1Beta1Props | undefined
): SerializedCronJobListV1Beta1Props | undefined;
export function serializeCronJobListV1Beta1Props(
    options: CronJobListV1Beta1Props | undefined
): SerializedCronJobListV1Beta1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCronJobListV1Beta1Props = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => CronJobV1Beta1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type CertificateSigningRequestProps = {
    readonly metadata?: ObjectMeta;
    readonly spec: CertificateSigningRequestSpec;
};

export type SerializedCertificateSigningRequestProps = {
    metadata?: SerializedObjectMeta;
    spec: SerializedCertificateSigningRequestSpec;
};

export function serializeCertificateSigningRequestProps(
    options: undefined
): undefined;
export function serializeCertificateSigningRequestProps(
    options: CertificateSigningRequestProps
): SerializedCertificateSigningRequestProps;
export function serializeCertificateSigningRequestProps(
    options: CertificateSigningRequestProps | undefined
): SerializedCertificateSigningRequestProps | undefined;
export function serializeCertificateSigningRequestProps(
    options: CertificateSigningRequestProps | undefined
): SerializedCertificateSigningRequestProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCertificateSigningRequestProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeCertificateSigningRequestSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type CertificateSigningRequestListProps = {
    readonly items: Array<CertificateSigningRequestProps>;
    readonly metadata?: ListMeta;
};

export type SerializedCertificateSigningRequestListProps = {
    items: Array<SerializedCertificateSigningRequest>;
    metadata?: SerializedListMeta;
};

export function serializeCertificateSigningRequestListProps(
    options: undefined
): undefined;
export function serializeCertificateSigningRequestListProps(
    options: CertificateSigningRequestListProps
): SerializedCertificateSigningRequestListProps;
export function serializeCertificateSigningRequestListProps(
    options: CertificateSigningRequestListProps | undefined
): SerializedCertificateSigningRequestListProps | undefined;
export function serializeCertificateSigningRequestListProps(
    options: CertificateSigningRequestListProps | undefined
): SerializedCertificateSigningRequestListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCertificateSigningRequestListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => CertificateSigningRequest(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type LeaseProps = {
    readonly metadata?: ObjectMeta;
    readonly spec?: LeaseSpec;
};

export type SerializedLeaseProps = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedLeaseSpec;
};

export function serializeLeaseProps(options: undefined): undefined;
export function serializeLeaseProps(options: LeaseProps): SerializedLeaseProps;
export function serializeLeaseProps(
    options: LeaseProps | undefined
): SerializedLeaseProps | undefined;
export function serializeLeaseProps(
    options: LeaseProps | undefined
): SerializedLeaseProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedLeaseProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeLeaseSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type LeaseListProps = {
    readonly items: Array<LeaseProps>;
    readonly metadata?: ListMeta;
};

export type SerializedLeaseListProps = {
    items: Array<SerializedLease>;
    metadata?: SerializedListMeta;
};

export function serializeLeaseListProps(options: undefined): undefined;
export function serializeLeaseListProps(
    options: LeaseListProps
): SerializedLeaseListProps;
export function serializeLeaseListProps(
    options: LeaseListProps | undefined
): SerializedLeaseListProps | undefined;
export function serializeLeaseListProps(
    options: LeaseListProps | undefined
): SerializedLeaseListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedLeaseListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => Lease(item)).filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type BindingProps = {
    readonly metadata?: ObjectMeta;
    readonly target: ObjectReference;
};

export type SerializedBindingProps = {
    metadata?: SerializedObjectMeta;
    target: SerializedObjectReference;
};

export function serializeBindingProps(options: undefined): undefined;
export function serializeBindingProps(
    options: BindingProps
): SerializedBindingProps;
export function serializeBindingProps(
    options: BindingProps | undefined
): SerializedBindingProps | undefined;
export function serializeBindingProps(
    options: BindingProps | undefined
): SerializedBindingProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedBindingProps = {
        metadata: serializeObjectMeta(options.metadata),
        target: serializeObjectReference(options.target),
    };

    return senchou.wrapTemplate(options, result);
}

export type ComponentStatusProps = {
    readonly conditions?: Array<ComponentCondition>;
    readonly metadata?: ObjectMeta;
};

export type SerializedComponentStatusProps = {
    conditions?: Array<SerializedComponentCondition>;
    metadata?: SerializedObjectMeta;
};

export function serializeComponentStatusProps(options: undefined): undefined;
export function serializeComponentStatusProps(
    options: ComponentStatusProps
): SerializedComponentStatusProps;
export function serializeComponentStatusProps(
    options: ComponentStatusProps | undefined
): SerializedComponentStatusProps | undefined;
export function serializeComponentStatusProps(
    options: ComponentStatusProps | undefined
): SerializedComponentStatusProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedComponentStatusProps = {
        conditions: prelude.serialize(options.conditions, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeComponentCondition(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeObjectMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type ComponentStatusListProps = {
    readonly items: Array<ComponentStatusProps>;
    readonly metadata?: ListMeta;
};

export type SerializedComponentStatusListProps = {
    items: Array<SerializedComponentStatus>;
    metadata?: SerializedListMeta;
};

export function serializeComponentStatusListProps(
    options: undefined
): undefined;
export function serializeComponentStatusListProps(
    options: ComponentStatusListProps
): SerializedComponentStatusListProps;
export function serializeComponentStatusListProps(
    options: ComponentStatusListProps | undefined
): SerializedComponentStatusListProps | undefined;
export function serializeComponentStatusListProps(
    options: ComponentStatusListProps | undefined
): SerializedComponentStatusListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedComponentStatusListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => ComponentStatus(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type ConfigMapProps = {
    readonly binaryData?: { [key: string]: string };
    readonly data?: { [key: string]: string };
    readonly immutable?: boolean;
    readonly metadata?: ObjectMeta;
};

export type SerializedConfigMapProps = {
    binaryData?: { [key: string]: string };
    data?: { [key: string]: string };
    immutable?: boolean;
    metadata?: SerializedObjectMeta;
};

export function serializeConfigMapProps(options: undefined): undefined;
export function serializeConfigMapProps(
    options: ConfigMapProps
): SerializedConfigMapProps;
export function serializeConfigMapProps(
    options: ConfigMapProps | undefined
): SerializedConfigMapProps | undefined;
export function serializeConfigMapProps(
    options: ConfigMapProps | undefined
): SerializedConfigMapProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedConfigMapProps = {
        binaryData:
            options.binaryData === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.binaryData,
                      Object.entries(options.binaryData).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        data:
            options.data === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.data,
                      Object.entries(options.data).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        immutable: options.immutable,
        metadata: serializeObjectMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type ConfigMapListProps = {
    readonly items: Array<ConfigMapProps>;
    readonly metadata?: ListMeta;
};

export type SerializedConfigMapListProps = {
    items: Array<SerializedConfigMap>;
    metadata?: SerializedListMeta;
};

export function serializeConfigMapListProps(options: undefined): undefined;
export function serializeConfigMapListProps(
    options: ConfigMapListProps
): SerializedConfigMapListProps;
export function serializeConfigMapListProps(
    options: ConfigMapListProps | undefined
): SerializedConfigMapListProps | undefined;
export function serializeConfigMapListProps(
    options: ConfigMapListProps | undefined
): SerializedConfigMapListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedConfigMapListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => ConfigMap(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type EndpointsProps = {
    readonly metadata?: ObjectMeta;
    readonly subsets?: Array<EndpointSubset>;
};

export type SerializedEndpointsProps = {
    metadata?: SerializedObjectMeta;
    subsets?: Array<SerializedEndpointSubset>;
};

export function serializeEndpointsProps(options: undefined): undefined;
export function serializeEndpointsProps(
    options: EndpointsProps
): SerializedEndpointsProps;
export function serializeEndpointsProps(
    options: EndpointsProps | undefined
): SerializedEndpointsProps | undefined;
export function serializeEndpointsProps(
    options: EndpointsProps | undefined
): SerializedEndpointsProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEndpointsProps = {
        metadata: serializeObjectMeta(options.metadata),
        subsets: prelude.serialize(options.subsets, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeEndpointSubset(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type EndpointsListProps = {
    readonly items: Array<EndpointsProps>;
    readonly metadata?: ListMeta;
};

export type SerializedEndpointsListProps = {
    items: Array<SerializedEndpoints>;
    metadata?: SerializedListMeta;
};

export function serializeEndpointsListProps(options: undefined): undefined;
export function serializeEndpointsListProps(
    options: EndpointsListProps
): SerializedEndpointsListProps;
export function serializeEndpointsListProps(
    options: EndpointsListProps | undefined
): SerializedEndpointsListProps | undefined;
export function serializeEndpointsListProps(
    options: EndpointsListProps | undefined
): SerializedEndpointsListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEndpointsListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => Endpoints(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type EventProps = {
    readonly action?: string;
    readonly deprecatedCount?: number;
    readonly deprecatedFirstTimestamp?: Date;
    readonly deprecatedLastTimestamp?: Date;
    readonly deprecatedSource?: EventSource;
    readonly eventTime: Date;
    readonly metadata?: ObjectMeta;
    readonly note?: string;
    readonly reason?: string;
    readonly regarding?: ObjectReference;
    readonly related?: ObjectReference;
    readonly reportingController?: string;
    readonly reportingInstance?: string;
    readonly series?: EventSeries;
    readonly type?: string;
};

export type SerializedEventProps = {
    action?: string;
    deprecatedCount?: number;
    deprecatedFirstTimestamp?: string;
    deprecatedLastTimestamp?: string;
    deprecatedSource?: SerializedEventSource;
    eventTime: string;
    metadata?: SerializedObjectMeta;
    note?: string;
    reason?: string;
    regarding?: SerializedObjectReference;
    related?: SerializedObjectReference;
    reportingController?: string;
    reportingInstance?: string;
    series?: SerializedEventSeries;
    type?: string;
};

export function serializeEventProps(options: undefined): undefined;
export function serializeEventProps(options: EventProps): SerializedEventProps;
export function serializeEventProps(
    options: EventProps | undefined
): SerializedEventProps | undefined;
export function serializeEventProps(
    options: EventProps | undefined
): SerializedEventProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEventProps = {
        action: options.action,
        deprecatedCount: options.deprecatedCount,
        deprecatedFirstTimestamp: options.deprecatedFirstTimestamp?.toISOString(),
        deprecatedLastTimestamp: options.deprecatedLastTimestamp?.toISOString(),
        deprecatedSource: serializeEventSource(options.deprecatedSource),
        eventTime: options.eventTime?.toISOString(),
        metadata: serializeObjectMeta(options.metadata),
        note: options.note,
        reason: options.reason,
        regarding: serializeObjectReference(options.regarding),
        related: serializeObjectReference(options.related),
        reportingController: options.reportingController,
        reportingInstance: options.reportingInstance,
        series: serializeEventSeries(options.series),
        type: options.type,
    };

    return senchou.wrapTemplate(options, result);
}

export type EventListProps = {
    readonly items: Array<EventProps>;
    readonly metadata?: ListMeta;
};

export type SerializedEventListProps = {
    items: Array<SerializedEvent>;
    metadata?: SerializedListMeta;
};

export function serializeEventListProps(options: undefined): undefined;
export function serializeEventListProps(
    options: EventListProps
): SerializedEventListProps;
export function serializeEventListProps(
    options: EventListProps | undefined
): SerializedEventListProps | undefined;
export function serializeEventListProps(
    options: EventListProps | undefined
): SerializedEventListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEventListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => Event(item)).filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type LimitRangeProps = {
    readonly metadata?: ObjectMeta;
    readonly spec?: LimitRangeSpec;
};

export type SerializedLimitRangeProps = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedLimitRangeSpec;
};

export function serializeLimitRangeProps(options: undefined): undefined;
export function serializeLimitRangeProps(
    options: LimitRangeProps
): SerializedLimitRangeProps;
export function serializeLimitRangeProps(
    options: LimitRangeProps | undefined
): SerializedLimitRangeProps | undefined;
export function serializeLimitRangeProps(
    options: LimitRangeProps | undefined
): SerializedLimitRangeProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedLimitRangeProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeLimitRangeSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type LimitRangeListProps = {
    readonly items: Array<LimitRangeProps>;
    readonly metadata?: ListMeta;
};

export type SerializedLimitRangeListProps = {
    items: Array<SerializedLimitRange>;
    metadata?: SerializedListMeta;
};

export function serializeLimitRangeListProps(options: undefined): undefined;
export function serializeLimitRangeListProps(
    options: LimitRangeListProps
): SerializedLimitRangeListProps;
export function serializeLimitRangeListProps(
    options: LimitRangeListProps | undefined
): SerializedLimitRangeListProps | undefined;
export function serializeLimitRangeListProps(
    options: LimitRangeListProps | undefined
): SerializedLimitRangeListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedLimitRangeListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => LimitRange(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type NamespaceProps = {
    readonly metadata?: ObjectMeta;
    readonly spec?: NamespaceSpec;
};

export type SerializedNamespaceProps = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedNamespaceSpec;
};

export function serializeNamespaceProps(options: undefined): undefined;
export function serializeNamespaceProps(
    options: NamespaceProps
): SerializedNamespaceProps;
export function serializeNamespaceProps(
    options: NamespaceProps | undefined
): SerializedNamespaceProps | undefined;
export function serializeNamespaceProps(
    options: NamespaceProps | undefined
): SerializedNamespaceProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedNamespaceProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeNamespaceSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type NamespaceListProps = {
    readonly items: Array<NamespaceProps>;
    readonly metadata?: ListMeta;
};

export type SerializedNamespaceListProps = {
    items: Array<SerializedNamespace>;
    metadata?: SerializedListMeta;
};

export function serializeNamespaceListProps(options: undefined): undefined;
export function serializeNamespaceListProps(
    options: NamespaceListProps
): SerializedNamespaceListProps;
export function serializeNamespaceListProps(
    options: NamespaceListProps | undefined
): SerializedNamespaceListProps | undefined;
export function serializeNamespaceListProps(
    options: NamespaceListProps | undefined
): SerializedNamespaceListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedNamespaceListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => Namespace(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type NodeProps = {
    readonly metadata?: ObjectMeta;
    readonly spec?: NodeSpec;
};

export type SerializedNodeProps = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedNodeSpec;
};

export function serializeNodeProps(options: undefined): undefined;
export function serializeNodeProps(options: NodeProps): SerializedNodeProps;
export function serializeNodeProps(
    options: NodeProps | undefined
): SerializedNodeProps | undefined;
export function serializeNodeProps(
    options: NodeProps | undefined
): SerializedNodeProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedNodeProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeNodeSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type NodeListProps = {
    readonly items: Array<NodeProps>;
    readonly metadata?: ListMeta;
};

export type SerializedNodeListProps = {
    items: Array<SerializedNode>;
    metadata?: SerializedListMeta;
};

export function serializeNodeListProps(options: undefined): undefined;
export function serializeNodeListProps(
    options: NodeListProps
): SerializedNodeListProps;
export function serializeNodeListProps(
    options: NodeListProps | undefined
): SerializedNodeListProps | undefined;
export function serializeNodeListProps(
    options: NodeListProps | undefined
): SerializedNodeListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedNodeListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => Node(item)).filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type PersistentVolumeProps = {
    readonly metadata?: ObjectMeta;
    readonly spec?: PersistentVolumeSpec;
};

export type SerializedPersistentVolumeProps = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedPersistentVolumeSpec;
};

export function serializePersistentVolumeProps(options: undefined): undefined;
export function serializePersistentVolumeProps(
    options: PersistentVolumeProps
): SerializedPersistentVolumeProps;
export function serializePersistentVolumeProps(
    options: PersistentVolumeProps | undefined
): SerializedPersistentVolumeProps | undefined;
export function serializePersistentVolumeProps(
    options: PersistentVolumeProps | undefined
): SerializedPersistentVolumeProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPersistentVolumeProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializePersistentVolumeSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type PersistentVolumeClaimProps = {
    readonly metadata?: ObjectMeta;
    readonly spec?: PersistentVolumeClaimSpec;
};

export type SerializedPersistentVolumeClaimProps = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedPersistentVolumeClaimSpec;
};

export function serializePersistentVolumeClaimProps(
    options: undefined
): undefined;
export function serializePersistentVolumeClaimProps(
    options: PersistentVolumeClaimProps
): SerializedPersistentVolumeClaimProps;
export function serializePersistentVolumeClaimProps(
    options: PersistentVolumeClaimProps | undefined
): SerializedPersistentVolumeClaimProps | undefined;
export function serializePersistentVolumeClaimProps(
    options: PersistentVolumeClaimProps | undefined
): SerializedPersistentVolumeClaimProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPersistentVolumeClaimProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializePersistentVolumeClaimSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type PersistentVolumeClaimListProps = {
    readonly items: Array<PersistentVolumeClaimProps>;
    readonly metadata?: ListMeta;
};

export type SerializedPersistentVolumeClaimListProps = {
    items: Array<SerializedPersistentVolumeClaim>;
    metadata?: SerializedListMeta;
};

export function serializePersistentVolumeClaimListProps(
    options: undefined
): undefined;
export function serializePersistentVolumeClaimListProps(
    options: PersistentVolumeClaimListProps
): SerializedPersistentVolumeClaimListProps;
export function serializePersistentVolumeClaimListProps(
    options: PersistentVolumeClaimListProps | undefined
): SerializedPersistentVolumeClaimListProps | undefined;
export function serializePersistentVolumeClaimListProps(
    options: PersistentVolumeClaimListProps | undefined
): SerializedPersistentVolumeClaimListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPersistentVolumeClaimListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => PersistentVolumeClaim(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type PersistentVolumeListProps = {
    readonly items: Array<PersistentVolumeProps>;
    readonly metadata?: ListMeta;
};

export type SerializedPersistentVolumeListProps = {
    items: Array<SerializedPersistentVolume>;
    metadata?: SerializedListMeta;
};

export function serializePersistentVolumeListProps(
    options: undefined
): undefined;
export function serializePersistentVolumeListProps(
    options: PersistentVolumeListProps
): SerializedPersistentVolumeListProps;
export function serializePersistentVolumeListProps(
    options: PersistentVolumeListProps | undefined
): SerializedPersistentVolumeListProps | undefined;
export function serializePersistentVolumeListProps(
    options: PersistentVolumeListProps | undefined
): SerializedPersistentVolumeListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPersistentVolumeListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => PersistentVolume(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type PodProps = {
    readonly metadata?: ObjectMeta;
    readonly spec?: PodSpec;
};

export type SerializedPodProps = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedPodSpec;
};

export function serializePodProps(options: undefined): undefined;
export function serializePodProps(options: PodProps): SerializedPodProps;
export function serializePodProps(
    options: PodProps | undefined
): SerializedPodProps | undefined;
export function serializePodProps(
    options: PodProps | undefined
): SerializedPodProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPodProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializePodSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type PodListProps = {
    readonly items: Array<PodProps>;
    readonly metadata?: ListMeta;
};

export type SerializedPodListProps = {
    items: Array<SerializedPod>;
    metadata?: SerializedListMeta;
};

export function serializePodListProps(options: undefined): undefined;
export function serializePodListProps(
    options: PodListProps
): SerializedPodListProps;
export function serializePodListProps(
    options: PodListProps | undefined
): SerializedPodListProps | undefined;
export function serializePodListProps(
    options: PodListProps | undefined
): SerializedPodListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPodListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => Pod(item)).filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type PodTemplateProps = {
    readonly metadata?: ObjectMeta;
    readonly template?: PodTemplateSpec;
};

export type SerializedPodTemplateProps = {
    metadata?: SerializedObjectMeta;
    template?: SerializedPodTemplateSpec;
};

export function serializePodTemplateProps(options: undefined): undefined;
export function serializePodTemplateProps(
    options: PodTemplateProps
): SerializedPodTemplateProps;
export function serializePodTemplateProps(
    options: PodTemplateProps | undefined
): SerializedPodTemplateProps | undefined;
export function serializePodTemplateProps(
    options: PodTemplateProps | undefined
): SerializedPodTemplateProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPodTemplateProps = {
        metadata: serializeObjectMeta(options.metadata),
        template: serializePodTemplateSpec(options.template),
    };

    return senchou.wrapTemplate(options, result);
}

export type PodTemplateListProps = {
    readonly items: Array<PodTemplateProps>;
    readonly metadata?: ListMeta;
};

export type SerializedPodTemplateListProps = {
    items: Array<SerializedPodTemplate>;
    metadata?: SerializedListMeta;
};

export function serializePodTemplateListProps(options: undefined): undefined;
export function serializePodTemplateListProps(
    options: PodTemplateListProps
): SerializedPodTemplateListProps;
export function serializePodTemplateListProps(
    options: PodTemplateListProps | undefined
): SerializedPodTemplateListProps | undefined;
export function serializePodTemplateListProps(
    options: PodTemplateListProps | undefined
): SerializedPodTemplateListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPodTemplateListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => PodTemplate(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type ReplicationControllerProps = {
    readonly metadata?: ObjectMeta;
    readonly spec?: ReplicationControllerSpec;
};

export type SerializedReplicationControllerProps = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedReplicationControllerSpec;
};

export function serializeReplicationControllerProps(
    options: undefined
): undefined;
export function serializeReplicationControllerProps(
    options: ReplicationControllerProps
): SerializedReplicationControllerProps;
export function serializeReplicationControllerProps(
    options: ReplicationControllerProps | undefined
): SerializedReplicationControllerProps | undefined;
export function serializeReplicationControllerProps(
    options: ReplicationControllerProps | undefined
): SerializedReplicationControllerProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedReplicationControllerProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeReplicationControllerSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type ReplicationControllerListProps = {
    readonly items: Array<ReplicationControllerProps>;
    readonly metadata?: ListMeta;
};

export type SerializedReplicationControllerListProps = {
    items: Array<SerializedReplicationController>;
    metadata?: SerializedListMeta;
};

export function serializeReplicationControllerListProps(
    options: undefined
): undefined;
export function serializeReplicationControllerListProps(
    options: ReplicationControllerListProps
): SerializedReplicationControllerListProps;
export function serializeReplicationControllerListProps(
    options: ReplicationControllerListProps | undefined
): SerializedReplicationControllerListProps | undefined;
export function serializeReplicationControllerListProps(
    options: ReplicationControllerListProps | undefined
): SerializedReplicationControllerListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedReplicationControllerListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => ReplicationController(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type ResourceQuotaProps = {
    readonly metadata?: ObjectMeta;
    readonly spec?: ResourceQuotaSpec;
};

export type SerializedResourceQuotaProps = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedResourceQuotaSpec;
};

export function serializeResourceQuotaProps(options: undefined): undefined;
export function serializeResourceQuotaProps(
    options: ResourceQuotaProps
): SerializedResourceQuotaProps;
export function serializeResourceQuotaProps(
    options: ResourceQuotaProps | undefined
): SerializedResourceQuotaProps | undefined;
export function serializeResourceQuotaProps(
    options: ResourceQuotaProps | undefined
): SerializedResourceQuotaProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedResourceQuotaProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeResourceQuotaSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type ResourceQuotaListProps = {
    readonly items: Array<ResourceQuotaProps>;
    readonly metadata?: ListMeta;
};

export type SerializedResourceQuotaListProps = {
    items: Array<SerializedResourceQuota>;
    metadata?: SerializedListMeta;
};

export function serializeResourceQuotaListProps(options: undefined): undefined;
export function serializeResourceQuotaListProps(
    options: ResourceQuotaListProps
): SerializedResourceQuotaListProps;
export function serializeResourceQuotaListProps(
    options: ResourceQuotaListProps | undefined
): SerializedResourceQuotaListProps | undefined;
export function serializeResourceQuotaListProps(
    options: ResourceQuotaListProps | undefined
): SerializedResourceQuotaListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedResourceQuotaListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => ResourceQuota(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type SecretProps = {
    readonly data?: { [key: string]: string };
    readonly immutable?: boolean;
    readonly metadata?: ObjectMeta;
    readonly stringData?: { [key: string]: string };
    readonly type?: string;
};

export type SerializedSecretProps = {
    data?: { [key: string]: string };
    immutable?: boolean;
    metadata?: SerializedObjectMeta;
    stringData?: { [key: string]: string };
    type?: string;
};

export function serializeSecretProps(options: undefined): undefined;
export function serializeSecretProps(
    options: SecretProps
): SerializedSecretProps;
export function serializeSecretProps(
    options: SecretProps | undefined
): SerializedSecretProps | undefined;
export function serializeSecretProps(
    options: SecretProps | undefined
): SerializedSecretProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSecretProps = {
        data:
            options.data === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.data,
                      Object.entries(options.data).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        immutable: options.immutable,
        metadata: serializeObjectMeta(options.metadata),
        stringData:
            options.stringData === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.stringData,
                      Object.entries(options.stringData).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        type: options.type,
    };

    return senchou.wrapTemplate(options, result);
}

export type SecretListProps = {
    readonly items: Array<SecretProps>;
    readonly metadata?: ListMeta;
};

export type SerializedSecretListProps = {
    items: Array<SerializedSecret>;
    metadata?: SerializedListMeta;
};

export function serializeSecretListProps(options: undefined): undefined;
export function serializeSecretListProps(
    options: SecretListProps
): SerializedSecretListProps;
export function serializeSecretListProps(
    options: SecretListProps | undefined
): SerializedSecretListProps | undefined;
export function serializeSecretListProps(
    options: SecretListProps | undefined
): SerializedSecretListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSecretListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => Secret(item)).filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type ServiceProps = {
    readonly metadata?: ObjectMeta;
    readonly spec?: ServiceSpec;
};

export type SerializedServiceProps = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedServiceSpec;
};

export function serializeServiceProps(options: undefined): undefined;
export function serializeServiceProps(
    options: ServiceProps
): SerializedServiceProps;
export function serializeServiceProps(
    options: ServiceProps | undefined
): SerializedServiceProps | undefined;
export function serializeServiceProps(
    options: ServiceProps | undefined
): SerializedServiceProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedServiceProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeServiceSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type ServiceAccountProps = {
    readonly automountServiceAccountToken?: boolean;
    readonly imagePullSecrets?: Array<LocalObjectReference>;
    readonly metadata?: ObjectMeta;
    readonly secrets?: Array<ObjectReference>;
};

export type SerializedServiceAccountProps = {
    automountServiceAccountToken?: boolean;
    imagePullSecrets?: Array<SerializedLocalObjectReference>;
    metadata?: SerializedObjectMeta;
    secrets?: Array<SerializedObjectReference>;
};

export function serializeServiceAccountProps(options: undefined): undefined;
export function serializeServiceAccountProps(
    options: ServiceAccountProps
): SerializedServiceAccountProps;
export function serializeServiceAccountProps(
    options: ServiceAccountProps | undefined
): SerializedServiceAccountProps | undefined;
export function serializeServiceAccountProps(
    options: ServiceAccountProps | undefined
): SerializedServiceAccountProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedServiceAccountProps = {
        automountServiceAccountToken: options.automountServiceAccountToken,
        imagePullSecrets: prelude.serialize(options.imagePullSecrets, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeLocalObjectReference(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeObjectMeta(options.metadata),
        secrets: prelude.serialize(options.secrets, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeObjectReference(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type ServiceAccountListProps = {
    readonly items: Array<ServiceAccountProps>;
    readonly metadata?: ListMeta;
};

export type SerializedServiceAccountListProps = {
    items: Array<SerializedServiceAccount>;
    metadata?: SerializedListMeta;
};

export function serializeServiceAccountListProps(options: undefined): undefined;
export function serializeServiceAccountListProps(
    options: ServiceAccountListProps
): SerializedServiceAccountListProps;
export function serializeServiceAccountListProps(
    options: ServiceAccountListProps | undefined
): SerializedServiceAccountListProps | undefined;
export function serializeServiceAccountListProps(
    options: ServiceAccountListProps | undefined
): SerializedServiceAccountListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedServiceAccountListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => ServiceAccount(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type ServiceListProps = {
    readonly items: Array<ServiceProps>;
    readonly metadata?: ListMeta;
};

export type SerializedServiceListProps = {
    items: Array<SerializedService>;
    metadata?: SerializedListMeta;
};

export function serializeServiceListProps(options: undefined): undefined;
export function serializeServiceListProps(
    options: ServiceListProps
): SerializedServiceListProps;
export function serializeServiceListProps(
    options: ServiceListProps | undefined
): SerializedServiceListProps | undefined;
export function serializeServiceListProps(
    options: ServiceListProps | undefined
): SerializedServiceListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedServiceListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => Service(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type EndpointSliceProps = {
    readonly addressType: string;
    readonly endpoints: Array<Endpoint>;
    readonly metadata?: ObjectMeta;
    readonly ports?: Array<EndpointPort>;
};

export type SerializedEndpointSliceProps = {
    addressType: string;
    endpoints: Array<SerializedEndpoint>;
    metadata?: SerializedObjectMeta;
    ports?: Array<SerializedEndpointPort>;
};

export function serializeEndpointSliceProps(options: undefined): undefined;
export function serializeEndpointSliceProps(
    options: EndpointSliceProps
): SerializedEndpointSliceProps;
export function serializeEndpointSliceProps(
    options: EndpointSliceProps | undefined
): SerializedEndpointSliceProps | undefined;
export function serializeEndpointSliceProps(
    options: EndpointSliceProps | undefined
): SerializedEndpointSliceProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEndpointSliceProps = {
        addressType: options.addressType,
        endpoints: prelude.serialize(options.endpoints, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeEndpoint(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeObjectMeta(options.metadata),
        ports: prelude.serialize(options.ports, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeEndpointPort(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type EndpointSliceListProps = {
    readonly items: Array<EndpointSliceProps>;
    readonly metadata?: ListMeta;
};

export type SerializedEndpointSliceListProps = {
    items: Array<SerializedEndpointSlice>;
    metadata?: SerializedListMeta;
};

export function serializeEndpointSliceListProps(options: undefined): undefined;
export function serializeEndpointSliceListProps(
    options: EndpointSliceListProps
): SerializedEndpointSliceListProps;
export function serializeEndpointSliceListProps(
    options: EndpointSliceListProps | undefined
): SerializedEndpointSliceListProps | undefined;
export function serializeEndpointSliceListProps(
    options: EndpointSliceListProps | undefined
): SerializedEndpointSliceListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEndpointSliceListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => EndpointSlice(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type EndpointSliceV1Beta1Props = {
    readonly addressType: string;
    readonly endpoints: Array<EndpointV1Beta1>;
    readonly metadata?: ObjectMeta;
    readonly ports?: Array<EndpointPortV1Beta1>;
};

export type SerializedEndpointSliceV1Beta1Props = {
    addressType: string;
    endpoints: Array<SerializedEndpointV1Beta1>;
    metadata?: SerializedObjectMeta;
    ports?: Array<SerializedEndpointPortV1Beta1>;
};

export function serializeEndpointSliceV1Beta1Props(
    options: undefined
): undefined;
export function serializeEndpointSliceV1Beta1Props(
    options: EndpointSliceV1Beta1Props
): SerializedEndpointSliceV1Beta1Props;
export function serializeEndpointSliceV1Beta1Props(
    options: EndpointSliceV1Beta1Props | undefined
): SerializedEndpointSliceV1Beta1Props | undefined;
export function serializeEndpointSliceV1Beta1Props(
    options: EndpointSliceV1Beta1Props | undefined
): SerializedEndpointSliceV1Beta1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEndpointSliceV1Beta1Props = {
        addressType: options.addressType,
        endpoints: prelude.serialize(options.endpoints, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeEndpointV1Beta1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeObjectMeta(options.metadata),
        ports: prelude.serialize(options.ports, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeEndpointPortV1Beta1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type EndpointSliceListV1Beta1Props = {
    readonly items: Array<EndpointSliceV1Beta1Props>;
    readonly metadata?: ListMeta;
};

export type SerializedEndpointSliceListV1Beta1Props = {
    items: Array<SerializedEndpointSliceV1Beta1>;
    metadata?: SerializedListMeta;
};

export function serializeEndpointSliceListV1Beta1Props(
    options: undefined
): undefined;
export function serializeEndpointSliceListV1Beta1Props(
    options: EndpointSliceListV1Beta1Props
): SerializedEndpointSliceListV1Beta1Props;
export function serializeEndpointSliceListV1Beta1Props(
    options: EndpointSliceListV1Beta1Props | undefined
): SerializedEndpointSliceListV1Beta1Props | undefined;
export function serializeEndpointSliceListV1Beta1Props(
    options: EndpointSliceListV1Beta1Props | undefined
): SerializedEndpointSliceListV1Beta1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEndpointSliceListV1Beta1Props = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => EndpointSliceV1Beta1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type EventV1Beta1Props = {
    readonly action?: string;
    readonly deprecatedCount?: number;
    readonly deprecatedFirstTimestamp?: Date;
    readonly deprecatedLastTimestamp?: Date;
    readonly deprecatedSource?: EventSource;
    readonly eventTime: Date;
    readonly metadata?: ObjectMeta;
    readonly note?: string;
    readonly reason?: string;
    readonly regarding?: ObjectReference;
    readonly related?: ObjectReference;
    readonly reportingController?: string;
    readonly reportingInstance?: string;
    readonly series?: EventSeriesV1Beta1;
    readonly type?: string;
};

export type SerializedEventV1Beta1Props = {
    action?: string;
    deprecatedCount?: number;
    deprecatedFirstTimestamp?: string;
    deprecatedLastTimestamp?: string;
    deprecatedSource?: SerializedEventSource;
    eventTime: string;
    metadata?: SerializedObjectMeta;
    note?: string;
    reason?: string;
    regarding?: SerializedObjectReference;
    related?: SerializedObjectReference;
    reportingController?: string;
    reportingInstance?: string;
    series?: SerializedEventSeriesV1Beta1;
    type?: string;
};

export function serializeEventV1Beta1Props(options: undefined): undefined;
export function serializeEventV1Beta1Props(
    options: EventV1Beta1Props
): SerializedEventV1Beta1Props;
export function serializeEventV1Beta1Props(
    options: EventV1Beta1Props | undefined
): SerializedEventV1Beta1Props | undefined;
export function serializeEventV1Beta1Props(
    options: EventV1Beta1Props | undefined
): SerializedEventV1Beta1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEventV1Beta1Props = {
        action: options.action,
        deprecatedCount: options.deprecatedCount,
        deprecatedFirstTimestamp: options.deprecatedFirstTimestamp?.toISOString(),
        deprecatedLastTimestamp: options.deprecatedLastTimestamp?.toISOString(),
        deprecatedSource: serializeEventSource(options.deprecatedSource),
        eventTime: options.eventTime?.toISOString(),
        metadata: serializeObjectMeta(options.metadata),
        note: options.note,
        reason: options.reason,
        regarding: serializeObjectReference(options.regarding),
        related: serializeObjectReference(options.related),
        reportingController: options.reportingController,
        reportingInstance: options.reportingInstance,
        series: serializeEventSeriesV1Beta1(options.series),
        type: options.type,
    };

    return senchou.wrapTemplate(options, result);
}

export type EventListV1Beta1Props = {
    readonly items: Array<EventV1Beta1Props>;
    readonly metadata?: ListMeta;
};

export type SerializedEventListV1Beta1Props = {
    items: Array<SerializedEventV1Beta1>;
    metadata?: SerializedListMeta;
};

export function serializeEventListV1Beta1Props(options: undefined): undefined;
export function serializeEventListV1Beta1Props(
    options: EventListV1Beta1Props
): SerializedEventListV1Beta1Props;
export function serializeEventListV1Beta1Props(
    options: EventListV1Beta1Props | undefined
): SerializedEventListV1Beta1Props | undefined;
export function serializeEventListV1Beta1Props(
    options: EventListV1Beta1Props | undefined
): SerializedEventListV1Beta1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEventListV1Beta1Props = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => EventV1Beta1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type FlowSchemaV1Beta1Props = {
    readonly metadata?: ObjectMeta;
    readonly spec?: FlowSchemaSpecV1Beta1;
};

export type SerializedFlowSchemaV1Beta1Props = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedFlowSchemaSpecV1Beta1;
};

export function serializeFlowSchemaV1Beta1Props(options: undefined): undefined;
export function serializeFlowSchemaV1Beta1Props(
    options: FlowSchemaV1Beta1Props
): SerializedFlowSchemaV1Beta1Props;
export function serializeFlowSchemaV1Beta1Props(
    options: FlowSchemaV1Beta1Props | undefined
): SerializedFlowSchemaV1Beta1Props | undefined;
export function serializeFlowSchemaV1Beta1Props(
    options: FlowSchemaV1Beta1Props | undefined
): SerializedFlowSchemaV1Beta1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedFlowSchemaV1Beta1Props = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeFlowSchemaSpecV1Beta1(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type FlowSchemaListV1Beta1Props = {
    readonly items: Array<FlowSchemaV1Beta1Props>;
    readonly metadata?: ListMeta;
};

export type SerializedFlowSchemaListV1Beta1Props = {
    items: Array<SerializedFlowSchemaV1Beta1>;
    metadata?: SerializedListMeta;
};

export function serializeFlowSchemaListV1Beta1Props(
    options: undefined
): undefined;
export function serializeFlowSchemaListV1Beta1Props(
    options: FlowSchemaListV1Beta1Props
): SerializedFlowSchemaListV1Beta1Props;
export function serializeFlowSchemaListV1Beta1Props(
    options: FlowSchemaListV1Beta1Props | undefined
): SerializedFlowSchemaListV1Beta1Props | undefined;
export function serializeFlowSchemaListV1Beta1Props(
    options: FlowSchemaListV1Beta1Props | undefined
): SerializedFlowSchemaListV1Beta1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedFlowSchemaListV1Beta1Props = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => FlowSchemaV1Beta1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type PriorityLevelConfigurationV1Beta1Props = {
    readonly metadata?: ObjectMeta;
    readonly spec?: PriorityLevelConfigurationSpecV1Beta1;
};

export type SerializedPriorityLevelConfigurationV1Beta1Props = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedPriorityLevelConfigurationSpecV1Beta1;
};

export function serializePriorityLevelConfigurationV1Beta1Props(
    options: undefined
): undefined;
export function serializePriorityLevelConfigurationV1Beta1Props(
    options: PriorityLevelConfigurationV1Beta1Props
): SerializedPriorityLevelConfigurationV1Beta1Props;
export function serializePriorityLevelConfigurationV1Beta1Props(
    options: PriorityLevelConfigurationV1Beta1Props | undefined
): SerializedPriorityLevelConfigurationV1Beta1Props | undefined;
export function serializePriorityLevelConfigurationV1Beta1Props(
    options: PriorityLevelConfigurationV1Beta1Props | undefined
): SerializedPriorityLevelConfigurationV1Beta1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPriorityLevelConfigurationV1Beta1Props = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializePriorityLevelConfigurationSpecV1Beta1(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type PriorityLevelConfigurationListV1Beta1Props = {
    readonly items: Array<PriorityLevelConfigurationV1Beta1Props>;
    readonly metadata?: ListMeta;
};

export type SerializedPriorityLevelConfigurationListV1Beta1Props = {
    items: Array<SerializedPriorityLevelConfigurationV1Beta1>;
    metadata?: SerializedListMeta;
};

export function serializePriorityLevelConfigurationListV1Beta1Props(
    options: undefined
): undefined;
export function serializePriorityLevelConfigurationListV1Beta1Props(
    options: PriorityLevelConfigurationListV1Beta1Props
): SerializedPriorityLevelConfigurationListV1Beta1Props;
export function serializePriorityLevelConfigurationListV1Beta1Props(
    options: PriorityLevelConfigurationListV1Beta1Props | undefined
): SerializedPriorityLevelConfigurationListV1Beta1Props | undefined;
export function serializePriorityLevelConfigurationListV1Beta1Props(
    options: PriorityLevelConfigurationListV1Beta1Props | undefined
): SerializedPriorityLevelConfigurationListV1Beta1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPriorityLevelConfigurationListV1Beta1Props = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => PriorityLevelConfigurationV1Beta1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type IngressProps = {
    readonly metadata?: ObjectMeta;
    readonly spec?: IngressSpec;
};

export type SerializedIngressProps = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedIngressSpec;
};

export function serializeIngressProps(options: undefined): undefined;
export function serializeIngressProps(
    options: IngressProps
): SerializedIngressProps;
export function serializeIngressProps(
    options: IngressProps | undefined
): SerializedIngressProps | undefined;
export function serializeIngressProps(
    options: IngressProps | undefined
): SerializedIngressProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedIngressProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeIngressSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type IngressClassProps = {
    readonly metadata?: ObjectMeta;
    readonly spec?: IngressClassSpec;
};

export type SerializedIngressClassProps = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedIngressClassSpec;
};

export function serializeIngressClassProps(options: undefined): undefined;
export function serializeIngressClassProps(
    options: IngressClassProps
): SerializedIngressClassProps;
export function serializeIngressClassProps(
    options: IngressClassProps | undefined
): SerializedIngressClassProps | undefined;
export function serializeIngressClassProps(
    options: IngressClassProps | undefined
): SerializedIngressClassProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedIngressClassProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeIngressClassSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type IngressClassListProps = {
    readonly items: Array<IngressClassProps>;
    readonly metadata?: ListMeta;
};

export type SerializedIngressClassListProps = {
    items: Array<SerializedIngressClass>;
    metadata?: SerializedListMeta;
};

export function serializeIngressClassListProps(options: undefined): undefined;
export function serializeIngressClassListProps(
    options: IngressClassListProps
): SerializedIngressClassListProps;
export function serializeIngressClassListProps(
    options: IngressClassListProps | undefined
): SerializedIngressClassListProps | undefined;
export function serializeIngressClassListProps(
    options: IngressClassListProps | undefined
): SerializedIngressClassListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedIngressClassListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => IngressClass(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type IngressListProps = {
    readonly items: Array<IngressProps>;
    readonly metadata?: ListMeta;
};

export type SerializedIngressListProps = {
    items: Array<SerializedIngress>;
    metadata?: SerializedListMeta;
};

export function serializeIngressListProps(options: undefined): undefined;
export function serializeIngressListProps(
    options: IngressListProps
): SerializedIngressListProps;
export function serializeIngressListProps(
    options: IngressListProps | undefined
): SerializedIngressListProps | undefined;
export function serializeIngressListProps(
    options: IngressListProps | undefined
): SerializedIngressListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedIngressListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => Ingress(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type NetworkPolicyProps = {
    readonly metadata?: ObjectMeta;
    readonly spec?: NetworkPolicySpec;
};

export type SerializedNetworkPolicyProps = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedNetworkPolicySpec;
};

export function serializeNetworkPolicyProps(options: undefined): undefined;
export function serializeNetworkPolicyProps(
    options: NetworkPolicyProps
): SerializedNetworkPolicyProps;
export function serializeNetworkPolicyProps(
    options: NetworkPolicyProps | undefined
): SerializedNetworkPolicyProps | undefined;
export function serializeNetworkPolicyProps(
    options: NetworkPolicyProps | undefined
): SerializedNetworkPolicyProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedNetworkPolicyProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeNetworkPolicySpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type NetworkPolicyListProps = {
    readonly items: Array<NetworkPolicyProps>;
    readonly metadata?: ListMeta;
};

export type SerializedNetworkPolicyListProps = {
    items: Array<SerializedNetworkPolicy>;
    metadata?: SerializedListMeta;
};

export function serializeNetworkPolicyListProps(options: undefined): undefined;
export function serializeNetworkPolicyListProps(
    options: NetworkPolicyListProps
): SerializedNetworkPolicyListProps;
export function serializeNetworkPolicyListProps(
    options: NetworkPolicyListProps | undefined
): SerializedNetworkPolicyListProps | undefined;
export function serializeNetworkPolicyListProps(
    options: NetworkPolicyListProps | undefined
): SerializedNetworkPolicyListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedNetworkPolicyListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => NetworkPolicy(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type RuntimeClassProps = {
    readonly handler: string;
    readonly metadata?: ObjectMeta;
    readonly overhead?: Overhead;
    readonly scheduling?: Scheduling;
};

export type SerializedRuntimeClassProps = {
    handler: string;
    metadata?: SerializedObjectMeta;
    overhead?: SerializedOverhead;
    scheduling?: SerializedScheduling;
};

export function serializeRuntimeClassProps(options: undefined): undefined;
export function serializeRuntimeClassProps(
    options: RuntimeClassProps
): SerializedRuntimeClassProps;
export function serializeRuntimeClassProps(
    options: RuntimeClassProps | undefined
): SerializedRuntimeClassProps | undefined;
export function serializeRuntimeClassProps(
    options: RuntimeClassProps | undefined
): SerializedRuntimeClassProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRuntimeClassProps = {
        handler: options.handler,
        metadata: serializeObjectMeta(options.metadata),
        overhead: serializeOverhead(options.overhead),
        scheduling: serializeScheduling(options.scheduling),
    };

    return senchou.wrapTemplate(options, result);
}

export type RuntimeClassListProps = {
    readonly items: Array<RuntimeClassProps>;
    readonly metadata?: ListMeta;
};

export type SerializedRuntimeClassListProps = {
    items: Array<SerializedRuntimeClass>;
    metadata?: SerializedListMeta;
};

export function serializeRuntimeClassListProps(options: undefined): undefined;
export function serializeRuntimeClassListProps(
    options: RuntimeClassListProps
): SerializedRuntimeClassListProps;
export function serializeRuntimeClassListProps(
    options: RuntimeClassListProps | undefined
): SerializedRuntimeClassListProps | undefined;
export function serializeRuntimeClassListProps(
    options: RuntimeClassListProps | undefined
): SerializedRuntimeClassListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRuntimeClassListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => RuntimeClass(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type RuntimeClassV1Alpha1Props = {
    readonly metadata?: ObjectMeta;
    readonly spec: RuntimeClassSpecV1Alpha1;
};

export type SerializedRuntimeClassV1Alpha1Props = {
    metadata?: SerializedObjectMeta;
    spec: SerializedRuntimeClassSpecV1Alpha1;
};

export function serializeRuntimeClassV1Alpha1Props(
    options: undefined
): undefined;
export function serializeRuntimeClassV1Alpha1Props(
    options: RuntimeClassV1Alpha1Props
): SerializedRuntimeClassV1Alpha1Props;
export function serializeRuntimeClassV1Alpha1Props(
    options: RuntimeClassV1Alpha1Props | undefined
): SerializedRuntimeClassV1Alpha1Props | undefined;
export function serializeRuntimeClassV1Alpha1Props(
    options: RuntimeClassV1Alpha1Props | undefined
): SerializedRuntimeClassV1Alpha1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRuntimeClassV1Alpha1Props = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeRuntimeClassSpecV1Alpha1(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type RuntimeClassListV1Alpha1Props = {
    readonly items: Array<RuntimeClassV1Alpha1Props>;
    readonly metadata?: ListMeta;
};

export type SerializedRuntimeClassListV1Alpha1Props = {
    items: Array<SerializedRuntimeClassV1Alpha1>;
    metadata?: SerializedListMeta;
};

export function serializeRuntimeClassListV1Alpha1Props(
    options: undefined
): undefined;
export function serializeRuntimeClassListV1Alpha1Props(
    options: RuntimeClassListV1Alpha1Props
): SerializedRuntimeClassListV1Alpha1Props;
export function serializeRuntimeClassListV1Alpha1Props(
    options: RuntimeClassListV1Alpha1Props | undefined
): SerializedRuntimeClassListV1Alpha1Props | undefined;
export function serializeRuntimeClassListV1Alpha1Props(
    options: RuntimeClassListV1Alpha1Props | undefined
): SerializedRuntimeClassListV1Alpha1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRuntimeClassListV1Alpha1Props = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => RuntimeClassV1Alpha1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type RuntimeClassV1Beta1Props = {
    readonly handler: string;
    readonly metadata?: ObjectMeta;
    readonly overhead?: OverheadV1Beta1;
    readonly scheduling?: SchedulingV1Beta1;
};

export type SerializedRuntimeClassV1Beta1Props = {
    handler: string;
    metadata?: SerializedObjectMeta;
    overhead?: SerializedOverheadV1Beta1;
    scheduling?: SerializedSchedulingV1Beta1;
};

export function serializeRuntimeClassV1Beta1Props(
    options: undefined
): undefined;
export function serializeRuntimeClassV1Beta1Props(
    options: RuntimeClassV1Beta1Props
): SerializedRuntimeClassV1Beta1Props;
export function serializeRuntimeClassV1Beta1Props(
    options: RuntimeClassV1Beta1Props | undefined
): SerializedRuntimeClassV1Beta1Props | undefined;
export function serializeRuntimeClassV1Beta1Props(
    options: RuntimeClassV1Beta1Props | undefined
): SerializedRuntimeClassV1Beta1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRuntimeClassV1Beta1Props = {
        handler: options.handler,
        metadata: serializeObjectMeta(options.metadata),
        overhead: serializeOverheadV1Beta1(options.overhead),
        scheduling: serializeSchedulingV1Beta1(options.scheduling),
    };

    return senchou.wrapTemplate(options, result);
}

export type RuntimeClassListV1Beta1Props = {
    readonly items: Array<RuntimeClassV1Beta1Props>;
    readonly metadata?: ListMeta;
};

export type SerializedRuntimeClassListV1Beta1Props = {
    items: Array<SerializedRuntimeClassV1Beta1>;
    metadata?: SerializedListMeta;
};

export function serializeRuntimeClassListV1Beta1Props(
    options: undefined
): undefined;
export function serializeRuntimeClassListV1Beta1Props(
    options: RuntimeClassListV1Beta1Props
): SerializedRuntimeClassListV1Beta1Props;
export function serializeRuntimeClassListV1Beta1Props(
    options: RuntimeClassListV1Beta1Props | undefined
): SerializedRuntimeClassListV1Beta1Props | undefined;
export function serializeRuntimeClassListV1Beta1Props(
    options: RuntimeClassListV1Beta1Props | undefined
): SerializedRuntimeClassListV1Beta1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRuntimeClassListV1Beta1Props = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => RuntimeClassV1Beta1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type EvictionProps = {
    readonly deleteOptions?: DeleteOptions;
    readonly metadata?: ObjectMeta;
};

export type SerializedEvictionProps = {
    deleteOptions?: SerializedDeleteOptions;
    metadata?: SerializedObjectMeta;
};

export function serializeEvictionProps(options: undefined): undefined;
export function serializeEvictionProps(
    options: EvictionProps
): SerializedEvictionProps;
export function serializeEvictionProps(
    options: EvictionProps | undefined
): SerializedEvictionProps | undefined;
export function serializeEvictionProps(
    options: EvictionProps | undefined
): SerializedEvictionProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEvictionProps = {
        deleteOptions: serializeDeleteOptions(options.deleteOptions),
        metadata: serializeObjectMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type PodDisruptionBudgetProps = {
    readonly metadata?: ObjectMeta;
    readonly spec?: PodDisruptionBudgetSpec;
};

export type SerializedPodDisruptionBudgetProps = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedPodDisruptionBudgetSpec;
};

export function serializePodDisruptionBudgetProps(
    options: undefined
): undefined;
export function serializePodDisruptionBudgetProps(
    options: PodDisruptionBudgetProps
): SerializedPodDisruptionBudgetProps;
export function serializePodDisruptionBudgetProps(
    options: PodDisruptionBudgetProps | undefined
): SerializedPodDisruptionBudgetProps | undefined;
export function serializePodDisruptionBudgetProps(
    options: PodDisruptionBudgetProps | undefined
): SerializedPodDisruptionBudgetProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPodDisruptionBudgetProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializePodDisruptionBudgetSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type PodDisruptionBudgetListProps = {
    readonly items: Array<PodDisruptionBudgetProps>;
    readonly metadata?: ListMeta;
};

export type SerializedPodDisruptionBudgetListProps = {
    items: Array<SerializedPodDisruptionBudget>;
    metadata?: SerializedListMeta;
};

export function serializePodDisruptionBudgetListProps(
    options: undefined
): undefined;
export function serializePodDisruptionBudgetListProps(
    options: PodDisruptionBudgetListProps
): SerializedPodDisruptionBudgetListProps;
export function serializePodDisruptionBudgetListProps(
    options: PodDisruptionBudgetListProps | undefined
): SerializedPodDisruptionBudgetListProps | undefined;
export function serializePodDisruptionBudgetListProps(
    options: PodDisruptionBudgetListProps | undefined
): SerializedPodDisruptionBudgetListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPodDisruptionBudgetListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => PodDisruptionBudget(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type PodDisruptionBudgetV1Beta1Props = {
    readonly metadata?: ObjectMeta;
    readonly spec?: PodDisruptionBudgetSpecV1Beta1;
};

export type SerializedPodDisruptionBudgetV1Beta1Props = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedPodDisruptionBudgetSpecV1Beta1;
};

export function serializePodDisruptionBudgetV1Beta1Props(
    options: undefined
): undefined;
export function serializePodDisruptionBudgetV1Beta1Props(
    options: PodDisruptionBudgetV1Beta1Props
): SerializedPodDisruptionBudgetV1Beta1Props;
export function serializePodDisruptionBudgetV1Beta1Props(
    options: PodDisruptionBudgetV1Beta1Props | undefined
): SerializedPodDisruptionBudgetV1Beta1Props | undefined;
export function serializePodDisruptionBudgetV1Beta1Props(
    options: PodDisruptionBudgetV1Beta1Props | undefined
): SerializedPodDisruptionBudgetV1Beta1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPodDisruptionBudgetV1Beta1Props = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializePodDisruptionBudgetSpecV1Beta1(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type PodDisruptionBudgetListV1Beta1Props = {
    readonly items: Array<PodDisruptionBudgetV1Beta1Props>;
    readonly metadata?: ListMeta;
};

export type SerializedPodDisruptionBudgetListV1Beta1Props = {
    items: Array<SerializedPodDisruptionBudgetV1Beta1>;
    metadata?: SerializedListMeta;
};

export function serializePodDisruptionBudgetListV1Beta1Props(
    options: undefined
): undefined;
export function serializePodDisruptionBudgetListV1Beta1Props(
    options: PodDisruptionBudgetListV1Beta1Props
): SerializedPodDisruptionBudgetListV1Beta1Props;
export function serializePodDisruptionBudgetListV1Beta1Props(
    options: PodDisruptionBudgetListV1Beta1Props | undefined
): SerializedPodDisruptionBudgetListV1Beta1Props | undefined;
export function serializePodDisruptionBudgetListV1Beta1Props(
    options: PodDisruptionBudgetListV1Beta1Props | undefined
): SerializedPodDisruptionBudgetListV1Beta1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPodDisruptionBudgetListV1Beta1Props = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => PodDisruptionBudgetV1Beta1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type PodSecurityPolicyV1Beta1Props = {
    readonly metadata?: ObjectMeta;
    readonly spec?: PodSecurityPolicySpecV1Beta1;
};

export type SerializedPodSecurityPolicyV1Beta1Props = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedPodSecurityPolicySpecV1Beta1;
};

export function serializePodSecurityPolicyV1Beta1Props(
    options: undefined
): undefined;
export function serializePodSecurityPolicyV1Beta1Props(
    options: PodSecurityPolicyV1Beta1Props
): SerializedPodSecurityPolicyV1Beta1Props;
export function serializePodSecurityPolicyV1Beta1Props(
    options: PodSecurityPolicyV1Beta1Props | undefined
): SerializedPodSecurityPolicyV1Beta1Props | undefined;
export function serializePodSecurityPolicyV1Beta1Props(
    options: PodSecurityPolicyV1Beta1Props | undefined
): SerializedPodSecurityPolicyV1Beta1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPodSecurityPolicyV1Beta1Props = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializePodSecurityPolicySpecV1Beta1(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type PodSecurityPolicyListV1Beta1Props = {
    readonly items: Array<PodSecurityPolicyV1Beta1Props>;
    readonly metadata?: ListMeta;
};

export type SerializedPodSecurityPolicyListV1Beta1Props = {
    items: Array<SerializedPodSecurityPolicyV1Beta1>;
    metadata?: SerializedListMeta;
};

export function serializePodSecurityPolicyListV1Beta1Props(
    options: undefined
): undefined;
export function serializePodSecurityPolicyListV1Beta1Props(
    options: PodSecurityPolicyListV1Beta1Props
): SerializedPodSecurityPolicyListV1Beta1Props;
export function serializePodSecurityPolicyListV1Beta1Props(
    options: PodSecurityPolicyListV1Beta1Props | undefined
): SerializedPodSecurityPolicyListV1Beta1Props | undefined;
export function serializePodSecurityPolicyListV1Beta1Props(
    options: PodSecurityPolicyListV1Beta1Props | undefined
): SerializedPodSecurityPolicyListV1Beta1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPodSecurityPolicyListV1Beta1Props = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => PodSecurityPolicyV1Beta1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type ClusterRoleProps = {
    readonly aggregationRule?: AggregationRule;
    readonly metadata?: ObjectMeta;
    readonly rules?: Array<PolicyRule>;
};

export type SerializedClusterRoleProps = {
    aggregationRule?: SerializedAggregationRule;
    metadata?: SerializedObjectMeta;
    rules?: Array<SerializedPolicyRule>;
};

export function serializeClusterRoleProps(options: undefined): undefined;
export function serializeClusterRoleProps(
    options: ClusterRoleProps
): SerializedClusterRoleProps;
export function serializeClusterRoleProps(
    options: ClusterRoleProps | undefined
): SerializedClusterRoleProps | undefined;
export function serializeClusterRoleProps(
    options: ClusterRoleProps | undefined
): SerializedClusterRoleProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedClusterRoleProps = {
        aggregationRule: serializeAggregationRule(options.aggregationRule),
        metadata: serializeObjectMeta(options.metadata),
        rules: prelude.serialize(options.rules, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializePolicyRule(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type ClusterRoleBindingProps = {
    readonly metadata?: ObjectMeta;
    readonly roleRef: RoleRef;
    readonly subjects?: Array<Subject>;
};

export type SerializedClusterRoleBindingProps = {
    metadata?: SerializedObjectMeta;
    roleRef: SerializedRoleRef;
    subjects?: Array<SerializedSubject>;
};

export function serializeClusterRoleBindingProps(options: undefined): undefined;
export function serializeClusterRoleBindingProps(
    options: ClusterRoleBindingProps
): SerializedClusterRoleBindingProps;
export function serializeClusterRoleBindingProps(
    options: ClusterRoleBindingProps | undefined
): SerializedClusterRoleBindingProps | undefined;
export function serializeClusterRoleBindingProps(
    options: ClusterRoleBindingProps | undefined
): SerializedClusterRoleBindingProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedClusterRoleBindingProps = {
        metadata: serializeObjectMeta(options.metadata),
        roleRef: serializeRoleRef(options.roleRef),
        subjects: prelude.serialize(options.subjects, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeSubject(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type ClusterRoleBindingListProps = {
    readonly items: Array<ClusterRoleBindingProps>;
    readonly metadata?: ListMeta;
};

export type SerializedClusterRoleBindingListProps = {
    items: Array<SerializedClusterRoleBinding>;
    metadata?: SerializedListMeta;
};

export function serializeClusterRoleBindingListProps(
    options: undefined
): undefined;
export function serializeClusterRoleBindingListProps(
    options: ClusterRoleBindingListProps
): SerializedClusterRoleBindingListProps;
export function serializeClusterRoleBindingListProps(
    options: ClusterRoleBindingListProps | undefined
): SerializedClusterRoleBindingListProps | undefined;
export function serializeClusterRoleBindingListProps(
    options: ClusterRoleBindingListProps | undefined
): SerializedClusterRoleBindingListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedClusterRoleBindingListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => ClusterRoleBinding(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type ClusterRoleListProps = {
    readonly items: Array<ClusterRoleProps>;
    readonly metadata?: ListMeta;
};

export type SerializedClusterRoleListProps = {
    items: Array<SerializedClusterRole>;
    metadata?: SerializedListMeta;
};

export function serializeClusterRoleListProps(options: undefined): undefined;
export function serializeClusterRoleListProps(
    options: ClusterRoleListProps
): SerializedClusterRoleListProps;
export function serializeClusterRoleListProps(
    options: ClusterRoleListProps | undefined
): SerializedClusterRoleListProps | undefined;
export function serializeClusterRoleListProps(
    options: ClusterRoleListProps | undefined
): SerializedClusterRoleListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedClusterRoleListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => ClusterRole(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type RoleProps = {
    readonly metadata?: ObjectMeta;
    readonly rules?: Array<PolicyRule>;
};

export type SerializedRoleProps = {
    metadata?: SerializedObjectMeta;
    rules?: Array<SerializedPolicyRule>;
};

export function serializeRoleProps(options: undefined): undefined;
export function serializeRoleProps(options: RoleProps): SerializedRoleProps;
export function serializeRoleProps(
    options: RoleProps | undefined
): SerializedRoleProps | undefined;
export function serializeRoleProps(
    options: RoleProps | undefined
): SerializedRoleProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRoleProps = {
        metadata: serializeObjectMeta(options.metadata),
        rules: prelude.serialize(options.rules, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializePolicyRule(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type RoleBindingProps = {
    readonly metadata?: ObjectMeta;
    readonly roleRef: RoleRef;
    readonly subjects?: Array<Subject>;
};

export type SerializedRoleBindingProps = {
    metadata?: SerializedObjectMeta;
    roleRef: SerializedRoleRef;
    subjects?: Array<SerializedSubject>;
};

export function serializeRoleBindingProps(options: undefined): undefined;
export function serializeRoleBindingProps(
    options: RoleBindingProps
): SerializedRoleBindingProps;
export function serializeRoleBindingProps(
    options: RoleBindingProps | undefined
): SerializedRoleBindingProps | undefined;
export function serializeRoleBindingProps(
    options: RoleBindingProps | undefined
): SerializedRoleBindingProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRoleBindingProps = {
        metadata: serializeObjectMeta(options.metadata),
        roleRef: serializeRoleRef(options.roleRef),
        subjects: prelude.serialize(options.subjects, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeSubject(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type RoleBindingListProps = {
    readonly items: Array<RoleBindingProps>;
    readonly metadata?: ListMeta;
};

export type SerializedRoleBindingListProps = {
    items: Array<SerializedRoleBinding>;
    metadata?: SerializedListMeta;
};

export function serializeRoleBindingListProps(options: undefined): undefined;
export function serializeRoleBindingListProps(
    options: RoleBindingListProps
): SerializedRoleBindingListProps;
export function serializeRoleBindingListProps(
    options: RoleBindingListProps | undefined
): SerializedRoleBindingListProps | undefined;
export function serializeRoleBindingListProps(
    options: RoleBindingListProps | undefined
): SerializedRoleBindingListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRoleBindingListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => RoleBinding(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type RoleListProps = {
    readonly items: Array<RoleProps>;
    readonly metadata?: ListMeta;
};

export type SerializedRoleListProps = {
    items: Array<SerializedRole>;
    metadata?: SerializedListMeta;
};

export function serializeRoleListProps(options: undefined): undefined;
export function serializeRoleListProps(
    options: RoleListProps
): SerializedRoleListProps;
export function serializeRoleListProps(
    options: RoleListProps | undefined
): SerializedRoleListProps | undefined;
export function serializeRoleListProps(
    options: RoleListProps | undefined
): SerializedRoleListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRoleListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => Role(item)).filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type ClusterRoleV1Alpha1Props = {
    readonly aggregationRule?: AggregationRuleV1Alpha1;
    readonly metadata?: ObjectMeta;
    readonly rules?: Array<PolicyRuleV1Alpha1>;
};

export type SerializedClusterRoleV1Alpha1Props = {
    aggregationRule?: SerializedAggregationRuleV1Alpha1;
    metadata?: SerializedObjectMeta;
    rules?: Array<SerializedPolicyRuleV1Alpha1>;
};

export function serializeClusterRoleV1Alpha1Props(
    options: undefined
): undefined;
export function serializeClusterRoleV1Alpha1Props(
    options: ClusterRoleV1Alpha1Props
): SerializedClusterRoleV1Alpha1Props;
export function serializeClusterRoleV1Alpha1Props(
    options: ClusterRoleV1Alpha1Props | undefined
): SerializedClusterRoleV1Alpha1Props | undefined;
export function serializeClusterRoleV1Alpha1Props(
    options: ClusterRoleV1Alpha1Props | undefined
): SerializedClusterRoleV1Alpha1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedClusterRoleV1Alpha1Props = {
        aggregationRule: serializeAggregationRuleV1Alpha1(
            options.aggregationRule
        ),
        metadata: serializeObjectMeta(options.metadata),
        rules: prelude.serialize(options.rules, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializePolicyRuleV1Alpha1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type ClusterRoleBindingV1Alpha1Props = {
    readonly metadata?: ObjectMeta;
    readonly roleRef: RoleRefV1Alpha1;
    readonly subjects?: Array<SubjectV1Alpha1>;
};

export type SerializedClusterRoleBindingV1Alpha1Props = {
    metadata?: SerializedObjectMeta;
    roleRef: SerializedRoleRefV1Alpha1;
    subjects?: Array<SerializedSubjectV1Alpha1>;
};

export function serializeClusterRoleBindingV1Alpha1Props(
    options: undefined
): undefined;
export function serializeClusterRoleBindingV1Alpha1Props(
    options: ClusterRoleBindingV1Alpha1Props
): SerializedClusterRoleBindingV1Alpha1Props;
export function serializeClusterRoleBindingV1Alpha1Props(
    options: ClusterRoleBindingV1Alpha1Props | undefined
): SerializedClusterRoleBindingV1Alpha1Props | undefined;
export function serializeClusterRoleBindingV1Alpha1Props(
    options: ClusterRoleBindingV1Alpha1Props | undefined
): SerializedClusterRoleBindingV1Alpha1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedClusterRoleBindingV1Alpha1Props = {
        metadata: serializeObjectMeta(options.metadata),
        roleRef: serializeRoleRefV1Alpha1(options.roleRef),
        subjects: prelude.serialize(options.subjects, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeSubjectV1Alpha1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type ClusterRoleBindingListV1Alpha1Props = {
    readonly items: Array<ClusterRoleBindingV1Alpha1Props>;
    readonly metadata?: ListMeta;
};

export type SerializedClusterRoleBindingListV1Alpha1Props = {
    items: Array<SerializedClusterRoleBindingV1Alpha1>;
    metadata?: SerializedListMeta;
};

export function serializeClusterRoleBindingListV1Alpha1Props(
    options: undefined
): undefined;
export function serializeClusterRoleBindingListV1Alpha1Props(
    options: ClusterRoleBindingListV1Alpha1Props
): SerializedClusterRoleBindingListV1Alpha1Props;
export function serializeClusterRoleBindingListV1Alpha1Props(
    options: ClusterRoleBindingListV1Alpha1Props | undefined
): SerializedClusterRoleBindingListV1Alpha1Props | undefined;
export function serializeClusterRoleBindingListV1Alpha1Props(
    options: ClusterRoleBindingListV1Alpha1Props | undefined
): SerializedClusterRoleBindingListV1Alpha1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedClusterRoleBindingListV1Alpha1Props = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => ClusterRoleBindingV1Alpha1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type ClusterRoleListV1Alpha1Props = {
    readonly items: Array<ClusterRoleV1Alpha1Props>;
    readonly metadata?: ListMeta;
};

export type SerializedClusterRoleListV1Alpha1Props = {
    items: Array<SerializedClusterRoleV1Alpha1>;
    metadata?: SerializedListMeta;
};

export function serializeClusterRoleListV1Alpha1Props(
    options: undefined
): undefined;
export function serializeClusterRoleListV1Alpha1Props(
    options: ClusterRoleListV1Alpha1Props
): SerializedClusterRoleListV1Alpha1Props;
export function serializeClusterRoleListV1Alpha1Props(
    options: ClusterRoleListV1Alpha1Props | undefined
): SerializedClusterRoleListV1Alpha1Props | undefined;
export function serializeClusterRoleListV1Alpha1Props(
    options: ClusterRoleListV1Alpha1Props | undefined
): SerializedClusterRoleListV1Alpha1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedClusterRoleListV1Alpha1Props = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => ClusterRoleV1Alpha1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type RoleV1Alpha1Props = {
    readonly metadata?: ObjectMeta;
    readonly rules?: Array<PolicyRuleV1Alpha1>;
};

export type SerializedRoleV1Alpha1Props = {
    metadata?: SerializedObjectMeta;
    rules?: Array<SerializedPolicyRuleV1Alpha1>;
};

export function serializeRoleV1Alpha1Props(options: undefined): undefined;
export function serializeRoleV1Alpha1Props(
    options: RoleV1Alpha1Props
): SerializedRoleV1Alpha1Props;
export function serializeRoleV1Alpha1Props(
    options: RoleV1Alpha1Props | undefined
): SerializedRoleV1Alpha1Props | undefined;
export function serializeRoleV1Alpha1Props(
    options: RoleV1Alpha1Props | undefined
): SerializedRoleV1Alpha1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRoleV1Alpha1Props = {
        metadata: serializeObjectMeta(options.metadata),
        rules: prelude.serialize(options.rules, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializePolicyRuleV1Alpha1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type RoleBindingV1Alpha1Props = {
    readonly metadata?: ObjectMeta;
    readonly roleRef: RoleRefV1Alpha1;
    readonly subjects?: Array<SubjectV1Alpha1>;
};

export type SerializedRoleBindingV1Alpha1Props = {
    metadata?: SerializedObjectMeta;
    roleRef: SerializedRoleRefV1Alpha1;
    subjects?: Array<SerializedSubjectV1Alpha1>;
};

export function serializeRoleBindingV1Alpha1Props(
    options: undefined
): undefined;
export function serializeRoleBindingV1Alpha1Props(
    options: RoleBindingV1Alpha1Props
): SerializedRoleBindingV1Alpha1Props;
export function serializeRoleBindingV1Alpha1Props(
    options: RoleBindingV1Alpha1Props | undefined
): SerializedRoleBindingV1Alpha1Props | undefined;
export function serializeRoleBindingV1Alpha1Props(
    options: RoleBindingV1Alpha1Props | undefined
): SerializedRoleBindingV1Alpha1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRoleBindingV1Alpha1Props = {
        metadata: serializeObjectMeta(options.metadata),
        roleRef: serializeRoleRefV1Alpha1(options.roleRef),
        subjects: prelude.serialize(options.subjects, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeSubjectV1Alpha1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type RoleBindingListV1Alpha1Props = {
    readonly items: Array<RoleBindingV1Alpha1Props>;
    readonly metadata?: ListMeta;
};

export type SerializedRoleBindingListV1Alpha1Props = {
    items: Array<SerializedRoleBindingV1Alpha1>;
    metadata?: SerializedListMeta;
};

export function serializeRoleBindingListV1Alpha1Props(
    options: undefined
): undefined;
export function serializeRoleBindingListV1Alpha1Props(
    options: RoleBindingListV1Alpha1Props
): SerializedRoleBindingListV1Alpha1Props;
export function serializeRoleBindingListV1Alpha1Props(
    options: RoleBindingListV1Alpha1Props | undefined
): SerializedRoleBindingListV1Alpha1Props | undefined;
export function serializeRoleBindingListV1Alpha1Props(
    options: RoleBindingListV1Alpha1Props | undefined
): SerializedRoleBindingListV1Alpha1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRoleBindingListV1Alpha1Props = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => RoleBindingV1Alpha1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type RoleListV1Alpha1Props = {
    readonly items: Array<RoleV1Alpha1Props>;
    readonly metadata?: ListMeta;
};

export type SerializedRoleListV1Alpha1Props = {
    items: Array<SerializedRoleV1Alpha1>;
    metadata?: SerializedListMeta;
};

export function serializeRoleListV1Alpha1Props(options: undefined): undefined;
export function serializeRoleListV1Alpha1Props(
    options: RoleListV1Alpha1Props
): SerializedRoleListV1Alpha1Props;
export function serializeRoleListV1Alpha1Props(
    options: RoleListV1Alpha1Props | undefined
): SerializedRoleListV1Alpha1Props | undefined;
export function serializeRoleListV1Alpha1Props(
    options: RoleListV1Alpha1Props | undefined
): SerializedRoleListV1Alpha1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRoleListV1Alpha1Props = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => RoleV1Alpha1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type PriorityClassProps = {
    readonly description?: string;
    readonly globalDefault?: boolean;
    readonly metadata?: ObjectMeta;
    readonly preemptionPolicy?: string;
    readonly value: number;
};

export type SerializedPriorityClassProps = {
    description?: string;
    globalDefault?: boolean;
    metadata?: SerializedObjectMeta;
    preemptionPolicy?: string;
    value: number;
};

export function serializePriorityClassProps(options: undefined): undefined;
export function serializePriorityClassProps(
    options: PriorityClassProps
): SerializedPriorityClassProps;
export function serializePriorityClassProps(
    options: PriorityClassProps | undefined
): SerializedPriorityClassProps | undefined;
export function serializePriorityClassProps(
    options: PriorityClassProps | undefined
): SerializedPriorityClassProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPriorityClassProps = {
        description: options.description,
        globalDefault: options.globalDefault,
        metadata: serializeObjectMeta(options.metadata),
        preemptionPolicy: options.preemptionPolicy,
        value: options.value,
    };

    return senchou.wrapTemplate(options, result);
}

export type PriorityClassListProps = {
    readonly items: Array<PriorityClassProps>;
    readonly metadata?: ListMeta;
};

export type SerializedPriorityClassListProps = {
    items: Array<SerializedPriorityClass>;
    metadata?: SerializedListMeta;
};

export function serializePriorityClassListProps(options: undefined): undefined;
export function serializePriorityClassListProps(
    options: PriorityClassListProps
): SerializedPriorityClassListProps;
export function serializePriorityClassListProps(
    options: PriorityClassListProps | undefined
): SerializedPriorityClassListProps | undefined;
export function serializePriorityClassListProps(
    options: PriorityClassListProps | undefined
): SerializedPriorityClassListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPriorityClassListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => PriorityClass(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type PriorityClassV1Alpha1Props = {
    readonly description?: string;
    readonly globalDefault?: boolean;
    readonly metadata?: ObjectMeta;
    readonly preemptionPolicy?: string;
    readonly value: number;
};

export type SerializedPriorityClassV1Alpha1Props = {
    description?: string;
    globalDefault?: boolean;
    metadata?: SerializedObjectMeta;
    preemptionPolicy?: string;
    value: number;
};

export function serializePriorityClassV1Alpha1Props(
    options: undefined
): undefined;
export function serializePriorityClassV1Alpha1Props(
    options: PriorityClassV1Alpha1Props
): SerializedPriorityClassV1Alpha1Props;
export function serializePriorityClassV1Alpha1Props(
    options: PriorityClassV1Alpha1Props | undefined
): SerializedPriorityClassV1Alpha1Props | undefined;
export function serializePriorityClassV1Alpha1Props(
    options: PriorityClassV1Alpha1Props | undefined
): SerializedPriorityClassV1Alpha1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPriorityClassV1Alpha1Props = {
        description: options.description,
        globalDefault: options.globalDefault,
        metadata: serializeObjectMeta(options.metadata),
        preemptionPolicy: options.preemptionPolicy,
        value: options.value,
    };

    return senchou.wrapTemplate(options, result);
}

export type PriorityClassListV1Alpha1Props = {
    readonly items: Array<PriorityClassV1Alpha1Props>;
    readonly metadata?: ListMeta;
};

export type SerializedPriorityClassListV1Alpha1Props = {
    items: Array<SerializedPriorityClassV1Alpha1>;
    metadata?: SerializedListMeta;
};

export function serializePriorityClassListV1Alpha1Props(
    options: undefined
): undefined;
export function serializePriorityClassListV1Alpha1Props(
    options: PriorityClassListV1Alpha1Props
): SerializedPriorityClassListV1Alpha1Props;
export function serializePriorityClassListV1Alpha1Props(
    options: PriorityClassListV1Alpha1Props | undefined
): SerializedPriorityClassListV1Alpha1Props | undefined;
export function serializePriorityClassListV1Alpha1Props(
    options: PriorityClassListV1Alpha1Props | undefined
): SerializedPriorityClassListV1Alpha1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPriorityClassListV1Alpha1Props = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => PriorityClassV1Alpha1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type CSIDriverProps = {
    readonly metadata?: ObjectMeta;
    readonly spec: CSIDriverSpec;
};

export type SerializedCSIDriverProps = {
    metadata?: SerializedObjectMeta;
    spec: SerializedCSIDriverSpec;
};

export function serializeCSIDriverProps(options: undefined): undefined;
export function serializeCSIDriverProps(
    options: CSIDriverProps
): SerializedCSIDriverProps;
export function serializeCSIDriverProps(
    options: CSIDriverProps | undefined
): SerializedCSIDriverProps | undefined;
export function serializeCSIDriverProps(
    options: CSIDriverProps | undefined
): SerializedCSIDriverProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCSIDriverProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeCSIDriverSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type CSIDriverListProps = {
    readonly items: Array<CSIDriverProps>;
    readonly metadata?: ListMeta;
};

export type SerializedCSIDriverListProps = {
    items: Array<SerializedCSIDriver>;
    metadata?: SerializedListMeta;
};

export function serializeCSIDriverListProps(options: undefined): undefined;
export function serializeCSIDriverListProps(
    options: CSIDriverListProps
): SerializedCSIDriverListProps;
export function serializeCSIDriverListProps(
    options: CSIDriverListProps | undefined
): SerializedCSIDriverListProps | undefined;
export function serializeCSIDriverListProps(
    options: CSIDriverListProps | undefined
): SerializedCSIDriverListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCSIDriverListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => CSIDriver(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type CSINodeProps = {
    readonly metadata?: ObjectMeta;
    readonly spec: CSINodeSpec;
};

export type SerializedCSINodeProps = {
    metadata?: SerializedObjectMeta;
    spec: SerializedCSINodeSpec;
};

export function serializeCSINodeProps(options: undefined): undefined;
export function serializeCSINodeProps(
    options: CSINodeProps
): SerializedCSINodeProps;
export function serializeCSINodeProps(
    options: CSINodeProps | undefined
): SerializedCSINodeProps | undefined;
export function serializeCSINodeProps(
    options: CSINodeProps | undefined
): SerializedCSINodeProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCSINodeProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeCSINodeSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type CSINodeListProps = {
    readonly items: Array<CSINodeProps>;
    readonly metadata?: ListMeta;
};

export type SerializedCSINodeListProps = {
    items: Array<SerializedCSINode>;
    metadata?: SerializedListMeta;
};

export function serializeCSINodeListProps(options: undefined): undefined;
export function serializeCSINodeListProps(
    options: CSINodeListProps
): SerializedCSINodeListProps;
export function serializeCSINodeListProps(
    options: CSINodeListProps | undefined
): SerializedCSINodeListProps | undefined;
export function serializeCSINodeListProps(
    options: CSINodeListProps | undefined
): SerializedCSINodeListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCSINodeListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => CSINode(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type StorageClassProps = {
    readonly allowVolumeExpansion?: boolean;
    readonly allowedTopologies?: Array<TopologySelectorTerm>;
    readonly metadata?: ObjectMeta;
    readonly mountOptions?: Array<string>;
    readonly parameters?: { [key: string]: string };
    readonly provisioner: string;
    readonly reclaimPolicy?: string;
    readonly volumeBindingMode?: string;
};

export type SerializedStorageClassProps = {
    allowVolumeExpansion?: boolean;
    allowedTopologies?: Array<SerializedTopologySelectorTerm>;
    metadata?: SerializedObjectMeta;
    mountOptions?: Array<string>;
    parameters?: { [key: string]: string };
    provisioner: string;
    reclaimPolicy?: string;
    volumeBindingMode?: string;
};

export function serializeStorageClassProps(options: undefined): undefined;
export function serializeStorageClassProps(
    options: StorageClassProps
): SerializedStorageClassProps;
export function serializeStorageClassProps(
    options: StorageClassProps | undefined
): SerializedStorageClassProps | undefined;
export function serializeStorageClassProps(
    options: StorageClassProps | undefined
): SerializedStorageClassProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedStorageClassProps = {
        allowVolumeExpansion: options.allowVolumeExpansion,
        allowedTopologies: prelude.serialize(
            options.allowedTopologies,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items
                        .map((item) => serializeTopologySelectorTerm(item))
                        .filter(prelude.isNotUndefined)
                )
        ),
        metadata: serializeObjectMeta(options.metadata),
        mountOptions: prelude.serialize(options.mountOptions, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        parameters:
            options.parameters === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.parameters,
                      Object.entries(options.parameters).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        provisioner: options.provisioner,
        reclaimPolicy: options.reclaimPolicy,
        volumeBindingMode: options.volumeBindingMode,
    };

    return senchou.wrapTemplate(options, result);
}

export type StorageClassListProps = {
    readonly items: Array<StorageClassProps>;
    readonly metadata?: ListMeta;
};

export type SerializedStorageClassListProps = {
    items: Array<SerializedStorageClass>;
    metadata?: SerializedListMeta;
};

export function serializeStorageClassListProps(options: undefined): undefined;
export function serializeStorageClassListProps(
    options: StorageClassListProps
): SerializedStorageClassListProps;
export function serializeStorageClassListProps(
    options: StorageClassListProps | undefined
): SerializedStorageClassListProps | undefined;
export function serializeStorageClassListProps(
    options: StorageClassListProps | undefined
): SerializedStorageClassListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedStorageClassListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => StorageClass(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type VolumeAttachmentProps = {
    readonly metadata?: ObjectMeta;
    readonly spec: VolumeAttachmentSpec;
};

export type SerializedVolumeAttachmentProps = {
    metadata?: SerializedObjectMeta;
    spec: SerializedVolumeAttachmentSpec;
};

export function serializeVolumeAttachmentProps(options: undefined): undefined;
export function serializeVolumeAttachmentProps(
    options: VolumeAttachmentProps
): SerializedVolumeAttachmentProps;
export function serializeVolumeAttachmentProps(
    options: VolumeAttachmentProps | undefined
): SerializedVolumeAttachmentProps | undefined;
export function serializeVolumeAttachmentProps(
    options: VolumeAttachmentProps | undefined
): SerializedVolumeAttachmentProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedVolumeAttachmentProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeVolumeAttachmentSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type VolumeAttachmentListProps = {
    readonly items: Array<VolumeAttachmentProps>;
    readonly metadata?: ListMeta;
};

export type SerializedVolumeAttachmentListProps = {
    items: Array<SerializedVolumeAttachment>;
    metadata?: SerializedListMeta;
};

export function serializeVolumeAttachmentListProps(
    options: undefined
): undefined;
export function serializeVolumeAttachmentListProps(
    options: VolumeAttachmentListProps
): SerializedVolumeAttachmentListProps;
export function serializeVolumeAttachmentListProps(
    options: VolumeAttachmentListProps | undefined
): SerializedVolumeAttachmentListProps | undefined;
export function serializeVolumeAttachmentListProps(
    options: VolumeAttachmentListProps | undefined
): SerializedVolumeAttachmentListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedVolumeAttachmentListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => VolumeAttachment(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type CSIStorageCapacityV1Alpha1Props = {
    readonly capacity?: Quantity;
    readonly maximumVolumeSize?: Quantity;
    readonly metadata?: ObjectMeta;
    readonly nodeTopology?: LabelSelector;
    readonly storageClassName: string;
};

export type SerializedCSIStorageCapacityV1Alpha1Props = {
    capacity?: Quantity;
    maximumVolumeSize?: Quantity;
    metadata?: SerializedObjectMeta;
    nodeTopology?: SerializedLabelSelector;
    storageClassName: string;
};

export function serializeCSIStorageCapacityV1Alpha1Props(
    options: undefined
): undefined;
export function serializeCSIStorageCapacityV1Alpha1Props(
    options: CSIStorageCapacityV1Alpha1Props
): SerializedCSIStorageCapacityV1Alpha1Props;
export function serializeCSIStorageCapacityV1Alpha1Props(
    options: CSIStorageCapacityV1Alpha1Props | undefined
): SerializedCSIStorageCapacityV1Alpha1Props | undefined;
export function serializeCSIStorageCapacityV1Alpha1Props(
    options: CSIStorageCapacityV1Alpha1Props | undefined
): SerializedCSIStorageCapacityV1Alpha1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCSIStorageCapacityV1Alpha1Props = {
        capacity: options.capacity,
        maximumVolumeSize: options.maximumVolumeSize,
        metadata: serializeObjectMeta(options.metadata),
        nodeTopology: serializeLabelSelector(options.nodeTopology),
        storageClassName: options.storageClassName,
    };

    return senchou.wrapTemplate(options, result);
}

export type CSIStorageCapacityListV1Alpha1Props = {
    readonly items: Array<CSIStorageCapacityV1Alpha1Props>;
    readonly metadata?: ListMeta;
};

export type SerializedCSIStorageCapacityListV1Alpha1Props = {
    items: Array<SerializedCSIStorageCapacityV1Alpha1>;
    metadata?: SerializedListMeta;
};

export function serializeCSIStorageCapacityListV1Alpha1Props(
    options: undefined
): undefined;
export function serializeCSIStorageCapacityListV1Alpha1Props(
    options: CSIStorageCapacityListV1Alpha1Props
): SerializedCSIStorageCapacityListV1Alpha1Props;
export function serializeCSIStorageCapacityListV1Alpha1Props(
    options: CSIStorageCapacityListV1Alpha1Props | undefined
): SerializedCSIStorageCapacityListV1Alpha1Props | undefined;
export function serializeCSIStorageCapacityListV1Alpha1Props(
    options: CSIStorageCapacityListV1Alpha1Props | undefined
): SerializedCSIStorageCapacityListV1Alpha1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCSIStorageCapacityListV1Alpha1Props = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => CSIStorageCapacityV1Alpha1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type VolumeAttachmentV1Alpha1Props = {
    readonly metadata?: ObjectMeta;
    readonly spec: VolumeAttachmentSpecV1Alpha1;
};

export type SerializedVolumeAttachmentV1Alpha1Props = {
    metadata?: SerializedObjectMeta;
    spec: SerializedVolumeAttachmentSpecV1Alpha1;
};

export function serializeVolumeAttachmentV1Alpha1Props(
    options: undefined
): undefined;
export function serializeVolumeAttachmentV1Alpha1Props(
    options: VolumeAttachmentV1Alpha1Props
): SerializedVolumeAttachmentV1Alpha1Props;
export function serializeVolumeAttachmentV1Alpha1Props(
    options: VolumeAttachmentV1Alpha1Props | undefined
): SerializedVolumeAttachmentV1Alpha1Props | undefined;
export function serializeVolumeAttachmentV1Alpha1Props(
    options: VolumeAttachmentV1Alpha1Props | undefined
): SerializedVolumeAttachmentV1Alpha1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedVolumeAttachmentV1Alpha1Props = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeVolumeAttachmentSpecV1Alpha1(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type VolumeAttachmentListV1Alpha1Props = {
    readonly items: Array<VolumeAttachmentV1Alpha1Props>;
    readonly metadata?: ListMeta;
};

export type SerializedVolumeAttachmentListV1Alpha1Props = {
    items: Array<SerializedVolumeAttachmentV1Alpha1>;
    metadata?: SerializedListMeta;
};

export function serializeVolumeAttachmentListV1Alpha1Props(
    options: undefined
): undefined;
export function serializeVolumeAttachmentListV1Alpha1Props(
    options: VolumeAttachmentListV1Alpha1Props
): SerializedVolumeAttachmentListV1Alpha1Props;
export function serializeVolumeAttachmentListV1Alpha1Props(
    options: VolumeAttachmentListV1Alpha1Props | undefined
): SerializedVolumeAttachmentListV1Alpha1Props | undefined;
export function serializeVolumeAttachmentListV1Alpha1Props(
    options: VolumeAttachmentListV1Alpha1Props | undefined
): SerializedVolumeAttachmentListV1Alpha1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedVolumeAttachmentListV1Alpha1Props = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => VolumeAttachmentV1Alpha1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type CSIStorageCapacityV1Beta1Props = {
    readonly capacity?: Quantity;
    readonly maximumVolumeSize?: Quantity;
    readonly metadata?: ObjectMeta;
    readonly nodeTopology?: LabelSelector;
    readonly storageClassName: string;
};

export type SerializedCSIStorageCapacityV1Beta1Props = {
    capacity?: Quantity;
    maximumVolumeSize?: Quantity;
    metadata?: SerializedObjectMeta;
    nodeTopology?: SerializedLabelSelector;
    storageClassName: string;
};

export function serializeCSIStorageCapacityV1Beta1Props(
    options: undefined
): undefined;
export function serializeCSIStorageCapacityV1Beta1Props(
    options: CSIStorageCapacityV1Beta1Props
): SerializedCSIStorageCapacityV1Beta1Props;
export function serializeCSIStorageCapacityV1Beta1Props(
    options: CSIStorageCapacityV1Beta1Props | undefined
): SerializedCSIStorageCapacityV1Beta1Props | undefined;
export function serializeCSIStorageCapacityV1Beta1Props(
    options: CSIStorageCapacityV1Beta1Props | undefined
): SerializedCSIStorageCapacityV1Beta1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCSIStorageCapacityV1Beta1Props = {
        capacity: options.capacity,
        maximumVolumeSize: options.maximumVolumeSize,
        metadata: serializeObjectMeta(options.metadata),
        nodeTopology: serializeLabelSelector(options.nodeTopology),
        storageClassName: options.storageClassName,
    };

    return senchou.wrapTemplate(options, result);
}

export type CSIStorageCapacityListV1Beta1Props = {
    readonly items: Array<CSIStorageCapacityV1Beta1Props>;
    readonly metadata?: ListMeta;
};

export type SerializedCSIStorageCapacityListV1Beta1Props = {
    items: Array<SerializedCSIStorageCapacityV1Beta1>;
    metadata?: SerializedListMeta;
};

export function serializeCSIStorageCapacityListV1Beta1Props(
    options: undefined
): undefined;
export function serializeCSIStorageCapacityListV1Beta1Props(
    options: CSIStorageCapacityListV1Beta1Props
): SerializedCSIStorageCapacityListV1Beta1Props;
export function serializeCSIStorageCapacityListV1Beta1Props(
    options: CSIStorageCapacityListV1Beta1Props | undefined
): SerializedCSIStorageCapacityListV1Beta1Props | undefined;
export function serializeCSIStorageCapacityListV1Beta1Props(
    options: CSIStorageCapacityListV1Beta1Props | undefined
): SerializedCSIStorageCapacityListV1Beta1Props | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCSIStorageCapacityListV1Beta1Props = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => CSIStorageCapacityV1Beta1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type CustomResourceDefinitionProps = {
    readonly metadata?: ObjectMeta;
    readonly spec: CustomResourceDefinitionSpec;
};

export type SerializedCustomResourceDefinitionProps = {
    metadata?: SerializedObjectMeta;
    spec: SerializedCustomResourceDefinitionSpec;
};

export function serializeCustomResourceDefinitionProps(
    options: undefined
): undefined;
export function serializeCustomResourceDefinitionProps(
    options: CustomResourceDefinitionProps
): SerializedCustomResourceDefinitionProps;
export function serializeCustomResourceDefinitionProps(
    options: CustomResourceDefinitionProps | undefined
): SerializedCustomResourceDefinitionProps | undefined;
export function serializeCustomResourceDefinitionProps(
    options: CustomResourceDefinitionProps | undefined
): SerializedCustomResourceDefinitionProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCustomResourceDefinitionProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeCustomResourceDefinitionSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type CustomResourceDefinitionListProps = {
    readonly items: Array<CustomResourceDefinitionProps>;
    readonly metadata?: ListMeta;
};

export type SerializedCustomResourceDefinitionListProps = {
    items: Array<SerializedCustomResourceDefinition>;
    metadata?: SerializedListMeta;
};

export function serializeCustomResourceDefinitionListProps(
    options: undefined
): undefined;
export function serializeCustomResourceDefinitionListProps(
    options: CustomResourceDefinitionListProps
): SerializedCustomResourceDefinitionListProps;
export function serializeCustomResourceDefinitionListProps(
    options: CustomResourceDefinitionListProps | undefined
): SerializedCustomResourceDefinitionListProps | undefined;
export function serializeCustomResourceDefinitionListProps(
    options: CustomResourceDefinitionListProps | undefined
): SerializedCustomResourceDefinitionListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCustomResourceDefinitionListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => CustomResourceDefinition(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type StatusProps = {
    readonly code?: number;
    readonly details?: StatusDetails;
    readonly message?: string;
    readonly metadata?: ListMeta;
    readonly reason?: string;
};

export type SerializedStatusProps = {
    code?: number;
    details?: SerializedStatusDetails;
    message?: string;
    metadata?: SerializedListMeta;
    reason?: string;
};

export function serializeStatusProps(options: undefined): undefined;
export function serializeStatusProps(
    options: StatusProps
): SerializedStatusProps;
export function serializeStatusProps(
    options: StatusProps | undefined
): SerializedStatusProps | undefined;
export function serializeStatusProps(
    options: StatusProps | undefined
): SerializedStatusProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedStatusProps = {
        code: options.code,
        details: serializeStatusDetails(options.details),
        message: options.message,
        metadata: serializeListMeta(options.metadata),
        reason: options.reason,
    };

    return senchou.wrapTemplate(options, result);
}

export type APIServiceProps = {
    readonly metadata?: ObjectMeta;
    readonly spec?: APIServiceSpec;
};

export type SerializedAPIServiceProps = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedAPIServiceSpec;
};

export function serializeAPIServiceProps(options: undefined): undefined;
export function serializeAPIServiceProps(
    options: APIServiceProps
): SerializedAPIServiceProps;
export function serializeAPIServiceProps(
    options: APIServiceProps | undefined
): SerializedAPIServiceProps | undefined;
export function serializeAPIServiceProps(
    options: APIServiceProps | undefined
): SerializedAPIServiceProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedAPIServiceProps = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeAPIServiceSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type APIServiceListProps = {
    readonly items: Array<APIServiceProps>;
    readonly metadata?: ListMeta;
};

export type SerializedAPIServiceListProps = {
    items: Array<SerializedAPIService>;
    metadata?: SerializedListMeta;
};

export function serializeAPIServiceListProps(options: undefined): undefined;
export function serializeAPIServiceListProps(
    options: APIServiceListProps
): SerializedAPIServiceListProps;
export function serializeAPIServiceListProps(
    options: APIServiceListProps | undefined
): SerializedAPIServiceListProps | undefined;
export function serializeAPIServiceListProps(
    options: APIServiceListProps | undefined
): SerializedAPIServiceListProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedAPIServiceListProps = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => APIService(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        metadata: serializeListMeta(options.metadata),
    };

    return senchou.wrapTemplate(options, result);
}

export type ObjectMeta = {
    readonly annotations?: { [key: string]: string };
    readonly clusterName?: string;
    readonly creationTimestamp?: Date;
    readonly deletionGracePeriodSeconds?: number;
    readonly deletionTimestamp?: Date;
    readonly finalizers?: Array<string>;
    readonly generateName?: string;
    readonly generation?: number;
    readonly labels?: { [key: string]: string };
    readonly managedFields?: Array<ManagedFieldsEntry>;
    readonly name?: string;
    readonly namespace?: string;
    readonly ownerReferences?: Array<OwnerReference>;
    readonly resourceVersion?: string;
    readonly selfLink?: string;
    readonly uid?: string;
};

export type SerializedObjectMeta = {
    annotations?: { [key: string]: string };
    clusterName?: string;
    creationTimestamp?: string;
    deletionGracePeriodSeconds?: number;
    deletionTimestamp?: string;
    finalizers?: Array<string>;
    generateName?: string;
    generation?: number;
    labels?: { [key: string]: string };
    managedFields?: Array<SerializedManagedFieldsEntry>;
    name?: string;
    namespace?: string;
    ownerReferences?: Array<SerializedOwnerReference>;
    resourceVersion?: string;
    selfLink?: string;
    uid?: string;
};

export function serializeObjectMeta(options: undefined): undefined;
export function serializeObjectMeta(options: ObjectMeta): SerializedObjectMeta;
export function serializeObjectMeta(
    options: ObjectMeta | undefined
): SerializedObjectMeta | undefined;
export function serializeObjectMeta(
    options: ObjectMeta | undefined
): SerializedObjectMeta | undefined {
    if (options === undefined) return undefined;
    const result: SerializedObjectMeta = {
        annotations:
            options.annotations === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.annotations,
                      Object.entries(options.annotations).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        clusterName: options.clusterName,
        creationTimestamp: options.creationTimestamp?.toISOString(),
        deletionGracePeriodSeconds: options.deletionGracePeriodSeconds,
        deletionTimestamp: options.deletionTimestamp?.toISOString(),
        finalizers: prelude.serialize(options.finalizers, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        generateName: options.generateName,
        generation: options.generation,
        labels:
            options.labels === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.labels,
                      Object.entries(options.labels).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        managedFields: prelude.serialize(options.managedFields, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeManagedFieldsEntry(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        name: options.name,
        namespace: options.namespace,
        ownerReferences: prelude.serialize(options.ownerReferences, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeOwnerReference(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        resourceVersion: options.resourceVersion,
        selfLink: options.selfLink,
        uid: options.uid,
    };

    return senchou.wrapTemplate(options, result);
}

export type MutatingWebhook = {
    readonly admissionReviewVersions: Array<string>;
    readonly clientConfig: WebhookClientConfig;
    readonly failurePolicy?: string;
    readonly matchPolicy?: string;
    readonly name: string;
    readonly namespaceSelector?: LabelSelector;
    readonly objectSelector?: LabelSelector;
    readonly reinvocationPolicy?: string;
    readonly rules?: Array<RuleWithOperations>;
    readonly sideEffects: string;
    readonly timeoutSeconds?: number;
};

export type SerializedMutatingWebhook = {
    admissionReviewVersions: Array<string>;
    clientConfig: SerializedWebhookClientConfig;
    failurePolicy?: string;
    matchPolicy?: string;
    name: string;
    namespaceSelector?: SerializedLabelSelector;
    objectSelector?: SerializedLabelSelector;
    reinvocationPolicy?: string;
    rules?: Array<SerializedRuleWithOperations>;
    sideEffects: string;
    timeoutSeconds?: number;
};

export function serializeMutatingWebhook(options: undefined): undefined;
export function serializeMutatingWebhook(
    options: MutatingWebhook
): SerializedMutatingWebhook;
export function serializeMutatingWebhook(
    options: MutatingWebhook | undefined
): SerializedMutatingWebhook | undefined;
export function serializeMutatingWebhook(
    options: MutatingWebhook | undefined
): SerializedMutatingWebhook | undefined {
    if (options === undefined) return undefined;
    const result: SerializedMutatingWebhook = {
        admissionReviewVersions: prelude.serialize(
            options.admissionReviewVersions,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items.map((item) => item).filter(prelude.isNotUndefined)
                )
        ),
        clientConfig: serializeWebhookClientConfig(options.clientConfig),
        failurePolicy: options.failurePolicy,
        matchPolicy: options.matchPolicy,
        name: options.name,
        namespaceSelector: serializeLabelSelector(options.namespaceSelector),
        objectSelector: serializeLabelSelector(options.objectSelector),
        reinvocationPolicy: options.reinvocationPolicy,
        rules: prelude.serialize(options.rules, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeRuleWithOperations(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        sideEffects: options.sideEffects,
        timeoutSeconds: options.timeoutSeconds,
    };

    return senchou.wrapTemplate(options, result);
}

export type ListMeta = {
    readonly continue?: string;
    readonly remainingItemCount?: number;
    readonly resourceVersion?: string;
    readonly selfLink?: string;
};

export type SerializedListMeta = {
    continue?: string;
    remainingItemCount?: number;
    resourceVersion?: string;
    selfLink?: string;
};

export function serializeListMeta(options: undefined): undefined;
export function serializeListMeta(options: ListMeta): SerializedListMeta;
export function serializeListMeta(
    options: ListMeta | undefined
): SerializedListMeta | undefined;
export function serializeListMeta(
    options: ListMeta | undefined
): SerializedListMeta | undefined {
    if (options === undefined) return undefined;
    const result: SerializedListMeta = {
        continue: options.continue,
        remainingItemCount: options.remainingItemCount,
        resourceVersion: options.resourceVersion,
        selfLink: options.selfLink,
    };

    return senchou.wrapTemplate(options, result);
}

export type ValidatingWebhook = {
    readonly admissionReviewVersions: Array<string>;
    readonly clientConfig: WebhookClientConfig;
    readonly failurePolicy?: string;
    readonly matchPolicy?: string;
    readonly name: string;
    readonly namespaceSelector?: LabelSelector;
    readonly objectSelector?: LabelSelector;
    readonly rules?: Array<RuleWithOperations>;
    readonly sideEffects: string;
    readonly timeoutSeconds?: number;
};

export type SerializedValidatingWebhook = {
    admissionReviewVersions: Array<string>;
    clientConfig: SerializedWebhookClientConfig;
    failurePolicy?: string;
    matchPolicy?: string;
    name: string;
    namespaceSelector?: SerializedLabelSelector;
    objectSelector?: SerializedLabelSelector;
    rules?: Array<SerializedRuleWithOperations>;
    sideEffects: string;
    timeoutSeconds?: number;
};

export function serializeValidatingWebhook(options: undefined): undefined;
export function serializeValidatingWebhook(
    options: ValidatingWebhook
): SerializedValidatingWebhook;
export function serializeValidatingWebhook(
    options: ValidatingWebhook | undefined
): SerializedValidatingWebhook | undefined;
export function serializeValidatingWebhook(
    options: ValidatingWebhook | undefined
): SerializedValidatingWebhook | undefined {
    if (options === undefined) return undefined;
    const result: SerializedValidatingWebhook = {
        admissionReviewVersions: prelude.serialize(
            options.admissionReviewVersions,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items.map((item) => item).filter(prelude.isNotUndefined)
                )
        ),
        clientConfig: serializeWebhookClientConfig(options.clientConfig),
        failurePolicy: options.failurePolicy,
        matchPolicy: options.matchPolicy,
        name: options.name,
        namespaceSelector: serializeLabelSelector(options.namespaceSelector),
        objectSelector: serializeLabelSelector(options.objectSelector),
        rules: prelude.serialize(options.rules, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeRuleWithOperations(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        sideEffects: options.sideEffects,
        timeoutSeconds: options.timeoutSeconds,
    };

    return senchou.wrapTemplate(options, result);
}

export type DaemonSetSpec = {
    readonly minReadySeconds?: number;
    readonly revisionHistoryLimit?: number;
    readonly selector: LabelSelector;
    readonly template: PodTemplateSpec;
    readonly updateStrategy?: DaemonSetUpdateStrategy;
};

export type SerializedDaemonSetSpec = {
    minReadySeconds?: number;
    revisionHistoryLimit?: number;
    selector: SerializedLabelSelector;
    template: SerializedPodTemplateSpec;
    updateStrategy?: SerializedDaemonSetUpdateStrategy;
};

export function serializeDaemonSetSpec(options: undefined): undefined;
export function serializeDaemonSetSpec(
    options: DaemonSetSpec
): SerializedDaemonSetSpec;
export function serializeDaemonSetSpec(
    options: DaemonSetSpec | undefined
): SerializedDaemonSetSpec | undefined;
export function serializeDaemonSetSpec(
    options: DaemonSetSpec | undefined
): SerializedDaemonSetSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedDaemonSetSpec = {
        minReadySeconds: options.minReadySeconds,
        revisionHistoryLimit: options.revisionHistoryLimit,
        selector: serializeLabelSelector(options.selector),
        template: serializePodTemplateSpec(options.template),
        updateStrategy: serializeDaemonSetUpdateStrategy(
            options.updateStrategy
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type DeploymentSpec = {
    readonly minReadySeconds?: number;
    readonly paused?: boolean;
    readonly progressDeadlineSeconds?: number;
    readonly replicas?: number;
    readonly revisionHistoryLimit?: number;
    readonly selector: LabelSelector;
    readonly strategy?: DeploymentStrategy;
    readonly template: PodTemplateSpec;
};

export type SerializedDeploymentSpec = {
    minReadySeconds?: number;
    paused?: boolean;
    progressDeadlineSeconds?: number;
    replicas?: number;
    revisionHistoryLimit?: number;
    selector: SerializedLabelSelector;
    strategy?: SerializedDeploymentStrategy;
    template: SerializedPodTemplateSpec;
};

export function serializeDeploymentSpec(options: undefined): undefined;
export function serializeDeploymentSpec(
    options: DeploymentSpec
): SerializedDeploymentSpec;
export function serializeDeploymentSpec(
    options: DeploymentSpec | undefined
): SerializedDeploymentSpec | undefined;
export function serializeDeploymentSpec(
    options: DeploymentSpec | undefined
): SerializedDeploymentSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedDeploymentSpec = {
        minReadySeconds: options.minReadySeconds,
        paused: options.paused,
        progressDeadlineSeconds: options.progressDeadlineSeconds,
        replicas: options.replicas,
        revisionHistoryLimit: options.revisionHistoryLimit,
        selector: serializeLabelSelector(options.selector),
        strategy: serializeDeploymentStrategy(options.strategy),
        template: serializePodTemplateSpec(options.template),
    };

    return senchou.wrapTemplate(options, result);
}

export type ReplicaSetSpec = {
    readonly minReadySeconds?: number;
    readonly replicas?: number;
    readonly selector: LabelSelector;
    readonly template?: PodTemplateSpec;
};

export type SerializedReplicaSetSpec = {
    minReadySeconds?: number;
    replicas?: number;
    selector: SerializedLabelSelector;
    template?: SerializedPodTemplateSpec;
};

export function serializeReplicaSetSpec(options: undefined): undefined;
export function serializeReplicaSetSpec(
    options: ReplicaSetSpec
): SerializedReplicaSetSpec;
export function serializeReplicaSetSpec(
    options: ReplicaSetSpec | undefined
): SerializedReplicaSetSpec | undefined;
export function serializeReplicaSetSpec(
    options: ReplicaSetSpec | undefined
): SerializedReplicaSetSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedReplicaSetSpec = {
        minReadySeconds: options.minReadySeconds,
        replicas: options.replicas,
        selector: serializeLabelSelector(options.selector),
        template: serializePodTemplateSpec(options.template),
    };

    return senchou.wrapTemplate(options, result);
}

export type StatefulSetSpec = {
    readonly minReadySeconds?: number;
    readonly podManagementPolicy?: string;
    readonly replicas?: number;
    readonly revisionHistoryLimit?: number;
    readonly selector: LabelSelector;
    readonly serviceName: string;
    readonly template: PodTemplateSpec;
    readonly updateStrategy?: StatefulSetUpdateStrategy;
    readonly volumeClaimTemplates?: Array<PersistentVolumeClaimProps>;
};

export type SerializedStatefulSetSpec = {
    minReadySeconds?: number;
    podManagementPolicy?: string;
    replicas?: number;
    revisionHistoryLimit?: number;
    selector: SerializedLabelSelector;
    serviceName: string;
    template: SerializedPodTemplateSpec;
    updateStrategy?: SerializedStatefulSetUpdateStrategy;
    volumeClaimTemplates?: Array<SerializedPersistentVolumeClaim>;
};

export function serializeStatefulSetSpec(options: undefined): undefined;
export function serializeStatefulSetSpec(
    options: StatefulSetSpec
): SerializedStatefulSetSpec;
export function serializeStatefulSetSpec(
    options: StatefulSetSpec | undefined
): SerializedStatefulSetSpec | undefined;
export function serializeStatefulSetSpec(
    options: StatefulSetSpec | undefined
): SerializedStatefulSetSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedStatefulSetSpec = {
        minReadySeconds: options.minReadySeconds,
        podManagementPolicy: options.podManagementPolicy,
        replicas: options.replicas,
        revisionHistoryLimit: options.revisionHistoryLimit,
        selector: serializeLabelSelector(options.selector),
        serviceName: options.serviceName,
        template: serializePodTemplateSpec(options.template),
        updateStrategy: serializeStatefulSetUpdateStrategy(
            options.updateStrategy
        ),
        volumeClaimTemplates: prelude.serialize(
            options.volumeClaimTemplates,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items
                        .map((item) => PersistentVolumeClaim(item))
                        .filter(prelude.isNotUndefined)
                )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type TokenRequestSpec = {
    readonly audiences: Array<string>;
    readonly boundObjectRef?: BoundObjectReference;
    readonly expirationSeconds?: number;
};

export type SerializedTokenRequestSpec = {
    audiences: Array<string>;
    boundObjectRef?: SerializedBoundObjectReference;
    expirationSeconds?: number;
};

export function serializeTokenRequestSpec(options: undefined): undefined;
export function serializeTokenRequestSpec(
    options: TokenRequestSpec
): SerializedTokenRequestSpec;
export function serializeTokenRequestSpec(
    options: TokenRequestSpec | undefined
): SerializedTokenRequestSpec | undefined;
export function serializeTokenRequestSpec(
    options: TokenRequestSpec | undefined
): SerializedTokenRequestSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedTokenRequestSpec = {
        audiences: prelude.serialize(options.audiences, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        boundObjectRef: serializeBoundObjectReference(options.boundObjectRef),
        expirationSeconds: options.expirationSeconds,
    };

    return senchou.wrapTemplate(options, result);
}

export type TokenReviewSpec = {
    readonly audiences?: Array<string>;
    readonly token?: string;
};

export type SerializedTokenReviewSpec = {
    audiences?: Array<string>;
    token?: string;
};

export function serializeTokenReviewSpec(options: undefined): undefined;
export function serializeTokenReviewSpec(
    options: TokenReviewSpec
): SerializedTokenReviewSpec;
export function serializeTokenReviewSpec(
    options: TokenReviewSpec | undefined
): SerializedTokenReviewSpec | undefined;
export function serializeTokenReviewSpec(
    options: TokenReviewSpec | undefined
): SerializedTokenReviewSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedTokenReviewSpec = {
        audiences: prelude.serialize(options.audiences, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        token: options.token,
    };

    return senchou.wrapTemplate(options, result);
}

export type SubjectAccessReviewSpec = {
    readonly extra?: { [key: string]: Array<string> };
    readonly groups?: Array<string>;
    readonly nonResourceAttributes?: NonResourceAttributes;
    readonly resourceAttributes?: ResourceAttributes;
    readonly uid?: string;
    readonly user?: string;
};

export type SerializedSubjectAccessReviewSpec = {
    extra?: { [key: string]: Array<string> };
    groups?: Array<string>;
    nonResourceAttributes?: SerializedNonResourceAttributes;
    resourceAttributes?: SerializedResourceAttributes;
    uid?: string;
    user?: string;
};

export function serializeSubjectAccessReviewSpec(options: undefined): undefined;
export function serializeSubjectAccessReviewSpec(
    options: SubjectAccessReviewSpec
): SerializedSubjectAccessReviewSpec;
export function serializeSubjectAccessReviewSpec(
    options: SubjectAccessReviewSpec | undefined
): SerializedSubjectAccessReviewSpec | undefined;
export function serializeSubjectAccessReviewSpec(
    options: SubjectAccessReviewSpec | undefined
): SerializedSubjectAccessReviewSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSubjectAccessReviewSpec = {
        extra:
            options.extra === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.extra,
                      Object.entries(options.extra).reduce(
                          (r, i) =>
                              i[1] === undefined
                                  ? r
                                  : {
                                        ...r,
                                        [i[0]]: prelude.serialize(
                                            i[1],
                                            (items) =>
                                                senchou.wrapTemplate(
                                                    items,
                                                    items
                                                        .map((item) => item)
                                                        .filter(
                                                            prelude.isNotUndefined
                                                        )
                                                )
                                        ),
                                    },
                          {}
                      )
                  ),
        groups: prelude.serialize(options.groups, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        nonResourceAttributes: serializeNonResourceAttributes(
            options.nonResourceAttributes
        ),
        resourceAttributes: serializeResourceAttributes(
            options.resourceAttributes
        ),
        uid: options.uid,
        user: options.user,
    };

    return senchou.wrapTemplate(options, result);
}

export type SelfSubjectAccessReviewSpec = {
    readonly nonResourceAttributes?: NonResourceAttributes;
    readonly resourceAttributes?: ResourceAttributes;
};

export type SerializedSelfSubjectAccessReviewSpec = {
    nonResourceAttributes?: SerializedNonResourceAttributes;
    resourceAttributes?: SerializedResourceAttributes;
};

export function serializeSelfSubjectAccessReviewSpec(
    options: undefined
): undefined;
export function serializeSelfSubjectAccessReviewSpec(
    options: SelfSubjectAccessReviewSpec
): SerializedSelfSubjectAccessReviewSpec;
export function serializeSelfSubjectAccessReviewSpec(
    options: SelfSubjectAccessReviewSpec | undefined
): SerializedSelfSubjectAccessReviewSpec | undefined;
export function serializeSelfSubjectAccessReviewSpec(
    options: SelfSubjectAccessReviewSpec | undefined
): SerializedSelfSubjectAccessReviewSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSelfSubjectAccessReviewSpec = {
        nonResourceAttributes: serializeNonResourceAttributes(
            options.nonResourceAttributes
        ),
        resourceAttributes: serializeResourceAttributes(
            options.resourceAttributes
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type SelfSubjectRulesReviewSpec = {
    readonly namespace?: string;
};

export type SerializedSelfSubjectRulesReviewSpec = {
    namespace?: string;
};

export function serializeSelfSubjectRulesReviewSpec(
    options: undefined
): undefined;
export function serializeSelfSubjectRulesReviewSpec(
    options: SelfSubjectRulesReviewSpec
): SerializedSelfSubjectRulesReviewSpec;
export function serializeSelfSubjectRulesReviewSpec(
    options: SelfSubjectRulesReviewSpec | undefined
): SerializedSelfSubjectRulesReviewSpec | undefined;
export function serializeSelfSubjectRulesReviewSpec(
    options: SelfSubjectRulesReviewSpec | undefined
): SerializedSelfSubjectRulesReviewSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSelfSubjectRulesReviewSpec = {
        namespace: options.namespace,
    };

    return senchou.wrapTemplate(options, result);
}

export type HorizontalPodAutoscalerSpec = {
    readonly maxReplicas: number;
    readonly minReplicas?: number;
    readonly scaleTargetRef: CrossVersionObjectReference;
    readonly targetCPUUtilizationPercentage?: number;
};

export type SerializedHorizontalPodAutoscalerSpec = {
    maxReplicas: number;
    minReplicas?: number;
    scaleTargetRef: SerializedCrossVersionObjectReference;
    targetCPUUtilizationPercentage?: number;
};

export function serializeHorizontalPodAutoscalerSpec(
    options: undefined
): undefined;
export function serializeHorizontalPodAutoscalerSpec(
    options: HorizontalPodAutoscalerSpec
): SerializedHorizontalPodAutoscalerSpec;
export function serializeHorizontalPodAutoscalerSpec(
    options: HorizontalPodAutoscalerSpec | undefined
): SerializedHorizontalPodAutoscalerSpec | undefined;
export function serializeHorizontalPodAutoscalerSpec(
    options: HorizontalPodAutoscalerSpec | undefined
): SerializedHorizontalPodAutoscalerSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedHorizontalPodAutoscalerSpec = {
        maxReplicas: options.maxReplicas,
        minReplicas: options.minReplicas,
        scaleTargetRef: serializeCrossVersionObjectReference(
            options.scaleTargetRef
        ),
        targetCPUUtilizationPercentage: options.targetCPUUtilizationPercentage,
    };

    return senchou.wrapTemplate(options, result);
}

export type ScaleSpec = {
    readonly replicas?: number;
};

export type SerializedScaleSpec = {
    replicas?: number;
};

export function serializeScaleSpec(options: undefined): undefined;
export function serializeScaleSpec(options: ScaleSpec): SerializedScaleSpec;
export function serializeScaleSpec(
    options: ScaleSpec | undefined
): SerializedScaleSpec | undefined;
export function serializeScaleSpec(
    options: ScaleSpec | undefined
): SerializedScaleSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedScaleSpec = {
        replicas: options.replicas,
    };

    return senchou.wrapTemplate(options, result);
}

export type HorizontalPodAutoscalerSpecV2Beta1 = {
    readonly maxReplicas: number;
    readonly metrics?: Array<MetricSpecV2Beta1>;
    readonly minReplicas?: number;
    readonly scaleTargetRef: CrossVersionObjectReferenceV2Beta1;
};

export type SerializedHorizontalPodAutoscalerSpecV2Beta1 = {
    maxReplicas: number;
    metrics?: Array<SerializedMetricSpecV2Beta1>;
    minReplicas?: number;
    scaleTargetRef: SerializedCrossVersionObjectReferenceV2Beta1;
};

export function serializeHorizontalPodAutoscalerSpecV2Beta1(
    options: undefined
): undefined;
export function serializeHorizontalPodAutoscalerSpecV2Beta1(
    options: HorizontalPodAutoscalerSpecV2Beta1
): SerializedHorizontalPodAutoscalerSpecV2Beta1;
export function serializeHorizontalPodAutoscalerSpecV2Beta1(
    options: HorizontalPodAutoscalerSpecV2Beta1 | undefined
): SerializedHorizontalPodAutoscalerSpecV2Beta1 | undefined;
export function serializeHorizontalPodAutoscalerSpecV2Beta1(
    options: HorizontalPodAutoscalerSpecV2Beta1 | undefined
): SerializedHorizontalPodAutoscalerSpecV2Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedHorizontalPodAutoscalerSpecV2Beta1 = {
        maxReplicas: options.maxReplicas,
        metrics: prelude.serialize(options.metrics, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeMetricSpecV2Beta1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        minReplicas: options.minReplicas,
        scaleTargetRef: serializeCrossVersionObjectReferenceV2Beta1(
            options.scaleTargetRef
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type HorizontalPodAutoscalerSpecV2Beta2 = {
    readonly behavior?: HorizontalPodAutoscalerBehaviorV2Beta2;
    readonly maxReplicas: number;
    readonly metrics?: Array<MetricSpecV2Beta2>;
    readonly minReplicas?: number;
    readonly scaleTargetRef: CrossVersionObjectReferenceV2Beta2;
};

export type SerializedHorizontalPodAutoscalerSpecV2Beta2 = {
    behavior?: SerializedHorizontalPodAutoscalerBehaviorV2Beta2;
    maxReplicas: number;
    metrics?: Array<SerializedMetricSpecV2Beta2>;
    minReplicas?: number;
    scaleTargetRef: SerializedCrossVersionObjectReferenceV2Beta2;
};

export function serializeHorizontalPodAutoscalerSpecV2Beta2(
    options: undefined
): undefined;
export function serializeHorizontalPodAutoscalerSpecV2Beta2(
    options: HorizontalPodAutoscalerSpecV2Beta2
): SerializedHorizontalPodAutoscalerSpecV2Beta2;
export function serializeHorizontalPodAutoscalerSpecV2Beta2(
    options: HorizontalPodAutoscalerSpecV2Beta2 | undefined
): SerializedHorizontalPodAutoscalerSpecV2Beta2 | undefined;
export function serializeHorizontalPodAutoscalerSpecV2Beta2(
    options: HorizontalPodAutoscalerSpecV2Beta2 | undefined
): SerializedHorizontalPodAutoscalerSpecV2Beta2 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedHorizontalPodAutoscalerSpecV2Beta2 = {
        behavior: serializeHorizontalPodAutoscalerBehaviorV2Beta2(
            options.behavior
        ),
        maxReplicas: options.maxReplicas,
        metrics: prelude.serialize(options.metrics, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeMetricSpecV2Beta2(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        minReplicas: options.minReplicas,
        scaleTargetRef: serializeCrossVersionObjectReferenceV2Beta2(
            options.scaleTargetRef
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type CronJobSpec = {
    readonly concurrencyPolicy?: string;
    readonly failedJobsHistoryLimit?: number;
    readonly jobTemplate: JobTemplateSpec;
    readonly schedule: string;
    readonly startingDeadlineSeconds?: number;
    readonly successfulJobsHistoryLimit?: number;
    readonly suspend?: boolean;
};

export type SerializedCronJobSpec = {
    concurrencyPolicy?: string;
    failedJobsHistoryLimit?: number;
    jobTemplate: SerializedJobTemplateSpec;
    schedule: string;
    startingDeadlineSeconds?: number;
    successfulJobsHistoryLimit?: number;
    suspend?: boolean;
};

export function serializeCronJobSpec(options: undefined): undefined;
export function serializeCronJobSpec(
    options: CronJobSpec
): SerializedCronJobSpec;
export function serializeCronJobSpec(
    options: CronJobSpec | undefined
): SerializedCronJobSpec | undefined;
export function serializeCronJobSpec(
    options: CronJobSpec | undefined
): SerializedCronJobSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCronJobSpec = {
        concurrencyPolicy: options.concurrencyPolicy,
        failedJobsHistoryLimit: options.failedJobsHistoryLimit,
        jobTemplate: serializeJobTemplateSpec(options.jobTemplate),
        schedule: options.schedule,
        startingDeadlineSeconds: options.startingDeadlineSeconds,
        successfulJobsHistoryLimit: options.successfulJobsHistoryLimit,
        suspend: options.suspend,
    };

    return senchou.wrapTemplate(options, result);
}

export type JobSpec = {
    readonly activeDeadlineSeconds?: number;
    readonly backoffLimit?: number;
    readonly completionMode?: string;
    readonly completions?: number;
    readonly manualSelector?: boolean;
    readonly parallelism?: number;
    readonly selector?: LabelSelector;
    readonly suspend?: boolean;
    readonly template: PodTemplateSpec;
    readonly ttlSecondsAfterFinished?: number;
};

export type SerializedJobSpec = {
    activeDeadlineSeconds?: number;
    backoffLimit?: number;
    completionMode?: string;
    completions?: number;
    manualSelector?: boolean;
    parallelism?: number;
    selector?: SerializedLabelSelector;
    suspend?: boolean;
    template: SerializedPodTemplateSpec;
    ttlSecondsAfterFinished?: number;
};

export function serializeJobSpec(options: undefined): undefined;
export function serializeJobSpec(options: JobSpec): SerializedJobSpec;
export function serializeJobSpec(
    options: JobSpec | undefined
): SerializedJobSpec | undefined;
export function serializeJobSpec(
    options: JobSpec | undefined
): SerializedJobSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedJobSpec = {
        activeDeadlineSeconds: options.activeDeadlineSeconds,
        backoffLimit: options.backoffLimit,
        completionMode: options.completionMode,
        completions: options.completions,
        manualSelector: options.manualSelector,
        parallelism: options.parallelism,
        selector: serializeLabelSelector(options.selector),
        suspend: options.suspend,
        template: serializePodTemplateSpec(options.template),
        ttlSecondsAfterFinished: options.ttlSecondsAfterFinished,
    };

    return senchou.wrapTemplate(options, result);
}

export type CronJobSpecV1Beta1 = {
    readonly concurrencyPolicy?: string;
    readonly failedJobsHistoryLimit?: number;
    readonly jobTemplate: JobTemplateSpecV1Beta1;
    readonly schedule: string;
    readonly startingDeadlineSeconds?: number;
    readonly successfulJobsHistoryLimit?: number;
    readonly suspend?: boolean;
};

export type SerializedCronJobSpecV1Beta1 = {
    concurrencyPolicy?: string;
    failedJobsHistoryLimit?: number;
    jobTemplate: SerializedJobTemplateSpecV1Beta1;
    schedule: string;
    startingDeadlineSeconds?: number;
    successfulJobsHistoryLimit?: number;
    suspend?: boolean;
};

export function serializeCronJobSpecV1Beta1(options: undefined): undefined;
export function serializeCronJobSpecV1Beta1(
    options: CronJobSpecV1Beta1
): SerializedCronJobSpecV1Beta1;
export function serializeCronJobSpecV1Beta1(
    options: CronJobSpecV1Beta1 | undefined
): SerializedCronJobSpecV1Beta1 | undefined;
export function serializeCronJobSpecV1Beta1(
    options: CronJobSpecV1Beta1 | undefined
): SerializedCronJobSpecV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCronJobSpecV1Beta1 = {
        concurrencyPolicy: options.concurrencyPolicy,
        failedJobsHistoryLimit: options.failedJobsHistoryLimit,
        jobTemplate: serializeJobTemplateSpecV1Beta1(options.jobTemplate),
        schedule: options.schedule,
        startingDeadlineSeconds: options.startingDeadlineSeconds,
        successfulJobsHistoryLimit: options.successfulJobsHistoryLimit,
        suspend: options.suspend,
    };

    return senchou.wrapTemplate(options, result);
}

export type CertificateSigningRequestSpec = {
    readonly expirationSeconds?: number;
    readonly extra?: { [key: string]: Array<string> };
    readonly groups?: Array<string>;
    readonly request: string;
    readonly signerName: string;
    readonly uid?: string;
    readonly usages?: Array<string>;
    readonly username?: string;
};

export type SerializedCertificateSigningRequestSpec = {
    expirationSeconds?: number;
    extra?: { [key: string]: Array<string> };
    groups?: Array<string>;
    request: string;
    signerName: string;
    uid?: string;
    usages?: Array<string>;
    username?: string;
};

export function serializeCertificateSigningRequestSpec(
    options: undefined
): undefined;
export function serializeCertificateSigningRequestSpec(
    options: CertificateSigningRequestSpec
): SerializedCertificateSigningRequestSpec;
export function serializeCertificateSigningRequestSpec(
    options: CertificateSigningRequestSpec | undefined
): SerializedCertificateSigningRequestSpec | undefined;
export function serializeCertificateSigningRequestSpec(
    options: CertificateSigningRequestSpec | undefined
): SerializedCertificateSigningRequestSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCertificateSigningRequestSpec = {
        expirationSeconds: options.expirationSeconds,
        extra:
            options.extra === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.extra,
                      Object.entries(options.extra).reduce(
                          (r, i) =>
                              i[1] === undefined
                                  ? r
                                  : {
                                        ...r,
                                        [i[0]]: prelude.serialize(
                                            i[1],
                                            (items) =>
                                                senchou.wrapTemplate(
                                                    items,
                                                    items
                                                        .map((item) => item)
                                                        .filter(
                                                            prelude.isNotUndefined
                                                        )
                                                )
                                        ),
                                    },
                          {}
                      )
                  ),
        groups: prelude.serialize(options.groups, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        request: options.request,
        signerName: options.signerName,
        uid: options.uid,
        usages: prelude.serialize(options.usages, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        username: options.username,
    };

    return senchou.wrapTemplate(options, result);
}

export type LeaseSpec = {
    readonly acquireTime?: Date;
    readonly holderIdentity?: string;
    readonly leaseDurationSeconds?: number;
    readonly leaseTransitions?: number;
    readonly renewTime?: Date;
};

export type SerializedLeaseSpec = {
    acquireTime?: string;
    holderIdentity?: string;
    leaseDurationSeconds?: number;
    leaseTransitions?: number;
    renewTime?: string;
};

export function serializeLeaseSpec(options: undefined): undefined;
export function serializeLeaseSpec(options: LeaseSpec): SerializedLeaseSpec;
export function serializeLeaseSpec(
    options: LeaseSpec | undefined
): SerializedLeaseSpec | undefined;
export function serializeLeaseSpec(
    options: LeaseSpec | undefined
): SerializedLeaseSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedLeaseSpec = {
        acquireTime: options.acquireTime?.toISOString(),
        holderIdentity: options.holderIdentity,
        leaseDurationSeconds: options.leaseDurationSeconds,
        leaseTransitions: options.leaseTransitions,
        renewTime: options.renewTime?.toISOString(),
    };

    return senchou.wrapTemplate(options, result);
}

export type ObjectReference = {
    readonly apiVersion?: string;
    readonly fieldPath?: string;
    readonly kind?: string;
    readonly name?: string;
    readonly namespace?: string;
    readonly resourceVersion?: string;
    readonly uid?: string;
};

export type SerializedObjectReference = {
    apiVersion?: string;
    fieldPath?: string;
    kind?: string;
    name?: string;
    namespace?: string;
    resourceVersion?: string;
    uid?: string;
};

export function serializeObjectReference(options: undefined): undefined;
export function serializeObjectReference(
    options: ObjectReference
): SerializedObjectReference;
export function serializeObjectReference(
    options: ObjectReference | undefined
): SerializedObjectReference | undefined;
export function serializeObjectReference(
    options: ObjectReference | undefined
): SerializedObjectReference | undefined {
    if (options === undefined) return undefined;
    const result: SerializedObjectReference = {
        apiVersion: options.apiVersion,
        fieldPath: options.fieldPath,
        kind: options.kind,
        name: options.name,
        namespace: options.namespace,
        resourceVersion: options.resourceVersion,
        uid: options.uid,
    };

    return senchou.wrapTemplate(options, result);
}

export type ComponentCondition = {
    readonly error?: string;
    readonly message?: string;
    readonly status: string;
    readonly type: string;
};

export type SerializedComponentCondition = {
    error?: string;
    message?: string;
    status: string;
    type: string;
};

export function serializeComponentCondition(options: undefined): undefined;
export function serializeComponentCondition(
    options: ComponentCondition
): SerializedComponentCondition;
export function serializeComponentCondition(
    options: ComponentCondition | undefined
): SerializedComponentCondition | undefined;
export function serializeComponentCondition(
    options: ComponentCondition | undefined
): SerializedComponentCondition | undefined {
    if (options === undefined) return undefined;
    const result: SerializedComponentCondition = {
        error: options.error,
        message: options.message,
        status: options.status,
        type: options.type,
    };

    return senchou.wrapTemplate(options, result);
}

export type EndpointSubset = {
    readonly addresses?: Array<EndpointAddress>;
    readonly notReadyAddresses?: Array<EndpointAddress>;
    readonly ports?: Array<EndpointPort>;
};

export type SerializedEndpointSubset = {
    addresses?: Array<SerializedEndpointAddress>;
    notReadyAddresses?: Array<SerializedEndpointAddress>;
    ports?: Array<SerializedEndpointPort>;
};

export function serializeEndpointSubset(options: undefined): undefined;
export function serializeEndpointSubset(
    options: EndpointSubset
): SerializedEndpointSubset;
export function serializeEndpointSubset(
    options: EndpointSubset | undefined
): SerializedEndpointSubset | undefined;
export function serializeEndpointSubset(
    options: EndpointSubset | undefined
): SerializedEndpointSubset | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEndpointSubset = {
        addresses: prelude.serialize(options.addresses, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeEndpointAddress(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        notReadyAddresses: prelude.serialize(
            options.notReadyAddresses,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items
                        .map((item) => serializeEndpointAddress(item))
                        .filter(prelude.isNotUndefined)
                )
        ),
        ports: prelude.serialize(options.ports, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeEndpointPort(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type EventSource = {
    readonly component?: string;
    readonly host?: string;
};

export type SerializedEventSource = {
    component?: string;
    host?: string;
};

export function serializeEventSource(options: undefined): undefined;
export function serializeEventSource(
    options: EventSource
): SerializedEventSource;
export function serializeEventSource(
    options: EventSource | undefined
): SerializedEventSource | undefined;
export function serializeEventSource(
    options: EventSource | undefined
): SerializedEventSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEventSource = {
        component: options.component,
        host: options.host,
    };

    return senchou.wrapTemplate(options, result);
}

export type EventSeries = {
    readonly count: number;
    readonly lastObservedTime: Date;
};

export type SerializedEventSeries = {
    count: number;
    lastObservedTime: string;
};

export function serializeEventSeries(options: undefined): undefined;
export function serializeEventSeries(
    options: EventSeries
): SerializedEventSeries;
export function serializeEventSeries(
    options: EventSeries | undefined
): SerializedEventSeries | undefined;
export function serializeEventSeries(
    options: EventSeries | undefined
): SerializedEventSeries | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEventSeries = {
        count: options.count,
        lastObservedTime: options.lastObservedTime?.toISOString(),
    };

    return senchou.wrapTemplate(options, result);
}

export type LimitRangeSpec = {
    readonly limits: Array<LimitRangeItem>;
};

export type SerializedLimitRangeSpec = {
    limits: Array<SerializedLimitRangeItem>;
};

export function serializeLimitRangeSpec(options: undefined): undefined;
export function serializeLimitRangeSpec(
    options: LimitRangeSpec
): SerializedLimitRangeSpec;
export function serializeLimitRangeSpec(
    options: LimitRangeSpec | undefined
): SerializedLimitRangeSpec | undefined;
export function serializeLimitRangeSpec(
    options: LimitRangeSpec | undefined
): SerializedLimitRangeSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedLimitRangeSpec = {
        limits: prelude.serialize(options.limits, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeLimitRangeItem(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type NamespaceSpec = {
    readonly finalizers?: Array<string>;
};

export type SerializedNamespaceSpec = {
    finalizers?: Array<string>;
};

export function serializeNamespaceSpec(options: undefined): undefined;
export function serializeNamespaceSpec(
    options: NamespaceSpec
): SerializedNamespaceSpec;
export function serializeNamespaceSpec(
    options: NamespaceSpec | undefined
): SerializedNamespaceSpec | undefined;
export function serializeNamespaceSpec(
    options: NamespaceSpec | undefined
): SerializedNamespaceSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedNamespaceSpec = {
        finalizers: prelude.serialize(options.finalizers, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type NodeSpec = {
    readonly configSource?: NodeConfigSource;
    readonly externalID?: string;
    readonly podCIDR?: string;
    readonly podCIDRs?: Array<string>;
    readonly providerID?: string;
    readonly taints?: Array<Taint>;
    readonly unschedulable?: boolean;
};

export type SerializedNodeSpec = {
    configSource?: SerializedNodeConfigSource;
    externalID?: string;
    podCIDR?: string;
    podCIDRs?: Array<string>;
    providerID?: string;
    taints?: Array<SerializedTaint>;
    unschedulable?: boolean;
};

export function serializeNodeSpec(options: undefined): undefined;
export function serializeNodeSpec(options: NodeSpec): SerializedNodeSpec;
export function serializeNodeSpec(
    options: NodeSpec | undefined
): SerializedNodeSpec | undefined;
export function serializeNodeSpec(
    options: NodeSpec | undefined
): SerializedNodeSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedNodeSpec = {
        configSource: serializeNodeConfigSource(options.configSource),
        externalID: options.externalID,
        podCIDR: options.podCIDR,
        podCIDRs: prelude.serialize(options.podCIDRs, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        providerID: options.providerID,
        taints: prelude.serialize(options.taints, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeTaint(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        unschedulable: options.unschedulable,
    };

    return senchou.wrapTemplate(options, result);
}

export type PersistentVolumeSpec = {
    readonly accessModes?: Array<string>;
    readonly awsElasticBlockStore?: AWSElasticBlockStoreVolumeSource;
    readonly azureDisk?: AzureDiskVolumeSource;
    readonly azureFile?: AzureFilePersistentVolumeSource;
    readonly capacity?: { [key: string]: Quantity };
    readonly cephfs?: CephFSPersistentVolumeSource;
    readonly cinder?: CinderPersistentVolumeSource;
    readonly claimRef?: ObjectReference;
    readonly csi?: CSIPersistentVolumeSource;
    readonly fc?: FCVolumeSource;
    readonly flexVolume?: FlexPersistentVolumeSource;
    readonly flocker?: FlockerVolumeSource;
    readonly gcePersistentDisk?: GCEPersistentDiskVolumeSource;
    readonly glusterfs?: GlusterfsPersistentVolumeSource;
    readonly hostPath?: HostPathVolumeSource;
    readonly iscsi?: ISCSIPersistentVolumeSource;
    readonly local?: LocalVolumeSource;
    readonly mountOptions?: Array<string>;
    readonly nfs?: NFSVolumeSource;
    readonly nodeAffinity?: VolumeNodeAffinity;
    readonly persistentVolumeReclaimPolicy?: string;
    readonly photonPersistentDisk?: PhotonPersistentDiskVolumeSource;
    readonly portworxVolume?: PortworxVolumeSource;
    readonly quobyte?: QuobyteVolumeSource;
    readonly rbd?: RBDPersistentVolumeSource;
    readonly scaleIO?: ScaleIOPersistentVolumeSource;
    readonly storageClassName?: string;
    readonly storageos?: StorageOSPersistentVolumeSource;
    readonly volumeMode?: string;
    readonly vsphereVolume?: VsphereVirtualDiskVolumeSource;
};

export type SerializedPersistentVolumeSpec = {
    accessModes?: Array<string>;
    awsElasticBlockStore?: SerializedAWSElasticBlockStoreVolumeSource;
    azureDisk?: SerializedAzureDiskVolumeSource;
    azureFile?: SerializedAzureFilePersistentVolumeSource;
    capacity?: { [key: string]: Quantity };
    cephfs?: SerializedCephFSPersistentVolumeSource;
    cinder?: SerializedCinderPersistentVolumeSource;
    claimRef?: SerializedObjectReference;
    csi?: SerializedCSIPersistentVolumeSource;
    fc?: SerializedFCVolumeSource;
    flexVolume?: SerializedFlexPersistentVolumeSource;
    flocker?: SerializedFlockerVolumeSource;
    gcePersistentDisk?: SerializedGCEPersistentDiskVolumeSource;
    glusterfs?: SerializedGlusterfsPersistentVolumeSource;
    hostPath?: SerializedHostPathVolumeSource;
    iscsi?: SerializedISCSIPersistentVolumeSource;
    local?: SerializedLocalVolumeSource;
    mountOptions?: Array<string>;
    nfs?: SerializedNFSVolumeSource;
    nodeAffinity?: SerializedVolumeNodeAffinity;
    persistentVolumeReclaimPolicy?: string;
    photonPersistentDisk?: SerializedPhotonPersistentDiskVolumeSource;
    portworxVolume?: SerializedPortworxVolumeSource;
    quobyte?: SerializedQuobyteVolumeSource;
    rbd?: SerializedRBDPersistentVolumeSource;
    scaleIO?: SerializedScaleIOPersistentVolumeSource;
    storageClassName?: string;
    storageos?: SerializedStorageOSPersistentVolumeSource;
    volumeMode?: string;
    vsphereVolume?: SerializedVsphereVirtualDiskVolumeSource;
};

export function serializePersistentVolumeSpec(options: undefined): undefined;
export function serializePersistentVolumeSpec(
    options: PersistentVolumeSpec
): SerializedPersistentVolumeSpec;
export function serializePersistentVolumeSpec(
    options: PersistentVolumeSpec | undefined
): SerializedPersistentVolumeSpec | undefined;
export function serializePersistentVolumeSpec(
    options: PersistentVolumeSpec | undefined
): SerializedPersistentVolumeSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPersistentVolumeSpec = {
        accessModes: prelude.serialize(options.accessModes, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        awsElasticBlockStore: serializeAWSElasticBlockStoreVolumeSource(
            options.awsElasticBlockStore
        ),
        azureDisk: serializeAzureDiskVolumeSource(options.azureDisk),
        azureFile: serializeAzureFilePersistentVolumeSource(options.azureFile),
        capacity:
            options.capacity === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.capacity,
                      Object.entries(options.capacity).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        cephfs: serializeCephFSPersistentVolumeSource(options.cephfs),
        cinder: serializeCinderPersistentVolumeSource(options.cinder),
        claimRef: serializeObjectReference(options.claimRef),
        csi: serializeCSIPersistentVolumeSource(options.csi),
        fc: serializeFCVolumeSource(options.fc),
        flexVolume: serializeFlexPersistentVolumeSource(options.flexVolume),
        flocker: serializeFlockerVolumeSource(options.flocker),
        gcePersistentDisk: serializeGCEPersistentDiskVolumeSource(
            options.gcePersistentDisk
        ),
        glusterfs: serializeGlusterfsPersistentVolumeSource(options.glusterfs),
        hostPath: serializeHostPathVolumeSource(options.hostPath),
        iscsi: serializeISCSIPersistentVolumeSource(options.iscsi),
        local: serializeLocalVolumeSource(options.local),
        mountOptions: prelude.serialize(options.mountOptions, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        nfs: serializeNFSVolumeSource(options.nfs),
        nodeAffinity: serializeVolumeNodeAffinity(options.nodeAffinity),
        persistentVolumeReclaimPolicy: options.persistentVolumeReclaimPolicy,
        photonPersistentDisk: serializePhotonPersistentDiskVolumeSource(
            options.photonPersistentDisk
        ),
        portworxVolume: serializePortworxVolumeSource(options.portworxVolume),
        quobyte: serializeQuobyteVolumeSource(options.quobyte),
        rbd: serializeRBDPersistentVolumeSource(options.rbd),
        scaleIO: serializeScaleIOPersistentVolumeSource(options.scaleIO),
        storageClassName: options.storageClassName,
        storageos: serializeStorageOSPersistentVolumeSource(options.storageos),
        volumeMode: options.volumeMode,
        vsphereVolume: serializeVsphereVirtualDiskVolumeSource(
            options.vsphereVolume
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type PersistentVolumeClaimSpec = {
    readonly accessModes?: Array<string>;
    readonly dataSource?: TypedLocalObjectReference;
    readonly dataSourceRef?: TypedLocalObjectReference;
    readonly resources?: ResourceRequirements;
    readonly selector?: LabelSelector;
    readonly storageClassName?: string;
    readonly volumeMode?: string;
    readonly volumeName?: string;
};

export type SerializedPersistentVolumeClaimSpec = {
    accessModes?: Array<string>;
    dataSource?: SerializedTypedLocalObjectReference;
    dataSourceRef?: SerializedTypedLocalObjectReference;
    resources?: SerializedResourceRequirements;
    selector?: SerializedLabelSelector;
    storageClassName?: string;
    volumeMode?: string;
    volumeName?: string;
};

export function serializePersistentVolumeClaimSpec(
    options: undefined
): undefined;
export function serializePersistentVolumeClaimSpec(
    options: PersistentVolumeClaimSpec
): SerializedPersistentVolumeClaimSpec;
export function serializePersistentVolumeClaimSpec(
    options: PersistentVolumeClaimSpec | undefined
): SerializedPersistentVolumeClaimSpec | undefined;
export function serializePersistentVolumeClaimSpec(
    options: PersistentVolumeClaimSpec | undefined
): SerializedPersistentVolumeClaimSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPersistentVolumeClaimSpec = {
        accessModes: prelude.serialize(options.accessModes, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        dataSource: serializeTypedLocalObjectReference(options.dataSource),
        dataSourceRef: serializeTypedLocalObjectReference(
            options.dataSourceRef
        ),
        resources: serializeResourceRequirements(options.resources),
        selector: serializeLabelSelector(options.selector),
        storageClassName: options.storageClassName,
        volumeMode: options.volumeMode,
        volumeName: options.volumeName,
    };

    return senchou.wrapTemplate(options, result);
}

export type PodSpec = {
    readonly activeDeadlineSeconds?: number;
    readonly affinity?: Affinity;
    readonly automountServiceAccountToken?: boolean;
    readonly containers: Array<Container>;
    readonly dnsConfig?: PodDNSConfig;
    readonly dnsPolicy?: string;
    readonly enableServiceLinks?: boolean;
    readonly ephemeralContainers?: Array<EphemeralContainer>;
    readonly hostAliases?: Array<HostAlias>;
    readonly hostIPC?: boolean;
    readonly hostNetwork?: boolean;
    readonly hostPID?: boolean;
    readonly hostname?: string;
    readonly imagePullSecrets?: Array<LocalObjectReference>;
    readonly initContainers?: Array<Container>;
    readonly nodeName?: string;
    readonly nodeSelector?: { [key: string]: string };
    readonly overhead?: { [key: string]: Quantity };
    readonly preemptionPolicy?: string;
    readonly priority?: number;
    readonly priorityClassName?: string;
    readonly readinessGates?: Array<PodReadinessGate>;
    readonly restartPolicy?: string;
    readonly runtimeClassName?: string;
    readonly schedulerName?: string;
    readonly securityContext?: PodSecurityContext;
    readonly serviceAccount?: string;
    readonly serviceAccountName?: string;
    readonly setHostnameAsFQDN?: boolean;
    readonly shareProcessNamespace?: boolean;
    readonly subdomain?: string;
    readonly terminationGracePeriodSeconds?: number;
    readonly tolerations?: Array<Toleration>;
    readonly topologySpreadConstraints?: Array<TopologySpreadConstraint>;
    readonly volumes?: Array<Volume>;
};

export type SerializedPodSpec = {
    activeDeadlineSeconds?: number;
    affinity?: SerializedAffinity;
    automountServiceAccountToken?: boolean;
    containers: Array<SerializedContainer>;
    dnsConfig?: SerializedPodDNSConfig;
    dnsPolicy?: string;
    enableServiceLinks?: boolean;
    ephemeralContainers?: Array<SerializedEphemeralContainer>;
    hostAliases?: Array<SerializedHostAlias>;
    hostIPC?: boolean;
    hostNetwork?: boolean;
    hostPID?: boolean;
    hostname?: string;
    imagePullSecrets?: Array<SerializedLocalObjectReference>;
    initContainers?: Array<SerializedContainer>;
    nodeName?: string;
    nodeSelector?: { [key: string]: string };
    overhead?: { [key: string]: Quantity };
    preemptionPolicy?: string;
    priority?: number;
    priorityClassName?: string;
    readinessGates?: Array<SerializedPodReadinessGate>;
    restartPolicy?: string;
    runtimeClassName?: string;
    schedulerName?: string;
    securityContext?: SerializedPodSecurityContext;
    serviceAccount?: string;
    serviceAccountName?: string;
    setHostnameAsFQDN?: boolean;
    shareProcessNamespace?: boolean;
    subdomain?: string;
    terminationGracePeriodSeconds?: number;
    tolerations?: Array<SerializedToleration>;
    topologySpreadConstraints?: Array<SerializedTopologySpreadConstraint>;
    volumes?: Array<SerializedVolume>;
};

export function serializePodSpec(options: undefined): undefined;
export function serializePodSpec(options: PodSpec): SerializedPodSpec;
export function serializePodSpec(
    options: PodSpec | undefined
): SerializedPodSpec | undefined;
export function serializePodSpec(
    options: PodSpec | undefined
): SerializedPodSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPodSpec = {
        activeDeadlineSeconds: options.activeDeadlineSeconds,
        affinity: serializeAffinity(options.affinity),
        automountServiceAccountToken: options.automountServiceAccountToken,
        containers: prelude.serialize(options.containers, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeContainer(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        dnsConfig: serializePodDNSConfig(options.dnsConfig),
        dnsPolicy: options.dnsPolicy,
        enableServiceLinks: options.enableServiceLinks,
        ephemeralContainers: prelude.serialize(
            options.ephemeralContainers,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items
                        .map((item) => serializeEphemeralContainer(item))
                        .filter(prelude.isNotUndefined)
                )
        ),
        hostAliases: prelude.serialize(options.hostAliases, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeHostAlias(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        hostIPC: options.hostIPC,
        hostNetwork: options.hostNetwork,
        hostPID: options.hostPID,
        hostname: options.hostname,
        imagePullSecrets: prelude.serialize(options.imagePullSecrets, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeLocalObjectReference(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        initContainers: prelude.serialize(options.initContainers, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeContainer(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        nodeName: options.nodeName,
        nodeSelector:
            options.nodeSelector === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.nodeSelector,
                      Object.entries(options.nodeSelector).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        overhead:
            options.overhead === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.overhead,
                      Object.entries(options.overhead).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        preemptionPolicy: options.preemptionPolicy,
        priority: options.priority,
        priorityClassName: options.priorityClassName,
        readinessGates: prelude.serialize(options.readinessGates, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializePodReadinessGate(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        restartPolicy: options.restartPolicy,
        runtimeClassName: options.runtimeClassName,
        schedulerName: options.schedulerName,
        securityContext: serializePodSecurityContext(options.securityContext),
        serviceAccount: options.serviceAccount,
        serviceAccountName: options.serviceAccountName,
        setHostnameAsFQDN: options.setHostnameAsFQDN,
        shareProcessNamespace: options.shareProcessNamespace,
        subdomain: options.subdomain,
        terminationGracePeriodSeconds: options.terminationGracePeriodSeconds,
        tolerations: prelude.serialize(options.tolerations, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeToleration(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        topologySpreadConstraints: prelude.serialize(
            options.topologySpreadConstraints,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items
                        .map((item) => serializeTopologySpreadConstraint(item))
                        .filter(prelude.isNotUndefined)
                )
        ),
        volumes: prelude.serialize(options.volumes, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeVolume(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type PodTemplateSpec = {
    readonly metadata?: ObjectMeta;
    readonly spec?: PodSpec;
};

export type SerializedPodTemplateSpec = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedPodSpec;
};

export function serializePodTemplateSpec(options: undefined): undefined;
export function serializePodTemplateSpec(
    options: PodTemplateSpec
): SerializedPodTemplateSpec;
export function serializePodTemplateSpec(
    options: PodTemplateSpec | undefined
): SerializedPodTemplateSpec | undefined;
export function serializePodTemplateSpec(
    options: PodTemplateSpec | undefined
): SerializedPodTemplateSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPodTemplateSpec = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializePodSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type ReplicationControllerSpec = {
    readonly minReadySeconds?: number;
    readonly replicas?: number;
    readonly selector?: { [key: string]: string };
    readonly template?: PodTemplateSpec;
};

export type SerializedReplicationControllerSpec = {
    minReadySeconds?: number;
    replicas?: number;
    selector?: { [key: string]: string };
    template?: SerializedPodTemplateSpec;
};

export function serializeReplicationControllerSpec(
    options: undefined
): undefined;
export function serializeReplicationControllerSpec(
    options: ReplicationControllerSpec
): SerializedReplicationControllerSpec;
export function serializeReplicationControllerSpec(
    options: ReplicationControllerSpec | undefined
): SerializedReplicationControllerSpec | undefined;
export function serializeReplicationControllerSpec(
    options: ReplicationControllerSpec | undefined
): SerializedReplicationControllerSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedReplicationControllerSpec = {
        minReadySeconds: options.minReadySeconds,
        replicas: options.replicas,
        selector:
            options.selector === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.selector,
                      Object.entries(options.selector).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        template: serializePodTemplateSpec(options.template),
    };

    return senchou.wrapTemplate(options, result);
}

export type ResourceQuotaSpec = {
    readonly hard?: { [key: string]: Quantity };
    readonly scopeSelector?: ScopeSelector;
    readonly scopes?: Array<string>;
};

export type SerializedResourceQuotaSpec = {
    hard?: { [key: string]: Quantity };
    scopeSelector?: SerializedScopeSelector;
    scopes?: Array<string>;
};

export function serializeResourceQuotaSpec(options: undefined): undefined;
export function serializeResourceQuotaSpec(
    options: ResourceQuotaSpec
): SerializedResourceQuotaSpec;
export function serializeResourceQuotaSpec(
    options: ResourceQuotaSpec | undefined
): SerializedResourceQuotaSpec | undefined;
export function serializeResourceQuotaSpec(
    options: ResourceQuotaSpec | undefined
): SerializedResourceQuotaSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedResourceQuotaSpec = {
        hard:
            options.hard === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.hard,
                      Object.entries(options.hard).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        scopeSelector: serializeScopeSelector(options.scopeSelector),
        scopes: prelude.serialize(options.scopes, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type ServiceSpec = {
    readonly allocateLoadBalancerNodePorts?: boolean;
    readonly clusterIP?: string;
    readonly clusterIPs?: Array<string>;
    readonly externalIPs?: Array<string>;
    readonly externalName?: string;
    readonly externalTrafficPolicy?: string;
    readonly healthCheckNodePort?: number;
    readonly internalTrafficPolicy?: string;
    readonly ipFamilies?: Array<string>;
    readonly ipFamilyPolicy?: string;
    readonly loadBalancerClass?: string;
    readonly loadBalancerIP?: string;
    readonly loadBalancerSourceRanges?: Array<string>;
    readonly ports?: Array<ServicePort>;
    readonly publishNotReadyAddresses?: boolean;
    readonly selector?: { [key: string]: string };
    readonly sessionAffinity?: string;
    readonly sessionAffinityConfig?: SessionAffinityConfig;
    readonly type?: string;
};

export type SerializedServiceSpec = {
    allocateLoadBalancerNodePorts?: boolean;
    clusterIP?: string;
    clusterIPs?: Array<string>;
    externalIPs?: Array<string>;
    externalName?: string;
    externalTrafficPolicy?: string;
    healthCheckNodePort?: number;
    internalTrafficPolicy?: string;
    ipFamilies?: Array<string>;
    ipFamilyPolicy?: string;
    loadBalancerClass?: string;
    loadBalancerIP?: string;
    loadBalancerSourceRanges?: Array<string>;
    ports?: Array<SerializedServicePort>;
    publishNotReadyAddresses?: boolean;
    selector?: { [key: string]: string };
    sessionAffinity?: string;
    sessionAffinityConfig?: SerializedSessionAffinityConfig;
    type?: string;
};

export function serializeServiceSpec(options: undefined): undefined;
export function serializeServiceSpec(
    options: ServiceSpec
): SerializedServiceSpec;
export function serializeServiceSpec(
    options: ServiceSpec | undefined
): SerializedServiceSpec | undefined;
export function serializeServiceSpec(
    options: ServiceSpec | undefined
): SerializedServiceSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedServiceSpec = {
        allocateLoadBalancerNodePorts: options.allocateLoadBalancerNodePorts,
        clusterIP: options.clusterIP,
        clusterIPs: prelude.serialize(options.clusterIPs, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        externalIPs: prelude.serialize(options.externalIPs, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        externalName: options.externalName,
        externalTrafficPolicy: options.externalTrafficPolicy,
        healthCheckNodePort: options.healthCheckNodePort,
        internalTrafficPolicy: options.internalTrafficPolicy,
        ipFamilies: prelude.serialize(options.ipFamilies, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        ipFamilyPolicy: options.ipFamilyPolicy,
        loadBalancerClass: options.loadBalancerClass,
        loadBalancerIP: options.loadBalancerIP,
        loadBalancerSourceRanges: prelude.serialize(
            options.loadBalancerSourceRanges,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items.map((item) => item).filter(prelude.isNotUndefined)
                )
        ),
        ports: prelude.serialize(options.ports, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeServicePort(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        publishNotReadyAddresses: options.publishNotReadyAddresses,
        selector:
            options.selector === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.selector,
                      Object.entries(options.selector).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        sessionAffinity: options.sessionAffinity,
        sessionAffinityConfig: serializeSessionAffinityConfig(
            options.sessionAffinityConfig
        ),
        type: options.type,
    };

    return senchou.wrapTemplate(options, result);
}

export type LocalObjectReference = {
    readonly name?: string;
};

export type SerializedLocalObjectReference = {
    name?: string;
};

export function serializeLocalObjectReference(options: undefined): undefined;
export function serializeLocalObjectReference(
    options: LocalObjectReference
): SerializedLocalObjectReference;
export function serializeLocalObjectReference(
    options: LocalObjectReference | undefined
): SerializedLocalObjectReference | undefined;
export function serializeLocalObjectReference(
    options: LocalObjectReference | undefined
): SerializedLocalObjectReference | undefined {
    if (options === undefined) return undefined;
    const result: SerializedLocalObjectReference = {
        name: options.name,
    };

    return senchou.wrapTemplate(options, result);
}

export type Endpoint = {
    readonly addresses: Array<string>;
    readonly conditions?: EndpointConditions;
    readonly deprecatedTopology?: { [key: string]: string };
    readonly hints?: EndpointHints;
    readonly hostname?: string;
    readonly nodeName?: string;
    readonly targetRef?: ObjectReference;
    readonly zone?: string;
};

export type SerializedEndpoint = {
    addresses: Array<string>;
    conditions?: SerializedEndpointConditions;
    deprecatedTopology?: { [key: string]: string };
    hints?: SerializedEndpointHints;
    hostname?: string;
    nodeName?: string;
    targetRef?: SerializedObjectReference;
    zone?: string;
};

export function serializeEndpoint(options: undefined): undefined;
export function serializeEndpoint(options: Endpoint): SerializedEndpoint;
export function serializeEndpoint(
    options: Endpoint | undefined
): SerializedEndpoint | undefined;
export function serializeEndpoint(
    options: Endpoint | undefined
): SerializedEndpoint | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEndpoint = {
        addresses: prelude.serialize(options.addresses, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        conditions: serializeEndpointConditions(options.conditions),
        deprecatedTopology:
            options.deprecatedTopology === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.deprecatedTopology,
                      Object.entries(options.deprecatedTopology).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        hints: serializeEndpointHints(options.hints),
        hostname: options.hostname,
        nodeName: options.nodeName,
        targetRef: serializeObjectReference(options.targetRef),
        zone: options.zone,
    };

    return senchou.wrapTemplate(options, result);
}

export type EndpointPort = {
    readonly appProtocol?: string;
    readonly name?: string;
    readonly port: number;
    readonly protocol?: string;
};

export type SerializedEndpointPort = {
    appProtocol?: string;
    name?: string;
    port: number;
    protocol?: string;
};

export function serializeEndpointPort(options: undefined): undefined;
export function serializeEndpointPort(
    options: EndpointPort
): SerializedEndpointPort;
export function serializeEndpointPort(
    options: EndpointPort | undefined
): SerializedEndpointPort | undefined;
export function serializeEndpointPort(
    options: EndpointPort | undefined
): SerializedEndpointPort | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEndpointPort = {
        appProtocol: options.appProtocol,
        name: options.name,
        port: options.port,
        protocol: options.protocol,
    };

    return senchou.wrapTemplate(options, result);
}

export type EndpointV1Beta1 = {
    readonly addresses: Array<string>;
    readonly conditions?: EndpointConditionsV1Beta1;
    readonly hints?: EndpointHintsV1Beta1;
    readonly hostname?: string;
    readonly nodeName?: string;
    readonly targetRef?: ObjectReference;
    readonly topology?: { [key: string]: string };
};

export type SerializedEndpointV1Beta1 = {
    addresses: Array<string>;
    conditions?: SerializedEndpointConditionsV1Beta1;
    hints?: SerializedEndpointHintsV1Beta1;
    hostname?: string;
    nodeName?: string;
    targetRef?: SerializedObjectReference;
    topology?: { [key: string]: string };
};

export function serializeEndpointV1Beta1(options: undefined): undefined;
export function serializeEndpointV1Beta1(
    options: EndpointV1Beta1
): SerializedEndpointV1Beta1;
export function serializeEndpointV1Beta1(
    options: EndpointV1Beta1 | undefined
): SerializedEndpointV1Beta1 | undefined;
export function serializeEndpointV1Beta1(
    options: EndpointV1Beta1 | undefined
): SerializedEndpointV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEndpointV1Beta1 = {
        addresses: prelude.serialize(options.addresses, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        conditions: serializeEndpointConditionsV1Beta1(options.conditions),
        hints: serializeEndpointHintsV1Beta1(options.hints),
        hostname: options.hostname,
        nodeName: options.nodeName,
        targetRef: serializeObjectReference(options.targetRef),
        topology:
            options.topology === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.topology,
                      Object.entries(options.topology).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
    };

    return senchou.wrapTemplate(options, result);
}

export type EndpointPortV1Beta1 = {
    readonly appProtocol?: string;
    readonly name?: string;
    readonly port?: number;
    readonly protocol?: string;
};

export type SerializedEndpointPortV1Beta1 = {
    appProtocol?: string;
    name?: string;
    port?: number;
    protocol?: string;
};

export function serializeEndpointPortV1Beta1(options: undefined): undefined;
export function serializeEndpointPortV1Beta1(
    options: EndpointPortV1Beta1
): SerializedEndpointPortV1Beta1;
export function serializeEndpointPortV1Beta1(
    options: EndpointPortV1Beta1 | undefined
): SerializedEndpointPortV1Beta1 | undefined;
export function serializeEndpointPortV1Beta1(
    options: EndpointPortV1Beta1 | undefined
): SerializedEndpointPortV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEndpointPortV1Beta1 = {
        appProtocol: options.appProtocol,
        name: options.name,
        port: options.port,
        protocol: options.protocol,
    };

    return senchou.wrapTemplate(options, result);
}

export type EventSeriesV1Beta1 = {
    readonly count: number;
    readonly lastObservedTime: Date;
};

export type SerializedEventSeriesV1Beta1 = {
    count: number;
    lastObservedTime: string;
};

export function serializeEventSeriesV1Beta1(options: undefined): undefined;
export function serializeEventSeriesV1Beta1(
    options: EventSeriesV1Beta1
): SerializedEventSeriesV1Beta1;
export function serializeEventSeriesV1Beta1(
    options: EventSeriesV1Beta1 | undefined
): SerializedEventSeriesV1Beta1 | undefined;
export function serializeEventSeriesV1Beta1(
    options: EventSeriesV1Beta1 | undefined
): SerializedEventSeriesV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEventSeriesV1Beta1 = {
        count: options.count,
        lastObservedTime: options.lastObservedTime?.toISOString(),
    };

    return senchou.wrapTemplate(options, result);
}

export type FlowSchemaSpecV1Beta1 = {
    readonly distinguisherMethod?: FlowDistinguisherMethodV1Beta1;
    readonly matchingPrecedence?: number;
    readonly priorityLevelConfiguration: PriorityLevelConfigurationReferenceV1Beta1;
    readonly rules?: Array<PolicyRulesWithSubjectsV1Beta1>;
};

export type SerializedFlowSchemaSpecV1Beta1 = {
    distinguisherMethod?: SerializedFlowDistinguisherMethodV1Beta1;
    matchingPrecedence?: number;
    priorityLevelConfiguration: SerializedPriorityLevelConfigurationReferenceV1Beta1;
    rules?: Array<SerializedPolicyRulesWithSubjectsV1Beta1>;
};

export function serializeFlowSchemaSpecV1Beta1(options: undefined): undefined;
export function serializeFlowSchemaSpecV1Beta1(
    options: FlowSchemaSpecV1Beta1
): SerializedFlowSchemaSpecV1Beta1;
export function serializeFlowSchemaSpecV1Beta1(
    options: FlowSchemaSpecV1Beta1 | undefined
): SerializedFlowSchemaSpecV1Beta1 | undefined;
export function serializeFlowSchemaSpecV1Beta1(
    options: FlowSchemaSpecV1Beta1 | undefined
): SerializedFlowSchemaSpecV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedFlowSchemaSpecV1Beta1 = {
        distinguisherMethod: serializeFlowDistinguisherMethodV1Beta1(
            options.distinguisherMethod
        ),
        matchingPrecedence: options.matchingPrecedence,
        priorityLevelConfiguration: serializePriorityLevelConfigurationReferenceV1Beta1(
            options.priorityLevelConfiguration
        ),
        rules: prelude.serialize(options.rules, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) =>
                        serializePolicyRulesWithSubjectsV1Beta1(item)
                    )
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type PriorityLevelConfigurationSpecV1Beta1 = {
    readonly limited?: LimitedPriorityLevelConfigurationV1Beta1;
    readonly type: string;
};

export type SerializedPriorityLevelConfigurationSpecV1Beta1 = {
    limited?: SerializedLimitedPriorityLevelConfigurationV1Beta1;
    type: string;
};

export function serializePriorityLevelConfigurationSpecV1Beta1(
    options: undefined
): undefined;
export function serializePriorityLevelConfigurationSpecV1Beta1(
    options: PriorityLevelConfigurationSpecV1Beta1
): SerializedPriorityLevelConfigurationSpecV1Beta1;
export function serializePriorityLevelConfigurationSpecV1Beta1(
    options: PriorityLevelConfigurationSpecV1Beta1 | undefined
): SerializedPriorityLevelConfigurationSpecV1Beta1 | undefined;
export function serializePriorityLevelConfigurationSpecV1Beta1(
    options: PriorityLevelConfigurationSpecV1Beta1 | undefined
): SerializedPriorityLevelConfigurationSpecV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPriorityLevelConfigurationSpecV1Beta1 = {
        limited: serializeLimitedPriorityLevelConfigurationV1Beta1(
            options.limited
        ),
        type: options.type,
    };

    return senchou.wrapTemplate(options, result);
}

export type IngressSpec = {
    readonly defaultBackend?: IngressBackend;
    readonly ingressClassName?: string;
    readonly rules?: Array<IngressRule>;
    readonly tls?: Array<IngressTLS>;
};

export type SerializedIngressSpec = {
    defaultBackend?: SerializedIngressBackend;
    ingressClassName?: string;
    rules?: Array<SerializedIngressRule>;
    tls?: Array<SerializedIngressTLS>;
};

export function serializeIngressSpec(options: undefined): undefined;
export function serializeIngressSpec(
    options: IngressSpec
): SerializedIngressSpec;
export function serializeIngressSpec(
    options: IngressSpec | undefined
): SerializedIngressSpec | undefined;
export function serializeIngressSpec(
    options: IngressSpec | undefined
): SerializedIngressSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedIngressSpec = {
        defaultBackend: serializeIngressBackend(options.defaultBackend),
        ingressClassName: options.ingressClassName,
        rules: prelude.serialize(options.rules, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeIngressRule(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        tls: prelude.serialize(options.tls, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeIngressTLS(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type IngressClassSpec = {
    readonly controller?: string;
    readonly parameters?: IngressClassParametersReference;
};

export type SerializedIngressClassSpec = {
    controller?: string;
    parameters?: SerializedIngressClassParametersReference;
};

export function serializeIngressClassSpec(options: undefined): undefined;
export function serializeIngressClassSpec(
    options: IngressClassSpec
): SerializedIngressClassSpec;
export function serializeIngressClassSpec(
    options: IngressClassSpec | undefined
): SerializedIngressClassSpec | undefined;
export function serializeIngressClassSpec(
    options: IngressClassSpec | undefined
): SerializedIngressClassSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedIngressClassSpec = {
        controller: options.controller,
        parameters: serializeIngressClassParametersReference(
            options.parameters
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type NetworkPolicySpec = {
    readonly egress?: Array<NetworkPolicyEgressRule>;
    readonly ingress?: Array<NetworkPolicyIngressRule>;
    readonly podSelector: LabelSelector;
    readonly policyTypes?: Array<string>;
};

export type SerializedNetworkPolicySpec = {
    egress?: Array<SerializedNetworkPolicyEgressRule>;
    ingress?: Array<SerializedNetworkPolicyIngressRule>;
    podSelector: SerializedLabelSelector;
    policyTypes?: Array<string>;
};

export function serializeNetworkPolicySpec(options: undefined): undefined;
export function serializeNetworkPolicySpec(
    options: NetworkPolicySpec
): SerializedNetworkPolicySpec;
export function serializeNetworkPolicySpec(
    options: NetworkPolicySpec | undefined
): SerializedNetworkPolicySpec | undefined;
export function serializeNetworkPolicySpec(
    options: NetworkPolicySpec | undefined
): SerializedNetworkPolicySpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedNetworkPolicySpec = {
        egress: prelude.serialize(options.egress, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeNetworkPolicyEgressRule(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        ingress: prelude.serialize(options.ingress, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeNetworkPolicyIngressRule(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        podSelector: serializeLabelSelector(options.podSelector),
        policyTypes: prelude.serialize(options.policyTypes, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type Overhead = {
    readonly podFixed?: { [key: string]: Quantity };
};

export type SerializedOverhead = {
    podFixed?: { [key: string]: Quantity };
};

export function serializeOverhead(options: undefined): undefined;
export function serializeOverhead(options: Overhead): SerializedOverhead;
export function serializeOverhead(
    options: Overhead | undefined
): SerializedOverhead | undefined;
export function serializeOverhead(
    options: Overhead | undefined
): SerializedOverhead | undefined {
    if (options === undefined) return undefined;
    const result: SerializedOverhead = {
        podFixed:
            options.podFixed === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.podFixed,
                      Object.entries(options.podFixed).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
    };

    return senchou.wrapTemplate(options, result);
}

export type Scheduling = {
    readonly nodeSelector?: { [key: string]: string };
    readonly tolerations?: Array<Toleration>;
};

export type SerializedScheduling = {
    nodeSelector?: { [key: string]: string };
    tolerations?: Array<SerializedToleration>;
};

export function serializeScheduling(options: undefined): undefined;
export function serializeScheduling(options: Scheduling): SerializedScheduling;
export function serializeScheduling(
    options: Scheduling | undefined
): SerializedScheduling | undefined;
export function serializeScheduling(
    options: Scheduling | undefined
): SerializedScheduling | undefined {
    if (options === undefined) return undefined;
    const result: SerializedScheduling = {
        nodeSelector:
            options.nodeSelector === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.nodeSelector,
                      Object.entries(options.nodeSelector).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        tolerations: prelude.serialize(options.tolerations, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeToleration(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type RuntimeClassSpecV1Alpha1 = {
    readonly overhead?: OverheadV1Alpha1;
    readonly runtimeHandler: string;
    readonly scheduling?: SchedulingV1Alpha1;
};

export type SerializedRuntimeClassSpecV1Alpha1 = {
    overhead?: SerializedOverheadV1Alpha1;
    runtimeHandler: string;
    scheduling?: SerializedSchedulingV1Alpha1;
};

export function serializeRuntimeClassSpecV1Alpha1(
    options: undefined
): undefined;
export function serializeRuntimeClassSpecV1Alpha1(
    options: RuntimeClassSpecV1Alpha1
): SerializedRuntimeClassSpecV1Alpha1;
export function serializeRuntimeClassSpecV1Alpha1(
    options: RuntimeClassSpecV1Alpha1 | undefined
): SerializedRuntimeClassSpecV1Alpha1 | undefined;
export function serializeRuntimeClassSpecV1Alpha1(
    options: RuntimeClassSpecV1Alpha1 | undefined
): SerializedRuntimeClassSpecV1Alpha1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRuntimeClassSpecV1Alpha1 = {
        overhead: serializeOverheadV1Alpha1(options.overhead),
        runtimeHandler: options.runtimeHandler,
        scheduling: serializeSchedulingV1Alpha1(options.scheduling),
    };

    return senchou.wrapTemplate(options, result);
}

export type OverheadV1Beta1 = {
    readonly podFixed?: { [key: string]: Quantity };
};

export type SerializedOverheadV1Beta1 = {
    podFixed?: { [key: string]: Quantity };
};

export function serializeOverheadV1Beta1(options: undefined): undefined;
export function serializeOverheadV1Beta1(
    options: OverheadV1Beta1
): SerializedOverheadV1Beta1;
export function serializeOverheadV1Beta1(
    options: OverheadV1Beta1 | undefined
): SerializedOverheadV1Beta1 | undefined;
export function serializeOverheadV1Beta1(
    options: OverheadV1Beta1 | undefined
): SerializedOverheadV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedOverheadV1Beta1 = {
        podFixed:
            options.podFixed === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.podFixed,
                      Object.entries(options.podFixed).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
    };

    return senchou.wrapTemplate(options, result);
}

export type SchedulingV1Beta1 = {
    readonly nodeSelector?: { [key: string]: string };
    readonly tolerations?: Array<Toleration>;
};

export type SerializedSchedulingV1Beta1 = {
    nodeSelector?: { [key: string]: string };
    tolerations?: Array<SerializedToleration>;
};

export function serializeSchedulingV1Beta1(options: undefined): undefined;
export function serializeSchedulingV1Beta1(
    options: SchedulingV1Beta1
): SerializedSchedulingV1Beta1;
export function serializeSchedulingV1Beta1(
    options: SchedulingV1Beta1 | undefined
): SerializedSchedulingV1Beta1 | undefined;
export function serializeSchedulingV1Beta1(
    options: SchedulingV1Beta1 | undefined
): SerializedSchedulingV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSchedulingV1Beta1 = {
        nodeSelector:
            options.nodeSelector === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.nodeSelector,
                      Object.entries(options.nodeSelector).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        tolerations: prelude.serialize(options.tolerations, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeToleration(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type DeleteOptions = {
    readonly apiVersion?: string;
    readonly dryRun?: Array<string>;
    readonly gracePeriodSeconds?: number;
    readonly kind?: Kind;
    readonly orphanDependents?: boolean;
    readonly preconditions?: Preconditions;
    readonly propagationPolicy?: string;
};

export type SerializedDeleteOptions = {
    apiVersion?: string;
    dryRun?: Array<string>;
    gracePeriodSeconds?: number;
    kind?: Kind;
    orphanDependents?: boolean;
    preconditions?: SerializedPreconditions;
    propagationPolicy?: string;
};

export function serializeDeleteOptions(options: undefined): undefined;
export function serializeDeleteOptions(
    options: DeleteOptions
): SerializedDeleteOptions;
export function serializeDeleteOptions(
    options: DeleteOptions | undefined
): SerializedDeleteOptions | undefined;
export function serializeDeleteOptions(
    options: DeleteOptions | undefined
): SerializedDeleteOptions | undefined {
    if (options === undefined) return undefined;
    const result: SerializedDeleteOptions = {
        apiVersion: options.apiVersion,
        dryRun: prelude.serialize(options.dryRun, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        gracePeriodSeconds: options.gracePeriodSeconds,
        kind: options.kind,
        orphanDependents: options.orphanDependents,
        preconditions: serializePreconditions(options.preconditions),
        propagationPolicy: options.propagationPolicy,
    };

    return senchou.wrapTemplate(options, result);
}

export type PodDisruptionBudgetSpec = {
    readonly maxUnavailable?: IntOrString;
    readonly minAvailable?: IntOrString;
    readonly selector?: LabelSelector;
};

export type SerializedPodDisruptionBudgetSpec = {
    maxUnavailable?: IntOrString;
    minAvailable?: IntOrString;
    selector?: SerializedLabelSelector;
};

export function serializePodDisruptionBudgetSpec(options: undefined): undefined;
export function serializePodDisruptionBudgetSpec(
    options: PodDisruptionBudgetSpec
): SerializedPodDisruptionBudgetSpec;
export function serializePodDisruptionBudgetSpec(
    options: PodDisruptionBudgetSpec | undefined
): SerializedPodDisruptionBudgetSpec | undefined;
export function serializePodDisruptionBudgetSpec(
    options: PodDisruptionBudgetSpec | undefined
): SerializedPodDisruptionBudgetSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPodDisruptionBudgetSpec = {
        maxUnavailable: options.maxUnavailable,
        minAvailable: options.minAvailable,
        selector: serializeLabelSelector(options.selector),
    };

    return senchou.wrapTemplate(options, result);
}

export type PodDisruptionBudgetSpecV1Beta1 = {
    readonly maxUnavailable?: IntOrString;
    readonly minAvailable?: IntOrString;
    readonly selector?: LabelSelector;
};

export type SerializedPodDisruptionBudgetSpecV1Beta1 = {
    maxUnavailable?: IntOrString;
    minAvailable?: IntOrString;
    selector?: SerializedLabelSelector;
};

export function serializePodDisruptionBudgetSpecV1Beta1(
    options: undefined
): undefined;
export function serializePodDisruptionBudgetSpecV1Beta1(
    options: PodDisruptionBudgetSpecV1Beta1
): SerializedPodDisruptionBudgetSpecV1Beta1;
export function serializePodDisruptionBudgetSpecV1Beta1(
    options: PodDisruptionBudgetSpecV1Beta1 | undefined
): SerializedPodDisruptionBudgetSpecV1Beta1 | undefined;
export function serializePodDisruptionBudgetSpecV1Beta1(
    options: PodDisruptionBudgetSpecV1Beta1 | undefined
): SerializedPodDisruptionBudgetSpecV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPodDisruptionBudgetSpecV1Beta1 = {
        maxUnavailable: options.maxUnavailable,
        minAvailable: options.minAvailable,
        selector: serializeLabelSelector(options.selector),
    };

    return senchou.wrapTemplate(options, result);
}

export type PodSecurityPolicySpecV1Beta1 = {
    readonly allowPrivilegeEscalation?: boolean;
    readonly allowedCSIDrivers?: Array<AllowedCSIDriverV1Beta1>;
    readonly allowedCapabilities?: Array<string>;
    readonly allowedFlexVolumes?: Array<AllowedFlexVolumeV1Beta1>;
    readonly allowedHostPaths?: Array<AllowedHostPathV1Beta1>;
    readonly allowedProcMountTypes?: Array<string>;
    readonly allowedUnsafeSysctls?: Array<string>;
    readonly defaultAddCapabilities?: Array<string>;
    readonly defaultAllowPrivilegeEscalation?: boolean;
    readonly forbiddenSysctls?: Array<string>;
    readonly fsGroup: FSGroupStrategyOptionsV1Beta1;
    readonly hostIPC?: boolean;
    readonly hostNetwork?: boolean;
    readonly hostPID?: boolean;
    readonly hostPorts?: Array<HostPortRangeV1Beta1>;
    readonly privileged?: boolean;
    readonly readOnlyRootFilesystem?: boolean;
    readonly requiredDropCapabilities?: Array<string>;
    readonly runAsGroup?: RunAsGroupStrategyOptionsV1Beta1;
    readonly runAsUser: RunAsUserStrategyOptionsV1Beta1;
    readonly runtimeClass?: RuntimeClassStrategyOptionsV1Beta1;
    readonly seLinux: SELinuxStrategyOptionsV1Beta1;
    readonly supplementalGroups: SupplementalGroupsStrategyOptionsV1Beta1;
    readonly volumes?: Array<string>;
};

export type SerializedPodSecurityPolicySpecV1Beta1 = {
    allowPrivilegeEscalation?: boolean;
    allowedCSIDrivers?: Array<SerializedAllowedCSIDriverV1Beta1>;
    allowedCapabilities?: Array<string>;
    allowedFlexVolumes?: Array<SerializedAllowedFlexVolumeV1Beta1>;
    allowedHostPaths?: Array<SerializedAllowedHostPathV1Beta1>;
    allowedProcMountTypes?: Array<string>;
    allowedUnsafeSysctls?: Array<string>;
    defaultAddCapabilities?: Array<string>;
    defaultAllowPrivilegeEscalation?: boolean;
    forbiddenSysctls?: Array<string>;
    fsGroup: SerializedFSGroupStrategyOptionsV1Beta1;
    hostIPC?: boolean;
    hostNetwork?: boolean;
    hostPID?: boolean;
    hostPorts?: Array<SerializedHostPortRangeV1Beta1>;
    privileged?: boolean;
    readOnlyRootFilesystem?: boolean;
    requiredDropCapabilities?: Array<string>;
    runAsGroup?: SerializedRunAsGroupStrategyOptionsV1Beta1;
    runAsUser: SerializedRunAsUserStrategyOptionsV1Beta1;
    runtimeClass?: SerializedRuntimeClassStrategyOptionsV1Beta1;
    seLinux: SerializedSELinuxStrategyOptionsV1Beta1;
    supplementalGroups: SerializedSupplementalGroupsStrategyOptionsV1Beta1;
    volumes?: Array<string>;
};

export function serializePodSecurityPolicySpecV1Beta1(
    options: undefined
): undefined;
export function serializePodSecurityPolicySpecV1Beta1(
    options: PodSecurityPolicySpecV1Beta1
): SerializedPodSecurityPolicySpecV1Beta1;
export function serializePodSecurityPolicySpecV1Beta1(
    options: PodSecurityPolicySpecV1Beta1 | undefined
): SerializedPodSecurityPolicySpecV1Beta1 | undefined;
export function serializePodSecurityPolicySpecV1Beta1(
    options: PodSecurityPolicySpecV1Beta1 | undefined
): SerializedPodSecurityPolicySpecV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPodSecurityPolicySpecV1Beta1 = {
        allowPrivilegeEscalation: options.allowPrivilegeEscalation,
        allowedCSIDrivers: prelude.serialize(
            options.allowedCSIDrivers,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items
                        .map((item) => serializeAllowedCSIDriverV1Beta1(item))
                        .filter(prelude.isNotUndefined)
                )
        ),
        allowedCapabilities: prelude.serialize(
            options.allowedCapabilities,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items.map((item) => item).filter(prelude.isNotUndefined)
                )
        ),
        allowedFlexVolumes: prelude.serialize(
            options.allowedFlexVolumes,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items
                        .map((item) => serializeAllowedFlexVolumeV1Beta1(item))
                        .filter(prelude.isNotUndefined)
                )
        ),
        allowedHostPaths: prelude.serialize(options.allowedHostPaths, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeAllowedHostPathV1Beta1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        allowedProcMountTypes: prelude.serialize(
            options.allowedProcMountTypes,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items.map((item) => item).filter(prelude.isNotUndefined)
                )
        ),
        allowedUnsafeSysctls: prelude.serialize(
            options.allowedUnsafeSysctls,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items.map((item) => item).filter(prelude.isNotUndefined)
                )
        ),
        defaultAddCapabilities: prelude.serialize(
            options.defaultAddCapabilities,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items.map((item) => item).filter(prelude.isNotUndefined)
                )
        ),
        defaultAllowPrivilegeEscalation:
            options.defaultAllowPrivilegeEscalation,
        forbiddenSysctls: prelude.serialize(options.forbiddenSysctls, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        fsGroup: serializeFSGroupStrategyOptionsV1Beta1(options.fsGroup),
        hostIPC: options.hostIPC,
        hostNetwork: options.hostNetwork,
        hostPID: options.hostPID,
        hostPorts: prelude.serialize(options.hostPorts, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeHostPortRangeV1Beta1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        privileged: options.privileged,
        readOnlyRootFilesystem: options.readOnlyRootFilesystem,
        requiredDropCapabilities: prelude.serialize(
            options.requiredDropCapabilities,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items.map((item) => item).filter(prelude.isNotUndefined)
                )
        ),
        runAsGroup: serializeRunAsGroupStrategyOptionsV1Beta1(
            options.runAsGroup
        ),
        runAsUser: serializeRunAsUserStrategyOptionsV1Beta1(options.runAsUser),
        runtimeClass: serializeRuntimeClassStrategyOptionsV1Beta1(
            options.runtimeClass
        ),
        seLinux: serializeSELinuxStrategyOptionsV1Beta1(options.seLinux),
        supplementalGroups: serializeSupplementalGroupsStrategyOptionsV1Beta1(
            options.supplementalGroups
        ),
        volumes: prelude.serialize(options.volumes, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type AggregationRule = {
    readonly clusterRoleSelectors?: Array<LabelSelector>;
};

export type SerializedAggregationRule = {
    clusterRoleSelectors?: Array<SerializedLabelSelector>;
};

export function serializeAggregationRule(options: undefined): undefined;
export function serializeAggregationRule(
    options: AggregationRule
): SerializedAggregationRule;
export function serializeAggregationRule(
    options: AggregationRule | undefined
): SerializedAggregationRule | undefined;
export function serializeAggregationRule(
    options: AggregationRule | undefined
): SerializedAggregationRule | undefined {
    if (options === undefined) return undefined;
    const result: SerializedAggregationRule = {
        clusterRoleSelectors: prelude.serialize(
            options.clusterRoleSelectors,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items
                        .map((item) => serializeLabelSelector(item))
                        .filter(prelude.isNotUndefined)
                )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type PolicyRule = {
    readonly apiGroups?: Array<string>;
    readonly nonResourceURLs?: Array<string>;
    readonly resourceNames?: Array<string>;
    readonly resources?: Array<string>;
    readonly verbs: Array<string>;
};

export type SerializedPolicyRule = {
    apiGroups?: Array<string>;
    nonResourceURLs?: Array<string>;
    resourceNames?: Array<string>;
    resources?: Array<string>;
    verbs: Array<string>;
};

export function serializePolicyRule(options: undefined): undefined;
export function serializePolicyRule(options: PolicyRule): SerializedPolicyRule;
export function serializePolicyRule(
    options: PolicyRule | undefined
): SerializedPolicyRule | undefined;
export function serializePolicyRule(
    options: PolicyRule | undefined
): SerializedPolicyRule | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPolicyRule = {
        apiGroups: prelude.serialize(options.apiGroups, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        nonResourceURLs: prelude.serialize(options.nonResourceURLs, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        resourceNames: prelude.serialize(options.resourceNames, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        resources: prelude.serialize(options.resources, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        verbs: prelude.serialize(options.verbs, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type RoleRef = {
    readonly apiGroup: string;
    readonly kind: string;
    readonly name: string;
};

export type SerializedRoleRef = {
    apiGroup: string;
    kind: string;
    name: string;
};

export function serializeRoleRef(options: undefined): undefined;
export function serializeRoleRef(options: RoleRef): SerializedRoleRef;
export function serializeRoleRef(
    options: RoleRef | undefined
): SerializedRoleRef | undefined;
export function serializeRoleRef(
    options: RoleRef | undefined
): SerializedRoleRef | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRoleRef = {
        apiGroup: options.apiGroup,
        kind: options.kind,
        name: options.name,
    };

    return senchou.wrapTemplate(options, result);
}

export type Subject = {
    readonly apiGroup?: string;
    readonly kind: string;
    readonly name: string;
    readonly namespace?: string;
};

export type SerializedSubject = {
    apiGroup?: string;
    kind: string;
    name: string;
    namespace?: string;
};

export function serializeSubject(options: undefined): undefined;
export function serializeSubject(options: Subject): SerializedSubject;
export function serializeSubject(
    options: Subject | undefined
): SerializedSubject | undefined;
export function serializeSubject(
    options: Subject | undefined
): SerializedSubject | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSubject = {
        apiGroup: options.apiGroup,
        kind: options.kind,
        name: options.name,
        namespace: options.namespace,
    };

    return senchou.wrapTemplate(options, result);
}

export type AggregationRuleV1Alpha1 = {
    readonly clusterRoleSelectors?: Array<LabelSelector>;
};

export type SerializedAggregationRuleV1Alpha1 = {
    clusterRoleSelectors?: Array<SerializedLabelSelector>;
};

export function serializeAggregationRuleV1Alpha1(options: undefined): undefined;
export function serializeAggregationRuleV1Alpha1(
    options: AggregationRuleV1Alpha1
): SerializedAggregationRuleV1Alpha1;
export function serializeAggregationRuleV1Alpha1(
    options: AggregationRuleV1Alpha1 | undefined
): SerializedAggregationRuleV1Alpha1 | undefined;
export function serializeAggregationRuleV1Alpha1(
    options: AggregationRuleV1Alpha1 | undefined
): SerializedAggregationRuleV1Alpha1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedAggregationRuleV1Alpha1 = {
        clusterRoleSelectors: prelude.serialize(
            options.clusterRoleSelectors,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items
                        .map((item) => serializeLabelSelector(item))
                        .filter(prelude.isNotUndefined)
                )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type PolicyRuleV1Alpha1 = {
    readonly apiGroups?: Array<string>;
    readonly nonResourceURLs?: Array<string>;
    readonly resourceNames?: Array<string>;
    readonly resources?: Array<string>;
    readonly verbs: Array<string>;
};

export type SerializedPolicyRuleV1Alpha1 = {
    apiGroups?: Array<string>;
    nonResourceURLs?: Array<string>;
    resourceNames?: Array<string>;
    resources?: Array<string>;
    verbs: Array<string>;
};

export function serializePolicyRuleV1Alpha1(options: undefined): undefined;
export function serializePolicyRuleV1Alpha1(
    options: PolicyRuleV1Alpha1
): SerializedPolicyRuleV1Alpha1;
export function serializePolicyRuleV1Alpha1(
    options: PolicyRuleV1Alpha1 | undefined
): SerializedPolicyRuleV1Alpha1 | undefined;
export function serializePolicyRuleV1Alpha1(
    options: PolicyRuleV1Alpha1 | undefined
): SerializedPolicyRuleV1Alpha1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPolicyRuleV1Alpha1 = {
        apiGroups: prelude.serialize(options.apiGroups, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        nonResourceURLs: prelude.serialize(options.nonResourceURLs, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        resourceNames: prelude.serialize(options.resourceNames, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        resources: prelude.serialize(options.resources, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        verbs: prelude.serialize(options.verbs, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type RoleRefV1Alpha1 = {
    readonly apiGroup: string;
    readonly kind: string;
    readonly name: string;
};

export type SerializedRoleRefV1Alpha1 = {
    apiGroup: string;
    kind: string;
    name: string;
};

export function serializeRoleRefV1Alpha1(options: undefined): undefined;
export function serializeRoleRefV1Alpha1(
    options: RoleRefV1Alpha1
): SerializedRoleRefV1Alpha1;
export function serializeRoleRefV1Alpha1(
    options: RoleRefV1Alpha1 | undefined
): SerializedRoleRefV1Alpha1 | undefined;
export function serializeRoleRefV1Alpha1(
    options: RoleRefV1Alpha1 | undefined
): SerializedRoleRefV1Alpha1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRoleRefV1Alpha1 = {
        apiGroup: options.apiGroup,
        kind: options.kind,
        name: options.name,
    };

    return senchou.wrapTemplate(options, result);
}

export type SubjectV1Alpha1 = {
    readonly apiVersion?: string;
    readonly kind: string;
    readonly name: string;
    readonly namespace?: string;
};

export type SerializedSubjectV1Alpha1 = {
    apiVersion?: string;
    kind: string;
    name: string;
    namespace?: string;
};

export function serializeSubjectV1Alpha1(options: undefined): undefined;
export function serializeSubjectV1Alpha1(
    options: SubjectV1Alpha1
): SerializedSubjectV1Alpha1;
export function serializeSubjectV1Alpha1(
    options: SubjectV1Alpha1 | undefined
): SerializedSubjectV1Alpha1 | undefined;
export function serializeSubjectV1Alpha1(
    options: SubjectV1Alpha1 | undefined
): SerializedSubjectV1Alpha1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSubjectV1Alpha1 = {
        apiVersion: options.apiVersion,
        kind: options.kind,
        name: options.name,
        namespace: options.namespace,
    };

    return senchou.wrapTemplate(options, result);
}

export type CSIDriverSpec = {
    readonly attachRequired?: boolean;
    readonly fsGroupPolicy?: string;
    readonly podInfoOnMount?: boolean;
    readonly requiresRepublish?: boolean;
    readonly storageCapacity?: boolean;
    readonly tokenRequests?: Array<TokenRequestProps>;
    readonly volumeLifecycleModes?: Array<string>;
};

export type SerializedCSIDriverSpec = {
    attachRequired?: boolean;
    fsGroupPolicy?: string;
    podInfoOnMount?: boolean;
    requiresRepublish?: boolean;
    storageCapacity?: boolean;
    tokenRequests?: Array<SerializedTokenRequest>;
    volumeLifecycleModes?: Array<string>;
};

export function serializeCSIDriverSpec(options: undefined): undefined;
export function serializeCSIDriverSpec(
    options: CSIDriverSpec
): SerializedCSIDriverSpec;
export function serializeCSIDriverSpec(
    options: CSIDriverSpec | undefined
): SerializedCSIDriverSpec | undefined;
export function serializeCSIDriverSpec(
    options: CSIDriverSpec | undefined
): SerializedCSIDriverSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCSIDriverSpec = {
        attachRequired: options.attachRequired,
        fsGroupPolicy: options.fsGroupPolicy,
        podInfoOnMount: options.podInfoOnMount,
        requiresRepublish: options.requiresRepublish,
        storageCapacity: options.storageCapacity,
        tokenRequests: prelude.serialize(options.tokenRequests, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => TokenRequest(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        volumeLifecycleModes: prelude.serialize(
            options.volumeLifecycleModes,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items.map((item) => item).filter(prelude.isNotUndefined)
                )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type CSINodeSpec = {
    readonly drivers: Array<CSINodeDriver>;
};

export type SerializedCSINodeSpec = {
    drivers: Array<SerializedCSINodeDriver>;
};

export function serializeCSINodeSpec(options: undefined): undefined;
export function serializeCSINodeSpec(
    options: CSINodeSpec
): SerializedCSINodeSpec;
export function serializeCSINodeSpec(
    options: CSINodeSpec | undefined
): SerializedCSINodeSpec | undefined;
export function serializeCSINodeSpec(
    options: CSINodeSpec | undefined
): SerializedCSINodeSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCSINodeSpec = {
        drivers: prelude.serialize(options.drivers, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeCSINodeDriver(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type TopologySelectorTerm = {
    readonly matchLabelExpressions?: Array<TopologySelectorLabelRequirement>;
};

export type SerializedTopologySelectorTerm = {
    matchLabelExpressions?: Array<SerializedTopologySelectorLabelRequirement>;
};

export function serializeTopologySelectorTerm(options: undefined): undefined;
export function serializeTopologySelectorTerm(
    options: TopologySelectorTerm
): SerializedTopologySelectorTerm;
export function serializeTopologySelectorTerm(
    options: TopologySelectorTerm | undefined
): SerializedTopologySelectorTerm | undefined;
export function serializeTopologySelectorTerm(
    options: TopologySelectorTerm | undefined
): SerializedTopologySelectorTerm | undefined {
    if (options === undefined) return undefined;
    const result: SerializedTopologySelectorTerm = {
        matchLabelExpressions: prelude.serialize(
            options.matchLabelExpressions,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items
                        .map((item) =>
                            serializeTopologySelectorLabelRequirement(item)
                        )
                        .filter(prelude.isNotUndefined)
                )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type VolumeAttachmentSpec = {
    readonly attacher: string;
    readonly nodeName: string;
    readonly source: VolumeAttachmentSource;
};

export type SerializedVolumeAttachmentSpec = {
    attacher: string;
    nodeName: string;
    source: SerializedVolumeAttachmentSource;
};

export function serializeVolumeAttachmentSpec(options: undefined): undefined;
export function serializeVolumeAttachmentSpec(
    options: VolumeAttachmentSpec
): SerializedVolumeAttachmentSpec;
export function serializeVolumeAttachmentSpec(
    options: VolumeAttachmentSpec | undefined
): SerializedVolumeAttachmentSpec | undefined;
export function serializeVolumeAttachmentSpec(
    options: VolumeAttachmentSpec | undefined
): SerializedVolumeAttachmentSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedVolumeAttachmentSpec = {
        attacher: options.attacher,
        nodeName: options.nodeName,
        source: serializeVolumeAttachmentSource(options.source),
    };

    return senchou.wrapTemplate(options, result);
}

export type Quantity = string | number;
export const isQuantity = (input: any): input is Quantity => {
    return ["string", "number"].includes(typeof input);
};

export type LabelSelector = {
    readonly matchExpressions?: Array<LabelSelectorRequirement>;
    readonly matchLabels?: { [key: string]: string };
};

export type SerializedLabelSelector = {
    matchExpressions?: Array<SerializedLabelSelectorRequirement>;
    matchLabels?: { [key: string]: string };
};

export function serializeLabelSelector(options: undefined): undefined;
export function serializeLabelSelector(
    options: LabelSelector
): SerializedLabelSelector;
export function serializeLabelSelector(
    options: LabelSelector | undefined
): SerializedLabelSelector | undefined;
export function serializeLabelSelector(
    options: LabelSelector | undefined
): SerializedLabelSelector | undefined {
    if (options === undefined) return undefined;
    const result: SerializedLabelSelector = {
        matchExpressions: prelude.serialize(options.matchExpressions, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeLabelSelectorRequirement(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        matchLabels:
            options.matchLabels === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.matchLabels,
                      Object.entries(options.matchLabels).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
    };

    return senchou.wrapTemplate(options, result);
}

export type VolumeAttachmentSpecV1Alpha1 = {
    readonly attacher: string;
    readonly nodeName: string;
    readonly source: VolumeAttachmentSourceV1Alpha1;
};

export type SerializedVolumeAttachmentSpecV1Alpha1 = {
    attacher: string;
    nodeName: string;
    source: SerializedVolumeAttachmentSourceV1Alpha1;
};

export function serializeVolumeAttachmentSpecV1Alpha1(
    options: undefined
): undefined;
export function serializeVolumeAttachmentSpecV1Alpha1(
    options: VolumeAttachmentSpecV1Alpha1
): SerializedVolumeAttachmentSpecV1Alpha1;
export function serializeVolumeAttachmentSpecV1Alpha1(
    options: VolumeAttachmentSpecV1Alpha1 | undefined
): SerializedVolumeAttachmentSpecV1Alpha1 | undefined;
export function serializeVolumeAttachmentSpecV1Alpha1(
    options: VolumeAttachmentSpecV1Alpha1 | undefined
): SerializedVolumeAttachmentSpecV1Alpha1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedVolumeAttachmentSpecV1Alpha1 = {
        attacher: options.attacher,
        nodeName: options.nodeName,
        source: serializeVolumeAttachmentSourceV1Alpha1(options.source),
    };

    return senchou.wrapTemplate(options, result);
}

export type CustomResourceDefinitionSpec = {
    readonly conversion?: CustomResourceConversion;
    readonly group: string;
    readonly names: CustomResourceDefinitionNames;
    readonly preserveUnknownFields?: boolean;
    readonly scope: string;
    readonly versions: Array<CustomResourceDefinitionVersion>;
};

export type SerializedCustomResourceDefinitionSpec = {
    conversion?: SerializedCustomResourceConversion;
    group: string;
    names: SerializedCustomResourceDefinitionNames;
    preserveUnknownFields?: boolean;
    scope: string;
    versions: Array<SerializedCustomResourceDefinitionVersion>;
};

export function serializeCustomResourceDefinitionSpec(
    options: undefined
): undefined;
export function serializeCustomResourceDefinitionSpec(
    options: CustomResourceDefinitionSpec
): SerializedCustomResourceDefinitionSpec;
export function serializeCustomResourceDefinitionSpec(
    options: CustomResourceDefinitionSpec | undefined
): SerializedCustomResourceDefinitionSpec | undefined;
export function serializeCustomResourceDefinitionSpec(
    options: CustomResourceDefinitionSpec | undefined
): SerializedCustomResourceDefinitionSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCustomResourceDefinitionSpec = {
        conversion: serializeCustomResourceConversion(options.conversion),
        group: options.group,
        names: serializeCustomResourceDefinitionNames(options.names),
        preserveUnknownFields: options.preserveUnknownFields,
        scope: options.scope,
        versions: prelude.serialize(options.versions, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) =>
                        serializeCustomResourceDefinitionVersion(item)
                    )
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type StatusDetails = {
    readonly causes?: Array<StatusCause>;
    readonly group?: string;
    readonly kind?: string;
    readonly name?: string;
    readonly retryAfterSeconds?: number;
    readonly uid?: string;
};

export type SerializedStatusDetails = {
    causes?: Array<SerializedStatusCause>;
    group?: string;
    kind?: string;
    name?: string;
    retryAfterSeconds?: number;
    uid?: string;
};

export function serializeStatusDetails(options: undefined): undefined;
export function serializeStatusDetails(
    options: StatusDetails
): SerializedStatusDetails;
export function serializeStatusDetails(
    options: StatusDetails | undefined
): SerializedStatusDetails | undefined;
export function serializeStatusDetails(
    options: StatusDetails | undefined
): SerializedStatusDetails | undefined {
    if (options === undefined) return undefined;
    const result: SerializedStatusDetails = {
        causes: prelude.serialize(options.causes, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeStatusCause(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        group: options.group,
        kind: options.kind,
        name: options.name,
        retryAfterSeconds: options.retryAfterSeconds,
        uid: options.uid,
    };

    return senchou.wrapTemplate(options, result);
}

export type APIServiceSpec = {
    readonly caBundle?: string;
    readonly group?: string;
    readonly groupPriorityMinimum: number;
    readonly insecureSkipTLSVerify?: boolean;
    readonly service?: ServiceReference;
    readonly version?: string;
    readonly versionPriority: number;
};

export type SerializedAPIServiceSpec = {
    caBundle?: string;
    group?: string;
    groupPriorityMinimum: number;
    insecureSkipTLSVerify?: boolean;
    service?: SerializedServiceReference;
    version?: string;
    versionPriority: number;
};

export function serializeAPIServiceSpec(options: undefined): undefined;
export function serializeAPIServiceSpec(
    options: APIServiceSpec
): SerializedAPIServiceSpec;
export function serializeAPIServiceSpec(
    options: APIServiceSpec | undefined
): SerializedAPIServiceSpec | undefined;
export function serializeAPIServiceSpec(
    options: APIServiceSpec | undefined
): SerializedAPIServiceSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedAPIServiceSpec = {
        caBundle: options.caBundle,
        group: options.group,
        groupPriorityMinimum: options.groupPriorityMinimum,
        insecureSkipTLSVerify: options.insecureSkipTLSVerify,
        service: serializeServiceReference(options.service),
        version: options.version,
        versionPriority: options.versionPriority,
    };

    return senchou.wrapTemplate(options, result);
}

export type ManagedFieldsEntry = {
    readonly apiVersion?: string;
    readonly fieldsType?: string;
    readonly fieldsV1?: any;
    readonly manager?: string;
    readonly operation?: string;
    readonly subresource?: string;
    readonly time?: Date;
};

export type SerializedManagedFieldsEntry = {
    apiVersion?: string;
    fieldsType?: string;
    fieldsV1?: any;
    manager?: string;
    operation?: string;
    subresource?: string;
    time?: string;
};

export function serializeManagedFieldsEntry(options: undefined): undefined;
export function serializeManagedFieldsEntry(
    options: ManagedFieldsEntry
): SerializedManagedFieldsEntry;
export function serializeManagedFieldsEntry(
    options: ManagedFieldsEntry | undefined
): SerializedManagedFieldsEntry | undefined;
export function serializeManagedFieldsEntry(
    options: ManagedFieldsEntry | undefined
): SerializedManagedFieldsEntry | undefined {
    if (options === undefined) return undefined;
    const result: SerializedManagedFieldsEntry = {
        apiVersion: options.apiVersion,
        fieldsType: options.fieldsType,
        fieldsV1: options.fieldsV1,
        manager: options.manager,
        operation: options.operation,
        subresource: options.subresource,
        time: options.time?.toISOString(),
    };

    return senchou.wrapTemplate(options, result);
}

export type OwnerReference = {
    readonly apiVersion: string;
    readonly blockOwnerDeletion?: boolean;
    readonly controller?: boolean;
    readonly kind: string;
    readonly name: string;
    readonly uid: string;
};

export type SerializedOwnerReference = {
    apiVersion: string;
    blockOwnerDeletion?: boolean;
    controller?: boolean;
    kind: string;
    name: string;
    uid: string;
};

export function serializeOwnerReference(options: undefined): undefined;
export function serializeOwnerReference(
    options: OwnerReference
): SerializedOwnerReference;
export function serializeOwnerReference(
    options: OwnerReference | undefined
): SerializedOwnerReference | undefined;
export function serializeOwnerReference(
    options: OwnerReference | undefined
): SerializedOwnerReference | undefined {
    if (options === undefined) return undefined;
    const result: SerializedOwnerReference = {
        apiVersion: options.apiVersion,
        blockOwnerDeletion: options.blockOwnerDeletion,
        controller: options.controller,
        kind: options.kind,
        name: options.name,
        uid: options.uid,
    };

    return senchou.wrapTemplate(options, result);
}

export type WebhookClientConfig = {
    readonly caBundle?: string;
    readonly service?: ServiceReference;
    readonly url?: string;
};

export type SerializedWebhookClientConfig = {
    caBundle?: string;
    service?: SerializedServiceReference;
    url?: string;
};

export function serializeWebhookClientConfig(options: undefined): undefined;
export function serializeWebhookClientConfig(
    options: WebhookClientConfig
): SerializedWebhookClientConfig;
export function serializeWebhookClientConfig(
    options: WebhookClientConfig | undefined
): SerializedWebhookClientConfig | undefined;
export function serializeWebhookClientConfig(
    options: WebhookClientConfig | undefined
): SerializedWebhookClientConfig | undefined {
    if (options === undefined) return undefined;
    const result: SerializedWebhookClientConfig = {
        caBundle: options.caBundle,
        service: serializeServiceReference(options.service),
        url: options.url,
    };

    return senchou.wrapTemplate(options, result);
}

export type RuleWithOperations = {
    readonly apiGroups?: Array<string>;
    readonly apiVersions?: Array<string>;
    readonly operations?: Array<string>;
    readonly resources?: Array<string>;
    readonly scope?: string;
};

export type SerializedRuleWithOperations = {
    apiGroups?: Array<string>;
    apiVersions?: Array<string>;
    operations?: Array<string>;
    resources?: Array<string>;
    scope?: string;
};

export function serializeRuleWithOperations(options: undefined): undefined;
export function serializeRuleWithOperations(
    options: RuleWithOperations
): SerializedRuleWithOperations;
export function serializeRuleWithOperations(
    options: RuleWithOperations | undefined
): SerializedRuleWithOperations | undefined;
export function serializeRuleWithOperations(
    options: RuleWithOperations | undefined
): SerializedRuleWithOperations | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRuleWithOperations = {
        apiGroups: prelude.serialize(options.apiGroups, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        apiVersions: prelude.serialize(options.apiVersions, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        operations: prelude.serialize(options.operations, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        resources: prelude.serialize(options.resources, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        scope: options.scope,
    };

    return senchou.wrapTemplate(options, result);
}

export type DaemonSetUpdateStrategy = {
    readonly rollingUpdate?: RollingUpdateDaemonSet;
    readonly type?: string;
};

export type SerializedDaemonSetUpdateStrategy = {
    rollingUpdate?: SerializedRollingUpdateDaemonSet;
    type?: string;
};

export function serializeDaemonSetUpdateStrategy(options: undefined): undefined;
export function serializeDaemonSetUpdateStrategy(
    options: DaemonSetUpdateStrategy
): SerializedDaemonSetUpdateStrategy;
export function serializeDaemonSetUpdateStrategy(
    options: DaemonSetUpdateStrategy | undefined
): SerializedDaemonSetUpdateStrategy | undefined;
export function serializeDaemonSetUpdateStrategy(
    options: DaemonSetUpdateStrategy | undefined
): SerializedDaemonSetUpdateStrategy | undefined {
    if (options === undefined) return undefined;
    const result: SerializedDaemonSetUpdateStrategy = {
        rollingUpdate: serializeRollingUpdateDaemonSet(options.rollingUpdate),
        type: options.type,
    };

    return senchou.wrapTemplate(options, result);
}

export type DeploymentStrategy = {
    readonly rollingUpdate?: RollingUpdateDeployment;
    readonly type?: string;
};

export type SerializedDeploymentStrategy = {
    rollingUpdate?: SerializedRollingUpdateDeployment;
    type?: string;
};

export function serializeDeploymentStrategy(options: undefined): undefined;
export function serializeDeploymentStrategy(
    options: DeploymentStrategy
): SerializedDeploymentStrategy;
export function serializeDeploymentStrategy(
    options: DeploymentStrategy | undefined
): SerializedDeploymentStrategy | undefined;
export function serializeDeploymentStrategy(
    options: DeploymentStrategy | undefined
): SerializedDeploymentStrategy | undefined {
    if (options === undefined) return undefined;
    const result: SerializedDeploymentStrategy = {
        rollingUpdate: serializeRollingUpdateDeployment(options.rollingUpdate),
        type: options.type,
    };

    return senchou.wrapTemplate(options, result);
}

export type StatefulSetUpdateStrategy = {
    readonly rollingUpdate?: RollingUpdateStatefulSetStrategy;
    readonly type?: string;
};

export type SerializedStatefulSetUpdateStrategy = {
    rollingUpdate?: SerializedRollingUpdateStatefulSetStrategy;
    type?: string;
};

export function serializeStatefulSetUpdateStrategy(
    options: undefined
): undefined;
export function serializeStatefulSetUpdateStrategy(
    options: StatefulSetUpdateStrategy
): SerializedStatefulSetUpdateStrategy;
export function serializeStatefulSetUpdateStrategy(
    options: StatefulSetUpdateStrategy | undefined
): SerializedStatefulSetUpdateStrategy | undefined;
export function serializeStatefulSetUpdateStrategy(
    options: StatefulSetUpdateStrategy | undefined
): SerializedStatefulSetUpdateStrategy | undefined {
    if (options === undefined) return undefined;
    const result: SerializedStatefulSetUpdateStrategy = {
        rollingUpdate: serializeRollingUpdateStatefulSetStrategy(
            options.rollingUpdate
        ),
        type: options.type,
    };

    return senchou.wrapTemplate(options, result);
}

export type BoundObjectReference = {
    readonly apiVersion?: string;
    readonly kind?: string;
    readonly name?: string;
    readonly uid?: string;
};

export type SerializedBoundObjectReference = {
    apiVersion?: string;
    kind?: string;
    name?: string;
    uid?: string;
};

export function serializeBoundObjectReference(options: undefined): undefined;
export function serializeBoundObjectReference(
    options: BoundObjectReference
): SerializedBoundObjectReference;
export function serializeBoundObjectReference(
    options: BoundObjectReference | undefined
): SerializedBoundObjectReference | undefined;
export function serializeBoundObjectReference(
    options: BoundObjectReference | undefined
): SerializedBoundObjectReference | undefined {
    if (options === undefined) return undefined;
    const result: SerializedBoundObjectReference = {
        apiVersion: options.apiVersion,
        kind: options.kind,
        name: options.name,
        uid: options.uid,
    };

    return senchou.wrapTemplate(options, result);
}

export type NonResourceAttributes = {
    readonly path?: string;
    readonly verb?: string;
};

export type SerializedNonResourceAttributes = {
    path?: string;
    verb?: string;
};

export function serializeNonResourceAttributes(options: undefined): undefined;
export function serializeNonResourceAttributes(
    options: NonResourceAttributes
): SerializedNonResourceAttributes;
export function serializeNonResourceAttributes(
    options: NonResourceAttributes | undefined
): SerializedNonResourceAttributes | undefined;
export function serializeNonResourceAttributes(
    options: NonResourceAttributes | undefined
): SerializedNonResourceAttributes | undefined {
    if (options === undefined) return undefined;
    const result: SerializedNonResourceAttributes = {
        path: options.path,
        verb: options.verb,
    };

    return senchou.wrapTemplate(options, result);
}

export type ResourceAttributes = {
    readonly group?: string;
    readonly name?: string;
    readonly namespace?: string;
    readonly resource?: string;
    readonly subresource?: string;
    readonly verb?: string;
    readonly version?: string;
};

export type SerializedResourceAttributes = {
    group?: string;
    name?: string;
    namespace?: string;
    resource?: string;
    subresource?: string;
    verb?: string;
    version?: string;
};

export function serializeResourceAttributes(options: undefined): undefined;
export function serializeResourceAttributes(
    options: ResourceAttributes
): SerializedResourceAttributes;
export function serializeResourceAttributes(
    options: ResourceAttributes | undefined
): SerializedResourceAttributes | undefined;
export function serializeResourceAttributes(
    options: ResourceAttributes | undefined
): SerializedResourceAttributes | undefined {
    if (options === undefined) return undefined;
    const result: SerializedResourceAttributes = {
        group: options.group,
        name: options.name,
        namespace: options.namespace,
        resource: options.resource,
        subresource: options.subresource,
        verb: options.verb,
        version: options.version,
    };

    return senchou.wrapTemplate(options, result);
}

export type CrossVersionObjectReference = {
    readonly apiVersion?: string;
    readonly kind: string;
    readonly name: string;
};

export type SerializedCrossVersionObjectReference = {
    apiVersion?: string;
    kind: string;
    name: string;
};

export function serializeCrossVersionObjectReference(
    options: undefined
): undefined;
export function serializeCrossVersionObjectReference(
    options: CrossVersionObjectReference
): SerializedCrossVersionObjectReference;
export function serializeCrossVersionObjectReference(
    options: CrossVersionObjectReference | undefined
): SerializedCrossVersionObjectReference | undefined;
export function serializeCrossVersionObjectReference(
    options: CrossVersionObjectReference | undefined
): SerializedCrossVersionObjectReference | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCrossVersionObjectReference = {
        apiVersion: options.apiVersion,
        kind: options.kind,
        name: options.name,
    };

    return senchou.wrapTemplate(options, result);
}

export type MetricSpecV2Beta1 = {
    readonly containerResource?: ContainerResourceMetricSourceV2Beta1;
    readonly external?: ExternalMetricSourceV2Beta1;
    readonly object?: ObjectMetricSourceV2Beta1;
    readonly pods?: PodsMetricSourceV2Beta1;
    readonly resource?: ResourceMetricSourceV2Beta1;
    readonly type: string;
};

export type SerializedMetricSpecV2Beta1 = {
    containerResource?: SerializedContainerResourceMetricSourceV2Beta1;
    external?: SerializedExternalMetricSourceV2Beta1;
    object?: SerializedObjectMetricSourceV2Beta1;
    pods?: SerializedPodsMetricSourceV2Beta1;
    resource?: SerializedResourceMetricSourceV2Beta1;
    type: string;
};

export function serializeMetricSpecV2Beta1(options: undefined): undefined;
export function serializeMetricSpecV2Beta1(
    options: MetricSpecV2Beta1
): SerializedMetricSpecV2Beta1;
export function serializeMetricSpecV2Beta1(
    options: MetricSpecV2Beta1 | undefined
): SerializedMetricSpecV2Beta1 | undefined;
export function serializeMetricSpecV2Beta1(
    options: MetricSpecV2Beta1 | undefined
): SerializedMetricSpecV2Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedMetricSpecV2Beta1 = {
        containerResource: serializeContainerResourceMetricSourceV2Beta1(
            options.containerResource
        ),
        external: serializeExternalMetricSourceV2Beta1(options.external),
        object: serializeObjectMetricSourceV2Beta1(options.object),
        pods: serializePodsMetricSourceV2Beta1(options.pods),
        resource: serializeResourceMetricSourceV2Beta1(options.resource),
        type: options.type,
    };

    return senchou.wrapTemplate(options, result);
}

export type CrossVersionObjectReferenceV2Beta1 = {
    readonly apiVersion?: string;
    readonly kind: string;
    readonly name: string;
};

export type SerializedCrossVersionObjectReferenceV2Beta1 = {
    apiVersion?: string;
    kind: string;
    name: string;
};

export function serializeCrossVersionObjectReferenceV2Beta1(
    options: undefined
): undefined;
export function serializeCrossVersionObjectReferenceV2Beta1(
    options: CrossVersionObjectReferenceV2Beta1
): SerializedCrossVersionObjectReferenceV2Beta1;
export function serializeCrossVersionObjectReferenceV2Beta1(
    options: CrossVersionObjectReferenceV2Beta1 | undefined
): SerializedCrossVersionObjectReferenceV2Beta1 | undefined;
export function serializeCrossVersionObjectReferenceV2Beta1(
    options: CrossVersionObjectReferenceV2Beta1 | undefined
): SerializedCrossVersionObjectReferenceV2Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCrossVersionObjectReferenceV2Beta1 = {
        apiVersion: options.apiVersion,
        kind: options.kind,
        name: options.name,
    };

    return senchou.wrapTemplate(options, result);
}

export type HorizontalPodAutoscalerBehaviorV2Beta2 = {
    readonly scaleDown?: HPAScalingRulesV2Beta2;
    readonly scaleUp?: HPAScalingRulesV2Beta2;
};

export type SerializedHorizontalPodAutoscalerBehaviorV2Beta2 = {
    scaleDown?: SerializedHPAScalingRulesV2Beta2;
    scaleUp?: SerializedHPAScalingRulesV2Beta2;
};

export function serializeHorizontalPodAutoscalerBehaviorV2Beta2(
    options: undefined
): undefined;
export function serializeHorizontalPodAutoscalerBehaviorV2Beta2(
    options: HorizontalPodAutoscalerBehaviorV2Beta2
): SerializedHorizontalPodAutoscalerBehaviorV2Beta2;
export function serializeHorizontalPodAutoscalerBehaviorV2Beta2(
    options: HorizontalPodAutoscalerBehaviorV2Beta2 | undefined
): SerializedHorizontalPodAutoscalerBehaviorV2Beta2 | undefined;
export function serializeHorizontalPodAutoscalerBehaviorV2Beta2(
    options: HorizontalPodAutoscalerBehaviorV2Beta2 | undefined
): SerializedHorizontalPodAutoscalerBehaviorV2Beta2 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedHorizontalPodAutoscalerBehaviorV2Beta2 = {
        scaleDown: serializeHPAScalingRulesV2Beta2(options.scaleDown),
        scaleUp: serializeHPAScalingRulesV2Beta2(options.scaleUp),
    };

    return senchou.wrapTemplate(options, result);
}

export type MetricSpecV2Beta2 = {
    readonly containerResource?: ContainerResourceMetricSourceV2Beta2;
    readonly external?: ExternalMetricSourceV2Beta2;
    readonly object?: ObjectMetricSourceV2Beta2;
    readonly pods?: PodsMetricSourceV2Beta2;
    readonly resource?: ResourceMetricSourceV2Beta2;
    readonly type: string;
};

export type SerializedMetricSpecV2Beta2 = {
    containerResource?: SerializedContainerResourceMetricSourceV2Beta2;
    external?: SerializedExternalMetricSourceV2Beta2;
    object?: SerializedObjectMetricSourceV2Beta2;
    pods?: SerializedPodsMetricSourceV2Beta2;
    resource?: SerializedResourceMetricSourceV2Beta2;
    type: string;
};

export function serializeMetricSpecV2Beta2(options: undefined): undefined;
export function serializeMetricSpecV2Beta2(
    options: MetricSpecV2Beta2
): SerializedMetricSpecV2Beta2;
export function serializeMetricSpecV2Beta2(
    options: MetricSpecV2Beta2 | undefined
): SerializedMetricSpecV2Beta2 | undefined;
export function serializeMetricSpecV2Beta2(
    options: MetricSpecV2Beta2 | undefined
): SerializedMetricSpecV2Beta2 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedMetricSpecV2Beta2 = {
        containerResource: serializeContainerResourceMetricSourceV2Beta2(
            options.containerResource
        ),
        external: serializeExternalMetricSourceV2Beta2(options.external),
        object: serializeObjectMetricSourceV2Beta2(options.object),
        pods: serializePodsMetricSourceV2Beta2(options.pods),
        resource: serializeResourceMetricSourceV2Beta2(options.resource),
        type: options.type,
    };

    return senchou.wrapTemplate(options, result);
}

export type CrossVersionObjectReferenceV2Beta2 = {
    readonly apiVersion?: string;
    readonly kind: string;
    readonly name: string;
};

export type SerializedCrossVersionObjectReferenceV2Beta2 = {
    apiVersion?: string;
    kind: string;
    name: string;
};

export function serializeCrossVersionObjectReferenceV2Beta2(
    options: undefined
): undefined;
export function serializeCrossVersionObjectReferenceV2Beta2(
    options: CrossVersionObjectReferenceV2Beta2
): SerializedCrossVersionObjectReferenceV2Beta2;
export function serializeCrossVersionObjectReferenceV2Beta2(
    options: CrossVersionObjectReferenceV2Beta2 | undefined
): SerializedCrossVersionObjectReferenceV2Beta2 | undefined;
export function serializeCrossVersionObjectReferenceV2Beta2(
    options: CrossVersionObjectReferenceV2Beta2 | undefined
): SerializedCrossVersionObjectReferenceV2Beta2 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCrossVersionObjectReferenceV2Beta2 = {
        apiVersion: options.apiVersion,
        kind: options.kind,
        name: options.name,
    };

    return senchou.wrapTemplate(options, result);
}

export type JobTemplateSpec = {
    readonly metadata?: ObjectMeta;
    readonly spec?: JobSpec;
};

export type SerializedJobTemplateSpec = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedJobSpec;
};

export function serializeJobTemplateSpec(options: undefined): undefined;
export function serializeJobTemplateSpec(
    options: JobTemplateSpec
): SerializedJobTemplateSpec;
export function serializeJobTemplateSpec(
    options: JobTemplateSpec | undefined
): SerializedJobTemplateSpec | undefined;
export function serializeJobTemplateSpec(
    options: JobTemplateSpec | undefined
): SerializedJobTemplateSpec | undefined {
    if (options === undefined) return undefined;
    const result: SerializedJobTemplateSpec = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeJobSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type JobTemplateSpecV1Beta1 = {
    readonly metadata?: ObjectMeta;
    readonly spec?: JobSpec;
};

export type SerializedJobTemplateSpecV1Beta1 = {
    metadata?: SerializedObjectMeta;
    spec?: SerializedJobSpec;
};

export function serializeJobTemplateSpecV1Beta1(options: undefined): undefined;
export function serializeJobTemplateSpecV1Beta1(
    options: JobTemplateSpecV1Beta1
): SerializedJobTemplateSpecV1Beta1;
export function serializeJobTemplateSpecV1Beta1(
    options: JobTemplateSpecV1Beta1 | undefined
): SerializedJobTemplateSpecV1Beta1 | undefined;
export function serializeJobTemplateSpecV1Beta1(
    options: JobTemplateSpecV1Beta1 | undefined
): SerializedJobTemplateSpecV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedJobTemplateSpecV1Beta1 = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializeJobSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type EndpointAddress = {
    readonly hostname?: string;
    readonly ip: string;
    readonly nodeName?: string;
    readonly targetRef?: ObjectReference;
};

export type SerializedEndpointAddress = {
    hostname?: string;
    ip: string;
    nodeName?: string;
    targetRef?: SerializedObjectReference;
};

export function serializeEndpointAddress(options: undefined): undefined;
export function serializeEndpointAddress(
    options: EndpointAddress
): SerializedEndpointAddress;
export function serializeEndpointAddress(
    options: EndpointAddress | undefined
): SerializedEndpointAddress | undefined;
export function serializeEndpointAddress(
    options: EndpointAddress | undefined
): SerializedEndpointAddress | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEndpointAddress = {
        hostname: options.hostname,
        ip: options.ip,
        nodeName: options.nodeName,
        targetRef: serializeObjectReference(options.targetRef),
    };

    return senchou.wrapTemplate(options, result);
}

export type LimitRangeItem = {
    readonly default?: { [key: string]: Quantity };
    readonly defaultRequest?: { [key: string]: Quantity };
    readonly max?: { [key: string]: Quantity };
    readonly maxLimitRequestRatio?: { [key: string]: Quantity };
    readonly min?: { [key: string]: Quantity };
    readonly type: string;
};

export type SerializedLimitRangeItem = {
    default?: { [key: string]: Quantity };
    defaultRequest?: { [key: string]: Quantity };
    max?: { [key: string]: Quantity };
    maxLimitRequestRatio?: { [key: string]: Quantity };
    min?: { [key: string]: Quantity };
    type: string;
};

export function serializeLimitRangeItem(options: undefined): undefined;
export function serializeLimitRangeItem(
    options: LimitRangeItem
): SerializedLimitRangeItem;
export function serializeLimitRangeItem(
    options: LimitRangeItem | undefined
): SerializedLimitRangeItem | undefined;
export function serializeLimitRangeItem(
    options: LimitRangeItem | undefined
): SerializedLimitRangeItem | undefined {
    if (options === undefined) return undefined;
    const result: SerializedLimitRangeItem = {
        default:
            options.default === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.default,
                      Object.entries(options.default).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        defaultRequest:
            options.defaultRequest === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.defaultRequest,
                      Object.entries(options.defaultRequest).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        max:
            options.max === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.max,
                      Object.entries(options.max).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        maxLimitRequestRatio:
            options.maxLimitRequestRatio === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.maxLimitRequestRatio,
                      Object.entries(options.maxLimitRequestRatio).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        min:
            options.min === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.min,
                      Object.entries(options.min).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        type: options.type,
    };

    return senchou.wrapTemplate(options, result);
}

export type NodeConfigSource = {
    readonly configMap?: ConfigMapNodeConfigSource;
};

export type SerializedNodeConfigSource = {
    configMap?: SerializedConfigMapNodeConfigSource;
};

export function serializeNodeConfigSource(options: undefined): undefined;
export function serializeNodeConfigSource(
    options: NodeConfigSource
): SerializedNodeConfigSource;
export function serializeNodeConfigSource(
    options: NodeConfigSource | undefined
): SerializedNodeConfigSource | undefined;
export function serializeNodeConfigSource(
    options: NodeConfigSource | undefined
): SerializedNodeConfigSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedNodeConfigSource = {
        configMap: serializeConfigMapNodeConfigSource(options.configMap),
    };

    return senchou.wrapTemplate(options, result);
}

export type Taint = {
    readonly effect: string;
    readonly key: string;
    readonly timeAdded?: Date;
    readonly value?: string;
};

export type SerializedTaint = {
    effect: string;
    key: string;
    timeAdded?: string;
    value?: string;
};

export function serializeTaint(options: undefined): undefined;
export function serializeTaint(options: Taint): SerializedTaint;
export function serializeTaint(
    options: Taint | undefined
): SerializedTaint | undefined;
export function serializeTaint(
    options: Taint | undefined
): SerializedTaint | undefined {
    if (options === undefined) return undefined;
    const result: SerializedTaint = {
        effect: options.effect,
        key: options.key,
        timeAdded: options.timeAdded?.toISOString(),
        value: options.value,
    };

    return senchou.wrapTemplate(options, result);
}

export type AWSElasticBlockStoreVolumeSource = {
    readonly fsType?: string;
    readonly partition?: number;
    readonly readOnly?: boolean;
    readonly volumeID: string;
};

export type SerializedAWSElasticBlockStoreVolumeSource = {
    fsType?: string;
    partition?: number;
    readOnly?: boolean;
    volumeID: string;
};

export function serializeAWSElasticBlockStoreVolumeSource(
    options: undefined
): undefined;
export function serializeAWSElasticBlockStoreVolumeSource(
    options: AWSElasticBlockStoreVolumeSource
): SerializedAWSElasticBlockStoreVolumeSource;
export function serializeAWSElasticBlockStoreVolumeSource(
    options: AWSElasticBlockStoreVolumeSource | undefined
): SerializedAWSElasticBlockStoreVolumeSource | undefined;
export function serializeAWSElasticBlockStoreVolumeSource(
    options: AWSElasticBlockStoreVolumeSource | undefined
): SerializedAWSElasticBlockStoreVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedAWSElasticBlockStoreVolumeSource = {
        fsType: options.fsType,
        partition: options.partition,
        readOnly: options.readOnly,
        volumeID: options.volumeID,
    };

    return senchou.wrapTemplate(options, result);
}

export type AzureDiskVolumeSource = {
    readonly cachingMode?: string;
    readonly diskName: string;
    readonly diskURI: string;
    readonly fsType?: string;
    readonly kind?: string;
    readonly readOnly?: boolean;
};

export type SerializedAzureDiskVolumeSource = {
    cachingMode?: string;
    diskName: string;
    diskURI: string;
    fsType?: string;
    kind?: string;
    readOnly?: boolean;
};

export function serializeAzureDiskVolumeSource(options: undefined): undefined;
export function serializeAzureDiskVolumeSource(
    options: AzureDiskVolumeSource
): SerializedAzureDiskVolumeSource;
export function serializeAzureDiskVolumeSource(
    options: AzureDiskVolumeSource | undefined
): SerializedAzureDiskVolumeSource | undefined;
export function serializeAzureDiskVolumeSource(
    options: AzureDiskVolumeSource | undefined
): SerializedAzureDiskVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedAzureDiskVolumeSource = {
        cachingMode: options.cachingMode,
        diskName: options.diskName,
        diskURI: options.diskURI,
        fsType: options.fsType,
        kind: options.kind,
        readOnly: options.readOnly,
    };

    return senchou.wrapTemplate(options, result);
}

export type AzureFilePersistentVolumeSource = {
    readonly readOnly?: boolean;
    readonly secretName: string;
    readonly secretNamespace?: string;
    readonly shareName: string;
};

export type SerializedAzureFilePersistentVolumeSource = {
    readOnly?: boolean;
    secretName: string;
    secretNamespace?: string;
    shareName: string;
};

export function serializeAzureFilePersistentVolumeSource(
    options: undefined
): undefined;
export function serializeAzureFilePersistentVolumeSource(
    options: AzureFilePersistentVolumeSource
): SerializedAzureFilePersistentVolumeSource;
export function serializeAzureFilePersistentVolumeSource(
    options: AzureFilePersistentVolumeSource | undefined
): SerializedAzureFilePersistentVolumeSource | undefined;
export function serializeAzureFilePersistentVolumeSource(
    options: AzureFilePersistentVolumeSource | undefined
): SerializedAzureFilePersistentVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedAzureFilePersistentVolumeSource = {
        readOnly: options.readOnly,
        secretName: options.secretName,
        secretNamespace: options.secretNamespace,
        shareName: options.shareName,
    };

    return senchou.wrapTemplate(options, result);
}

export type CephFSPersistentVolumeSource = {
    readonly monitors: Array<string>;
    readonly path?: string;
    readonly readOnly?: boolean;
    readonly secretFile?: string;
    readonly secretRef?: SecretReference;
    readonly user?: string;
};

export type SerializedCephFSPersistentVolumeSource = {
    monitors: Array<string>;
    path?: string;
    readOnly?: boolean;
    secretFile?: string;
    secretRef?: SerializedSecretReference;
    user?: string;
};

export function serializeCephFSPersistentVolumeSource(
    options: undefined
): undefined;
export function serializeCephFSPersistentVolumeSource(
    options: CephFSPersistentVolumeSource
): SerializedCephFSPersistentVolumeSource;
export function serializeCephFSPersistentVolumeSource(
    options: CephFSPersistentVolumeSource | undefined
): SerializedCephFSPersistentVolumeSource | undefined;
export function serializeCephFSPersistentVolumeSource(
    options: CephFSPersistentVolumeSource | undefined
): SerializedCephFSPersistentVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCephFSPersistentVolumeSource = {
        monitors: prelude.serialize(options.monitors, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        path: options.path,
        readOnly: options.readOnly,
        secretFile: options.secretFile,
        secretRef: serializeSecretReference(options.secretRef),
        user: options.user,
    };

    return senchou.wrapTemplate(options, result);
}

export type CinderPersistentVolumeSource = {
    readonly fsType?: string;
    readonly readOnly?: boolean;
    readonly secretRef?: SecretReference;
    readonly volumeID: string;
};

export type SerializedCinderPersistentVolumeSource = {
    fsType?: string;
    readOnly?: boolean;
    secretRef?: SerializedSecretReference;
    volumeID: string;
};

export function serializeCinderPersistentVolumeSource(
    options: undefined
): undefined;
export function serializeCinderPersistentVolumeSource(
    options: CinderPersistentVolumeSource
): SerializedCinderPersistentVolumeSource;
export function serializeCinderPersistentVolumeSource(
    options: CinderPersistentVolumeSource | undefined
): SerializedCinderPersistentVolumeSource | undefined;
export function serializeCinderPersistentVolumeSource(
    options: CinderPersistentVolumeSource | undefined
): SerializedCinderPersistentVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCinderPersistentVolumeSource = {
        fsType: options.fsType,
        readOnly: options.readOnly,
        secretRef: serializeSecretReference(options.secretRef),
        volumeID: options.volumeID,
    };

    return senchou.wrapTemplate(options, result);
}

export type CSIPersistentVolumeSource = {
    readonly controllerExpandSecretRef?: SecretReference;
    readonly controllerPublishSecretRef?: SecretReference;
    readonly driver: string;
    readonly fsType?: string;
    readonly nodePublishSecretRef?: SecretReference;
    readonly nodeStageSecretRef?: SecretReference;
    readonly readOnly?: boolean;
    readonly volumeAttributes?: { [key: string]: string };
    readonly volumeHandle: string;
};

export type SerializedCSIPersistentVolumeSource = {
    controllerExpandSecretRef?: SerializedSecretReference;
    controllerPublishSecretRef?: SerializedSecretReference;
    driver: string;
    fsType?: string;
    nodePublishSecretRef?: SerializedSecretReference;
    nodeStageSecretRef?: SerializedSecretReference;
    readOnly?: boolean;
    volumeAttributes?: { [key: string]: string };
    volumeHandle: string;
};

export function serializeCSIPersistentVolumeSource(
    options: undefined
): undefined;
export function serializeCSIPersistentVolumeSource(
    options: CSIPersistentVolumeSource
): SerializedCSIPersistentVolumeSource;
export function serializeCSIPersistentVolumeSource(
    options: CSIPersistentVolumeSource | undefined
): SerializedCSIPersistentVolumeSource | undefined;
export function serializeCSIPersistentVolumeSource(
    options: CSIPersistentVolumeSource | undefined
): SerializedCSIPersistentVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCSIPersistentVolumeSource = {
        controllerExpandSecretRef: serializeSecretReference(
            options.controllerExpandSecretRef
        ),
        controllerPublishSecretRef: serializeSecretReference(
            options.controllerPublishSecretRef
        ),
        driver: options.driver,
        fsType: options.fsType,
        nodePublishSecretRef: serializeSecretReference(
            options.nodePublishSecretRef
        ),
        nodeStageSecretRef: serializeSecretReference(
            options.nodeStageSecretRef
        ),
        readOnly: options.readOnly,
        volumeAttributes:
            options.volumeAttributes === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.volumeAttributes,
                      Object.entries(options.volumeAttributes).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        volumeHandle: options.volumeHandle,
    };

    return senchou.wrapTemplate(options, result);
}

export type FCVolumeSource = {
    readonly fsType?: string;
    readonly lun?: number;
    readonly readOnly?: boolean;
    readonly targetWWNs?: Array<string>;
    readonly wwids?: Array<string>;
};

export type SerializedFCVolumeSource = {
    fsType?: string;
    lun?: number;
    readOnly?: boolean;
    targetWWNs?: Array<string>;
    wwids?: Array<string>;
};

export function serializeFCVolumeSource(options: undefined): undefined;
export function serializeFCVolumeSource(
    options: FCVolumeSource
): SerializedFCVolumeSource;
export function serializeFCVolumeSource(
    options: FCVolumeSource | undefined
): SerializedFCVolumeSource | undefined;
export function serializeFCVolumeSource(
    options: FCVolumeSource | undefined
): SerializedFCVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedFCVolumeSource = {
        fsType: options.fsType,
        lun: options.lun,
        readOnly: options.readOnly,
        targetWWNs: prelude.serialize(options.targetWWNs, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        wwids: prelude.serialize(options.wwids, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type FlexPersistentVolumeSource = {
    readonly driver: string;
    readonly fsType?: string;
    readonly options?: { [key: string]: string };
    readonly readOnly?: boolean;
    readonly secretRef?: SecretReference;
};

export type SerializedFlexPersistentVolumeSource = {
    driver: string;
    fsType?: string;
    options?: { [key: string]: string };
    readOnly?: boolean;
    secretRef?: SerializedSecretReference;
};

export function serializeFlexPersistentVolumeSource(
    options: undefined
): undefined;
export function serializeFlexPersistentVolumeSource(
    options: FlexPersistentVolumeSource
): SerializedFlexPersistentVolumeSource;
export function serializeFlexPersistentVolumeSource(
    options: FlexPersistentVolumeSource | undefined
): SerializedFlexPersistentVolumeSource | undefined;
export function serializeFlexPersistentVolumeSource(
    options: FlexPersistentVolumeSource | undefined
): SerializedFlexPersistentVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedFlexPersistentVolumeSource = {
        driver: options.driver,
        fsType: options.fsType,
        options:
            options.options === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.options,
                      Object.entries(options.options).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        readOnly: options.readOnly,
        secretRef: serializeSecretReference(options.secretRef),
    };

    return senchou.wrapTemplate(options, result);
}

export type FlockerVolumeSource = {
    readonly datasetName?: string;
    readonly datasetUUID?: string;
};

export type SerializedFlockerVolumeSource = {
    datasetName?: string;
    datasetUUID?: string;
};

export function serializeFlockerVolumeSource(options: undefined): undefined;
export function serializeFlockerVolumeSource(
    options: FlockerVolumeSource
): SerializedFlockerVolumeSource;
export function serializeFlockerVolumeSource(
    options: FlockerVolumeSource | undefined
): SerializedFlockerVolumeSource | undefined;
export function serializeFlockerVolumeSource(
    options: FlockerVolumeSource | undefined
): SerializedFlockerVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedFlockerVolumeSource = {
        datasetName: options.datasetName,
        datasetUUID: options.datasetUUID,
    };

    return senchou.wrapTemplate(options, result);
}

export type GCEPersistentDiskVolumeSource = {
    readonly fsType?: string;
    readonly partition?: number;
    readonly pdName: string;
    readonly readOnly?: boolean;
};

export type SerializedGCEPersistentDiskVolumeSource = {
    fsType?: string;
    partition?: number;
    pdName: string;
    readOnly?: boolean;
};

export function serializeGCEPersistentDiskVolumeSource(
    options: undefined
): undefined;
export function serializeGCEPersistentDiskVolumeSource(
    options: GCEPersistentDiskVolumeSource
): SerializedGCEPersistentDiskVolumeSource;
export function serializeGCEPersistentDiskVolumeSource(
    options: GCEPersistentDiskVolumeSource | undefined
): SerializedGCEPersistentDiskVolumeSource | undefined;
export function serializeGCEPersistentDiskVolumeSource(
    options: GCEPersistentDiskVolumeSource | undefined
): SerializedGCEPersistentDiskVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedGCEPersistentDiskVolumeSource = {
        fsType: options.fsType,
        partition: options.partition,
        pdName: options.pdName,
        readOnly: options.readOnly,
    };

    return senchou.wrapTemplate(options, result);
}

export type GlusterfsPersistentVolumeSource = {
    readonly endpoints: string;
    readonly endpointsNamespace?: string;
    readonly path: string;
    readonly readOnly?: boolean;
};

export type SerializedGlusterfsPersistentVolumeSource = {
    endpoints: string;
    endpointsNamespace?: string;
    path: string;
    readOnly?: boolean;
};

export function serializeGlusterfsPersistentVolumeSource(
    options: undefined
): undefined;
export function serializeGlusterfsPersistentVolumeSource(
    options: GlusterfsPersistentVolumeSource
): SerializedGlusterfsPersistentVolumeSource;
export function serializeGlusterfsPersistentVolumeSource(
    options: GlusterfsPersistentVolumeSource | undefined
): SerializedGlusterfsPersistentVolumeSource | undefined;
export function serializeGlusterfsPersistentVolumeSource(
    options: GlusterfsPersistentVolumeSource | undefined
): SerializedGlusterfsPersistentVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedGlusterfsPersistentVolumeSource = {
        endpoints: options.endpoints,
        endpointsNamespace: options.endpointsNamespace,
        path: options.path,
        readOnly: options.readOnly,
    };

    return senchou.wrapTemplate(options, result);
}

export type HostPathVolumeSource = {
    readonly path: string;
    readonly type?: string;
};

export type SerializedHostPathVolumeSource = {
    path: string;
    type?: string;
};

export function serializeHostPathVolumeSource(options: undefined): undefined;
export function serializeHostPathVolumeSource(
    options: HostPathVolumeSource
): SerializedHostPathVolumeSource;
export function serializeHostPathVolumeSource(
    options: HostPathVolumeSource | undefined
): SerializedHostPathVolumeSource | undefined;
export function serializeHostPathVolumeSource(
    options: HostPathVolumeSource | undefined
): SerializedHostPathVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedHostPathVolumeSource = {
        path: options.path,
        type: options.type,
    };

    return senchou.wrapTemplate(options, result);
}

export type ISCSIPersistentVolumeSource = {
    readonly chapAuthDiscovery?: boolean;
    readonly chapAuthSession?: boolean;
    readonly fsType?: string;
    readonly initiatorName?: string;
    readonly iqn: string;
    readonly iscsiInterface?: string;
    readonly lun: number;
    readonly portals?: Array<string>;
    readonly readOnly?: boolean;
    readonly secretRef?: SecretReference;
    readonly targetPortal: string;
};

export type SerializedISCSIPersistentVolumeSource = {
    chapAuthDiscovery?: boolean;
    chapAuthSession?: boolean;
    fsType?: string;
    initiatorName?: string;
    iqn: string;
    iscsiInterface?: string;
    lun: number;
    portals?: Array<string>;
    readOnly?: boolean;
    secretRef?: SerializedSecretReference;
    targetPortal: string;
};

export function serializeISCSIPersistentVolumeSource(
    options: undefined
): undefined;
export function serializeISCSIPersistentVolumeSource(
    options: ISCSIPersistentVolumeSource
): SerializedISCSIPersistentVolumeSource;
export function serializeISCSIPersistentVolumeSource(
    options: ISCSIPersistentVolumeSource | undefined
): SerializedISCSIPersistentVolumeSource | undefined;
export function serializeISCSIPersistentVolumeSource(
    options: ISCSIPersistentVolumeSource | undefined
): SerializedISCSIPersistentVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedISCSIPersistentVolumeSource = {
        chapAuthDiscovery: options.chapAuthDiscovery,
        chapAuthSession: options.chapAuthSession,
        fsType: options.fsType,
        initiatorName: options.initiatorName,
        iqn: options.iqn,
        iscsiInterface: options.iscsiInterface,
        lun: options.lun,
        portals: prelude.serialize(options.portals, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        readOnly: options.readOnly,
        secretRef: serializeSecretReference(options.secretRef),
        targetPortal: options.targetPortal,
    };

    return senchou.wrapTemplate(options, result);
}

export type LocalVolumeSource = {
    readonly fsType?: string;
    readonly path: string;
};

export type SerializedLocalVolumeSource = {
    fsType?: string;
    path: string;
};

export function serializeLocalVolumeSource(options: undefined): undefined;
export function serializeLocalVolumeSource(
    options: LocalVolumeSource
): SerializedLocalVolumeSource;
export function serializeLocalVolumeSource(
    options: LocalVolumeSource | undefined
): SerializedLocalVolumeSource | undefined;
export function serializeLocalVolumeSource(
    options: LocalVolumeSource | undefined
): SerializedLocalVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedLocalVolumeSource = {
        fsType: options.fsType,
        path: options.path,
    };

    return senchou.wrapTemplate(options, result);
}

export type NFSVolumeSource = {
    readonly path: string;
    readonly readOnly?: boolean;
    readonly server: string;
};

export type SerializedNFSVolumeSource = {
    path: string;
    readOnly?: boolean;
    server: string;
};

export function serializeNFSVolumeSource(options: undefined): undefined;
export function serializeNFSVolumeSource(
    options: NFSVolumeSource
): SerializedNFSVolumeSource;
export function serializeNFSVolumeSource(
    options: NFSVolumeSource | undefined
): SerializedNFSVolumeSource | undefined;
export function serializeNFSVolumeSource(
    options: NFSVolumeSource | undefined
): SerializedNFSVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedNFSVolumeSource = {
        path: options.path,
        readOnly: options.readOnly,
        server: options.server,
    };

    return senchou.wrapTemplate(options, result);
}

export type VolumeNodeAffinity = {
    readonly required?: NodeSelector;
};

export type SerializedVolumeNodeAffinity = {
    required?: SerializedNodeSelector;
};

export function serializeVolumeNodeAffinity(options: undefined): undefined;
export function serializeVolumeNodeAffinity(
    options: VolumeNodeAffinity
): SerializedVolumeNodeAffinity;
export function serializeVolumeNodeAffinity(
    options: VolumeNodeAffinity | undefined
): SerializedVolumeNodeAffinity | undefined;
export function serializeVolumeNodeAffinity(
    options: VolumeNodeAffinity | undefined
): SerializedVolumeNodeAffinity | undefined {
    if (options === undefined) return undefined;
    const result: SerializedVolumeNodeAffinity = {
        required: serializeNodeSelector(options.required),
    };

    return senchou.wrapTemplate(options, result);
}

export type PhotonPersistentDiskVolumeSource = {
    readonly fsType?: string;
    readonly pdID: string;
};

export type SerializedPhotonPersistentDiskVolumeSource = {
    fsType?: string;
    pdID: string;
};

export function serializePhotonPersistentDiskVolumeSource(
    options: undefined
): undefined;
export function serializePhotonPersistentDiskVolumeSource(
    options: PhotonPersistentDiskVolumeSource
): SerializedPhotonPersistentDiskVolumeSource;
export function serializePhotonPersistentDiskVolumeSource(
    options: PhotonPersistentDiskVolumeSource | undefined
): SerializedPhotonPersistentDiskVolumeSource | undefined;
export function serializePhotonPersistentDiskVolumeSource(
    options: PhotonPersistentDiskVolumeSource | undefined
): SerializedPhotonPersistentDiskVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPhotonPersistentDiskVolumeSource = {
        fsType: options.fsType,
        pdID: options.pdID,
    };

    return senchou.wrapTemplate(options, result);
}

export type PortworxVolumeSource = {
    readonly fsType?: string;
    readonly readOnly?: boolean;
    readonly volumeID: string;
};

export type SerializedPortworxVolumeSource = {
    fsType?: string;
    readOnly?: boolean;
    volumeID: string;
};

export function serializePortworxVolumeSource(options: undefined): undefined;
export function serializePortworxVolumeSource(
    options: PortworxVolumeSource
): SerializedPortworxVolumeSource;
export function serializePortworxVolumeSource(
    options: PortworxVolumeSource | undefined
): SerializedPortworxVolumeSource | undefined;
export function serializePortworxVolumeSource(
    options: PortworxVolumeSource | undefined
): SerializedPortworxVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPortworxVolumeSource = {
        fsType: options.fsType,
        readOnly: options.readOnly,
        volumeID: options.volumeID,
    };

    return senchou.wrapTemplate(options, result);
}

export type QuobyteVolumeSource = {
    readonly group?: string;
    readonly readOnly?: boolean;
    readonly registry: string;
    readonly tenant?: string;
    readonly user?: string;
    readonly volume: string;
};

export type SerializedQuobyteVolumeSource = {
    group?: string;
    readOnly?: boolean;
    registry: string;
    tenant?: string;
    user?: string;
    volume: string;
};

export function serializeQuobyteVolumeSource(options: undefined): undefined;
export function serializeQuobyteVolumeSource(
    options: QuobyteVolumeSource
): SerializedQuobyteVolumeSource;
export function serializeQuobyteVolumeSource(
    options: QuobyteVolumeSource | undefined
): SerializedQuobyteVolumeSource | undefined;
export function serializeQuobyteVolumeSource(
    options: QuobyteVolumeSource | undefined
): SerializedQuobyteVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedQuobyteVolumeSource = {
        group: options.group,
        readOnly: options.readOnly,
        registry: options.registry,
        tenant: options.tenant,
        user: options.user,
        volume: options.volume,
    };

    return senchou.wrapTemplate(options, result);
}

export type RBDPersistentVolumeSource = {
    readonly fsType?: string;
    readonly image: string;
    readonly keyring?: string;
    readonly monitors: Array<string>;
    readonly pool?: string;
    readonly readOnly?: boolean;
    readonly secretRef?: SecretReference;
    readonly user?: string;
};

export type SerializedRBDPersistentVolumeSource = {
    fsType?: string;
    image: string;
    keyring?: string;
    monitors: Array<string>;
    pool?: string;
    readOnly?: boolean;
    secretRef?: SerializedSecretReference;
    user?: string;
};

export function serializeRBDPersistentVolumeSource(
    options: undefined
): undefined;
export function serializeRBDPersistentVolumeSource(
    options: RBDPersistentVolumeSource
): SerializedRBDPersistentVolumeSource;
export function serializeRBDPersistentVolumeSource(
    options: RBDPersistentVolumeSource | undefined
): SerializedRBDPersistentVolumeSource | undefined;
export function serializeRBDPersistentVolumeSource(
    options: RBDPersistentVolumeSource | undefined
): SerializedRBDPersistentVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRBDPersistentVolumeSource = {
        fsType: options.fsType,
        image: options.image,
        keyring: options.keyring,
        monitors: prelude.serialize(options.monitors, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        pool: options.pool,
        readOnly: options.readOnly,
        secretRef: serializeSecretReference(options.secretRef),
        user: options.user,
    };

    return senchou.wrapTemplate(options, result);
}

export type ScaleIOPersistentVolumeSource = {
    readonly fsType?: string;
    readonly gateway: string;
    readonly protectionDomain?: string;
    readonly readOnly?: boolean;
    readonly secretRef: SecretReference;
    readonly sslEnabled?: boolean;
    readonly storageMode?: string;
    readonly storagePool?: string;
    readonly system: string;
    readonly volumeName?: string;
};

export type SerializedScaleIOPersistentVolumeSource = {
    fsType?: string;
    gateway: string;
    protectionDomain?: string;
    readOnly?: boolean;
    secretRef: SerializedSecretReference;
    sslEnabled?: boolean;
    storageMode?: string;
    storagePool?: string;
    system: string;
    volumeName?: string;
};

export function serializeScaleIOPersistentVolumeSource(
    options: undefined
): undefined;
export function serializeScaleIOPersistentVolumeSource(
    options: ScaleIOPersistentVolumeSource
): SerializedScaleIOPersistentVolumeSource;
export function serializeScaleIOPersistentVolumeSource(
    options: ScaleIOPersistentVolumeSource | undefined
): SerializedScaleIOPersistentVolumeSource | undefined;
export function serializeScaleIOPersistentVolumeSource(
    options: ScaleIOPersistentVolumeSource | undefined
): SerializedScaleIOPersistentVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedScaleIOPersistentVolumeSource = {
        fsType: options.fsType,
        gateway: options.gateway,
        protectionDomain: options.protectionDomain,
        readOnly: options.readOnly,
        secretRef: serializeSecretReference(options.secretRef),
        sslEnabled: options.sslEnabled,
        storageMode: options.storageMode,
        storagePool: options.storagePool,
        system: options.system,
        volumeName: options.volumeName,
    };

    return senchou.wrapTemplate(options, result);
}

export type StorageOSPersistentVolumeSource = {
    readonly fsType?: string;
    readonly readOnly?: boolean;
    readonly secretRef?: ObjectReference;
    readonly volumeName?: string;
    readonly volumeNamespace?: string;
};

export type SerializedStorageOSPersistentVolumeSource = {
    fsType?: string;
    readOnly?: boolean;
    secretRef?: SerializedObjectReference;
    volumeName?: string;
    volumeNamespace?: string;
};

export function serializeStorageOSPersistentVolumeSource(
    options: undefined
): undefined;
export function serializeStorageOSPersistentVolumeSource(
    options: StorageOSPersistentVolumeSource
): SerializedStorageOSPersistentVolumeSource;
export function serializeStorageOSPersistentVolumeSource(
    options: StorageOSPersistentVolumeSource | undefined
): SerializedStorageOSPersistentVolumeSource | undefined;
export function serializeStorageOSPersistentVolumeSource(
    options: StorageOSPersistentVolumeSource | undefined
): SerializedStorageOSPersistentVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedStorageOSPersistentVolumeSource = {
        fsType: options.fsType,
        readOnly: options.readOnly,
        secretRef: serializeObjectReference(options.secretRef),
        volumeName: options.volumeName,
        volumeNamespace: options.volumeNamespace,
    };

    return senchou.wrapTemplate(options, result);
}

export type VsphereVirtualDiskVolumeSource = {
    readonly fsType?: string;
    readonly storagePolicyID?: string;
    readonly storagePolicyName?: string;
    readonly volumePath: string;
};

export type SerializedVsphereVirtualDiskVolumeSource = {
    fsType?: string;
    storagePolicyID?: string;
    storagePolicyName?: string;
    volumePath: string;
};

export function serializeVsphereVirtualDiskVolumeSource(
    options: undefined
): undefined;
export function serializeVsphereVirtualDiskVolumeSource(
    options: VsphereVirtualDiskVolumeSource
): SerializedVsphereVirtualDiskVolumeSource;
export function serializeVsphereVirtualDiskVolumeSource(
    options: VsphereVirtualDiskVolumeSource | undefined
): SerializedVsphereVirtualDiskVolumeSource | undefined;
export function serializeVsphereVirtualDiskVolumeSource(
    options: VsphereVirtualDiskVolumeSource | undefined
): SerializedVsphereVirtualDiskVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedVsphereVirtualDiskVolumeSource = {
        fsType: options.fsType,
        storagePolicyID: options.storagePolicyID,
        storagePolicyName: options.storagePolicyName,
        volumePath: options.volumePath,
    };

    return senchou.wrapTemplate(options, result);
}

export type TypedLocalObjectReference = {
    readonly apiGroup?: string;
    readonly kind: string;
    readonly name: string;
};

export type SerializedTypedLocalObjectReference = {
    apiGroup?: string;
    kind: string;
    name: string;
};

export function serializeTypedLocalObjectReference(
    options: undefined
): undefined;
export function serializeTypedLocalObjectReference(
    options: TypedLocalObjectReference
): SerializedTypedLocalObjectReference;
export function serializeTypedLocalObjectReference(
    options: TypedLocalObjectReference | undefined
): SerializedTypedLocalObjectReference | undefined;
export function serializeTypedLocalObjectReference(
    options: TypedLocalObjectReference | undefined
): SerializedTypedLocalObjectReference | undefined {
    if (options === undefined) return undefined;
    const result: SerializedTypedLocalObjectReference = {
        apiGroup: options.apiGroup,
        kind: options.kind,
        name: options.name,
    };

    return senchou.wrapTemplate(options, result);
}

export type ResourceRequirements = {
    readonly limits?: { [key: string]: Quantity };
    readonly requests?: { [key: string]: Quantity };
};

export type SerializedResourceRequirements = {
    limits?: { [key: string]: Quantity };
    requests?: { [key: string]: Quantity };
};

export function serializeResourceRequirements(options: undefined): undefined;
export function serializeResourceRequirements(
    options: ResourceRequirements
): SerializedResourceRequirements;
export function serializeResourceRequirements(
    options: ResourceRequirements | undefined
): SerializedResourceRequirements | undefined;
export function serializeResourceRequirements(
    options: ResourceRequirements | undefined
): SerializedResourceRequirements | undefined {
    if (options === undefined) return undefined;
    const result: SerializedResourceRequirements = {
        limits:
            options.limits === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.limits,
                      Object.entries(options.limits).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        requests:
            options.requests === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.requests,
                      Object.entries(options.requests).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
    };

    return senchou.wrapTemplate(options, result);
}

export type Affinity = {
    readonly nodeAffinity?: NodeAffinity;
    readonly podAffinity?: PodAffinity;
    readonly podAntiAffinity?: PodAntiAffinity;
};

export type SerializedAffinity = {
    nodeAffinity?: SerializedNodeAffinity;
    podAffinity?: SerializedPodAffinity;
    podAntiAffinity?: SerializedPodAntiAffinity;
};

export function serializeAffinity(options: undefined): undefined;
export function serializeAffinity(options: Affinity): SerializedAffinity;
export function serializeAffinity(
    options: Affinity | undefined
): SerializedAffinity | undefined;
export function serializeAffinity(
    options: Affinity | undefined
): SerializedAffinity | undefined {
    if (options === undefined) return undefined;
    const result: SerializedAffinity = {
        nodeAffinity: serializeNodeAffinity(options.nodeAffinity),
        podAffinity: serializePodAffinity(options.podAffinity),
        podAntiAffinity: serializePodAntiAffinity(options.podAntiAffinity),
    };

    return senchou.wrapTemplate(options, result);
}

export type Container = {
    readonly args?: Array<string>;
    readonly command?: Array<string>;
    readonly env?: Array<EnvVar>;
    readonly envFrom?: Array<EnvFromSource>;
    readonly image?: string;
    readonly imagePullPolicy?: string;
    readonly lifecycle?: Lifecycle;
    readonly livenessProbe?: Probe;
    readonly name: string;
    readonly ports?: Array<ContainerPort>;
    readonly readinessProbe?: Probe;
    readonly resources?: ResourceRequirements;
    readonly securityContext?: SecurityContext;
    readonly startupProbe?: Probe;
    readonly stdin?: boolean;
    readonly stdinOnce?: boolean;
    readonly terminationMessagePath?: string;
    readonly terminationMessagePolicy?: string;
    readonly tty?: boolean;
    readonly volumeDevices?: Array<VolumeDevice>;
    readonly volumeMounts?: Array<VolumeMount>;
    readonly workingDir?: string;
};

export type SerializedContainer = {
    args?: Array<string>;
    command?: Array<string>;
    env?: Array<SerializedEnvVar>;
    envFrom?: Array<SerializedEnvFromSource>;
    image?: string;
    imagePullPolicy?: string;
    lifecycle?: SerializedLifecycle;
    livenessProbe?: SerializedProbe;
    name: string;
    ports?: Array<SerializedContainerPort>;
    readinessProbe?: SerializedProbe;
    resources?: SerializedResourceRequirements;
    securityContext?: SerializedSecurityContext;
    startupProbe?: SerializedProbe;
    stdin?: boolean;
    stdinOnce?: boolean;
    terminationMessagePath?: string;
    terminationMessagePolicy?: string;
    tty?: boolean;
    volumeDevices?: Array<SerializedVolumeDevice>;
    volumeMounts?: Array<SerializedVolumeMount>;
    workingDir?: string;
};

export function serializeContainer(options: undefined): undefined;
export function serializeContainer(options: Container): SerializedContainer;
export function serializeContainer(
    options: Container | undefined
): SerializedContainer | undefined;
export function serializeContainer(
    options: Container | undefined
): SerializedContainer | undefined {
    if (options === undefined) return undefined;
    const result: SerializedContainer = {
        args: prelude.serialize(options.args, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        command: prelude.serialize(options.command, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        env: prelude.serialize(options.env, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeEnvVar(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        envFrom: prelude.serialize(options.envFrom, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeEnvFromSource(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        image: options.image,
        imagePullPolicy: options.imagePullPolicy,
        lifecycle: serializeLifecycle(options.lifecycle),
        livenessProbe: serializeProbe(options.livenessProbe),
        name: options.name,
        ports: prelude.serialize(options.ports, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeContainerPort(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        readinessProbe: serializeProbe(options.readinessProbe),
        resources: serializeResourceRequirements(options.resources),
        securityContext: serializeSecurityContext(options.securityContext),
        startupProbe: serializeProbe(options.startupProbe),
        stdin: options.stdin,
        stdinOnce: options.stdinOnce,
        terminationMessagePath: options.terminationMessagePath,
        terminationMessagePolicy: options.terminationMessagePolicy,
        tty: options.tty,
        volumeDevices: prelude.serialize(options.volumeDevices, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeVolumeDevice(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        volumeMounts: prelude.serialize(options.volumeMounts, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeVolumeMount(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        workingDir: options.workingDir,
    };

    return senchou.wrapTemplate(options, result);
}

export type PodDNSConfig = {
    readonly nameservers?: Array<string>;
    readonly options?: Array<PodDNSConfigOption>;
    readonly searches?: Array<string>;
};

export type SerializedPodDNSConfig = {
    nameservers?: Array<string>;
    options?: Array<SerializedPodDNSConfigOption>;
    searches?: Array<string>;
};

export function serializePodDNSConfig(options: undefined): undefined;
export function serializePodDNSConfig(
    options: PodDNSConfig
): SerializedPodDNSConfig;
export function serializePodDNSConfig(
    options: PodDNSConfig | undefined
): SerializedPodDNSConfig | undefined;
export function serializePodDNSConfig(
    options: PodDNSConfig | undefined
): SerializedPodDNSConfig | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPodDNSConfig = {
        nameservers: prelude.serialize(options.nameservers, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        options: prelude.serialize(options.options, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializePodDNSConfigOption(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        searches: prelude.serialize(options.searches, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type EphemeralContainer = {
    readonly args?: Array<string>;
    readonly command?: Array<string>;
    readonly env?: Array<EnvVar>;
    readonly envFrom?: Array<EnvFromSource>;
    readonly image?: string;
    readonly imagePullPolicy?: string;
    readonly lifecycle?: Lifecycle;
    readonly livenessProbe?: Probe;
    readonly name: string;
    readonly ports?: Array<ContainerPort>;
    readonly readinessProbe?: Probe;
    readonly resources?: ResourceRequirements;
    readonly securityContext?: SecurityContext;
    readonly startupProbe?: Probe;
    readonly stdin?: boolean;
    readonly stdinOnce?: boolean;
    readonly targetContainerName?: string;
    readonly terminationMessagePath?: string;
    readonly terminationMessagePolicy?: string;
    readonly tty?: boolean;
    readonly volumeDevices?: Array<VolumeDevice>;
    readonly volumeMounts?: Array<VolumeMount>;
    readonly workingDir?: string;
};

export type SerializedEphemeralContainer = {
    args?: Array<string>;
    command?: Array<string>;
    env?: Array<SerializedEnvVar>;
    envFrom?: Array<SerializedEnvFromSource>;
    image?: string;
    imagePullPolicy?: string;
    lifecycle?: SerializedLifecycle;
    livenessProbe?: SerializedProbe;
    name: string;
    ports?: Array<SerializedContainerPort>;
    readinessProbe?: SerializedProbe;
    resources?: SerializedResourceRequirements;
    securityContext?: SerializedSecurityContext;
    startupProbe?: SerializedProbe;
    stdin?: boolean;
    stdinOnce?: boolean;
    targetContainerName?: string;
    terminationMessagePath?: string;
    terminationMessagePolicy?: string;
    tty?: boolean;
    volumeDevices?: Array<SerializedVolumeDevice>;
    volumeMounts?: Array<SerializedVolumeMount>;
    workingDir?: string;
};

export function serializeEphemeralContainer(options: undefined): undefined;
export function serializeEphemeralContainer(
    options: EphemeralContainer
): SerializedEphemeralContainer;
export function serializeEphemeralContainer(
    options: EphemeralContainer | undefined
): SerializedEphemeralContainer | undefined;
export function serializeEphemeralContainer(
    options: EphemeralContainer | undefined
): SerializedEphemeralContainer | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEphemeralContainer = {
        args: prelude.serialize(options.args, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        command: prelude.serialize(options.command, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        env: prelude.serialize(options.env, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeEnvVar(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        envFrom: prelude.serialize(options.envFrom, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeEnvFromSource(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        image: options.image,
        imagePullPolicy: options.imagePullPolicy,
        lifecycle: serializeLifecycle(options.lifecycle),
        livenessProbe: serializeProbe(options.livenessProbe),
        name: options.name,
        ports: prelude.serialize(options.ports, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeContainerPort(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        readinessProbe: serializeProbe(options.readinessProbe),
        resources: serializeResourceRequirements(options.resources),
        securityContext: serializeSecurityContext(options.securityContext),
        startupProbe: serializeProbe(options.startupProbe),
        stdin: options.stdin,
        stdinOnce: options.stdinOnce,
        targetContainerName: options.targetContainerName,
        terminationMessagePath: options.terminationMessagePath,
        terminationMessagePolicy: options.terminationMessagePolicy,
        tty: options.tty,
        volumeDevices: prelude.serialize(options.volumeDevices, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeVolumeDevice(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        volumeMounts: prelude.serialize(options.volumeMounts, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeVolumeMount(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        workingDir: options.workingDir,
    };

    return senchou.wrapTemplate(options, result);
}

export type HostAlias = {
    readonly hostnames?: Array<string>;
    readonly ip?: string;
};

export type SerializedHostAlias = {
    hostnames?: Array<string>;
    ip?: string;
};

export function serializeHostAlias(options: undefined): undefined;
export function serializeHostAlias(options: HostAlias): SerializedHostAlias;
export function serializeHostAlias(
    options: HostAlias | undefined
): SerializedHostAlias | undefined;
export function serializeHostAlias(
    options: HostAlias | undefined
): SerializedHostAlias | undefined {
    if (options === undefined) return undefined;
    const result: SerializedHostAlias = {
        hostnames: prelude.serialize(options.hostnames, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        ip: options.ip,
    };

    return senchou.wrapTemplate(options, result);
}

export type PodReadinessGate = {
    readonly conditionType: string;
};

export type SerializedPodReadinessGate = {
    conditionType: string;
};

export function serializePodReadinessGate(options: undefined): undefined;
export function serializePodReadinessGate(
    options: PodReadinessGate
): SerializedPodReadinessGate;
export function serializePodReadinessGate(
    options: PodReadinessGate | undefined
): SerializedPodReadinessGate | undefined;
export function serializePodReadinessGate(
    options: PodReadinessGate | undefined
): SerializedPodReadinessGate | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPodReadinessGate = {
        conditionType: options.conditionType,
    };

    return senchou.wrapTemplate(options, result);
}

export type PodSecurityContext = {
    readonly fsGroup?: number;
    readonly fsGroupChangePolicy?: string;
    readonly runAsGroup?: number;
    readonly runAsNonRoot?: boolean;
    readonly runAsUser?: number;
    readonly seLinuxOptions?: SELinuxOptions;
    readonly seccompProfile?: SeccompProfile;
    readonly supplementalGroups?: Array<number>;
    readonly sysctls?: Array<Sysctl>;
    readonly windowsOptions?: WindowsSecurityContextOptions;
};

export type SerializedPodSecurityContext = {
    fsGroup?: number;
    fsGroupChangePolicy?: string;
    runAsGroup?: number;
    runAsNonRoot?: boolean;
    runAsUser?: number;
    seLinuxOptions?: SerializedSELinuxOptions;
    seccompProfile?: SerializedSeccompProfile;
    supplementalGroups?: Array<number>;
    sysctls?: Array<SerializedSysctl>;
    windowsOptions?: SerializedWindowsSecurityContextOptions;
};

export function serializePodSecurityContext(options: undefined): undefined;
export function serializePodSecurityContext(
    options: PodSecurityContext
): SerializedPodSecurityContext;
export function serializePodSecurityContext(
    options: PodSecurityContext | undefined
): SerializedPodSecurityContext | undefined;
export function serializePodSecurityContext(
    options: PodSecurityContext | undefined
): SerializedPodSecurityContext | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPodSecurityContext = {
        fsGroup: options.fsGroup,
        fsGroupChangePolicy: options.fsGroupChangePolicy,
        runAsGroup: options.runAsGroup,
        runAsNonRoot: options.runAsNonRoot,
        runAsUser: options.runAsUser,
        seLinuxOptions: serializeSELinuxOptions(options.seLinuxOptions),
        seccompProfile: serializeSeccompProfile(options.seccompProfile),
        supplementalGroups: prelude.serialize(
            options.supplementalGroups,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items.map((item) => item).filter(prelude.isNotUndefined)
                )
        ),
        sysctls: prelude.serialize(options.sysctls, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeSysctl(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        windowsOptions: serializeWindowsSecurityContextOptions(
            options.windowsOptions
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type Toleration = {
    readonly effect?: string;
    readonly key?: string;
    readonly operator?: string;
    readonly tolerationSeconds?: number;
    readonly value?: string;
};

export type SerializedToleration = {
    effect?: string;
    key?: string;
    operator?: string;
    tolerationSeconds?: number;
    value?: string;
};

export function serializeToleration(options: undefined): undefined;
export function serializeToleration(options: Toleration): SerializedToleration;
export function serializeToleration(
    options: Toleration | undefined
): SerializedToleration | undefined;
export function serializeToleration(
    options: Toleration | undefined
): SerializedToleration | undefined {
    if (options === undefined) return undefined;
    const result: SerializedToleration = {
        effect: options.effect,
        key: options.key,
        operator: options.operator,
        tolerationSeconds: options.tolerationSeconds,
        value: options.value,
    };

    return senchou.wrapTemplate(options, result);
}

export type TopologySpreadConstraint = {
    readonly labelSelector?: LabelSelector;
    readonly maxSkew: number;
    readonly topologyKey: string;
    readonly whenUnsatisfiable: string;
};

export type SerializedTopologySpreadConstraint = {
    labelSelector?: SerializedLabelSelector;
    maxSkew: number;
    topologyKey: string;
    whenUnsatisfiable: string;
};

export function serializeTopologySpreadConstraint(
    options: undefined
): undefined;
export function serializeTopologySpreadConstraint(
    options: TopologySpreadConstraint
): SerializedTopologySpreadConstraint;
export function serializeTopologySpreadConstraint(
    options: TopologySpreadConstraint | undefined
): SerializedTopologySpreadConstraint | undefined;
export function serializeTopologySpreadConstraint(
    options: TopologySpreadConstraint | undefined
): SerializedTopologySpreadConstraint | undefined {
    if (options === undefined) return undefined;
    const result: SerializedTopologySpreadConstraint = {
        labelSelector: serializeLabelSelector(options.labelSelector),
        maxSkew: options.maxSkew,
        topologyKey: options.topologyKey,
        whenUnsatisfiable: options.whenUnsatisfiable,
    };

    return senchou.wrapTemplate(options, result);
}

export type Volume = {
    readonly awsElasticBlockStore?: AWSElasticBlockStoreVolumeSource;
    readonly azureDisk?: AzureDiskVolumeSource;
    readonly azureFile?: AzureFileVolumeSource;
    readonly cephfs?: CephFSVolumeSource;
    readonly cinder?: CinderVolumeSource;
    readonly configMap?: ConfigMapVolumeSource;
    readonly csi?: CSIVolumeSource;
    readonly downwardAPI?: DownwardAPIVolumeSource;
    readonly emptyDir?: EmptyDirVolumeSource;
    readonly ephemeral?: EphemeralVolumeSource;
    readonly fc?: FCVolumeSource;
    readonly flexVolume?: FlexVolumeSource;
    readonly flocker?: FlockerVolumeSource;
    readonly gcePersistentDisk?: GCEPersistentDiskVolumeSource;
    readonly gitRepo?: GitRepoVolumeSource;
    readonly glusterfs?: GlusterfsVolumeSource;
    readonly hostPath?: HostPathVolumeSource;
    readonly iscsi?: ISCSIVolumeSource;
    readonly name: string;
    readonly nfs?: NFSVolumeSource;
    readonly persistentVolumeClaim?: PersistentVolumeClaimVolumeSource;
    readonly photonPersistentDisk?: PhotonPersistentDiskVolumeSource;
    readonly portworxVolume?: PortworxVolumeSource;
    readonly projected?: ProjectedVolumeSource;
    readonly quobyte?: QuobyteVolumeSource;
    readonly rbd?: RBDVolumeSource;
    readonly scaleIO?: ScaleIOVolumeSource;
    readonly secret?: SecretVolumeSource;
    readonly storageos?: StorageOSVolumeSource;
    readonly vsphereVolume?: VsphereVirtualDiskVolumeSource;
};

export type SerializedVolume = {
    awsElasticBlockStore?: SerializedAWSElasticBlockStoreVolumeSource;
    azureDisk?: SerializedAzureDiskVolumeSource;
    azureFile?: SerializedAzureFileVolumeSource;
    cephfs?: SerializedCephFSVolumeSource;
    cinder?: SerializedCinderVolumeSource;
    configMap?: SerializedConfigMapVolumeSource;
    csi?: SerializedCSIVolumeSource;
    downwardAPI?: SerializedDownwardAPIVolumeSource;
    emptyDir?: SerializedEmptyDirVolumeSource;
    ephemeral?: SerializedEphemeralVolumeSource;
    fc?: SerializedFCVolumeSource;
    flexVolume?: SerializedFlexVolumeSource;
    flocker?: SerializedFlockerVolumeSource;
    gcePersistentDisk?: SerializedGCEPersistentDiskVolumeSource;
    gitRepo?: SerializedGitRepoVolumeSource;
    glusterfs?: SerializedGlusterfsVolumeSource;
    hostPath?: SerializedHostPathVolumeSource;
    iscsi?: SerializedISCSIVolumeSource;
    name: string;
    nfs?: SerializedNFSVolumeSource;
    persistentVolumeClaim?: SerializedPersistentVolumeClaimVolumeSource;
    photonPersistentDisk?: SerializedPhotonPersistentDiskVolumeSource;
    portworxVolume?: SerializedPortworxVolumeSource;
    projected?: SerializedProjectedVolumeSource;
    quobyte?: SerializedQuobyteVolumeSource;
    rbd?: SerializedRBDVolumeSource;
    scaleIO?: SerializedScaleIOVolumeSource;
    secret?: SerializedSecretVolumeSource;
    storageos?: SerializedStorageOSVolumeSource;
    vsphereVolume?: SerializedVsphereVirtualDiskVolumeSource;
};

export function serializeVolume(options: undefined): undefined;
export function serializeVolume(options: Volume): SerializedVolume;
export function serializeVolume(
    options: Volume | undefined
): SerializedVolume | undefined;
export function serializeVolume(
    options: Volume | undefined
): SerializedVolume | undefined {
    if (options === undefined) return undefined;
    const result: SerializedVolume = {
        awsElasticBlockStore: serializeAWSElasticBlockStoreVolumeSource(
            options.awsElasticBlockStore
        ),
        azureDisk: serializeAzureDiskVolumeSource(options.azureDisk),
        azureFile: serializeAzureFileVolumeSource(options.azureFile),
        cephfs: serializeCephFSVolumeSource(options.cephfs),
        cinder: serializeCinderVolumeSource(options.cinder),
        configMap: serializeConfigMapVolumeSource(options.configMap),
        csi: serializeCSIVolumeSource(options.csi),
        downwardAPI: serializeDownwardAPIVolumeSource(options.downwardAPI),
        emptyDir: serializeEmptyDirVolumeSource(options.emptyDir),
        ephemeral: serializeEphemeralVolumeSource(options.ephemeral),
        fc: serializeFCVolumeSource(options.fc),
        flexVolume: serializeFlexVolumeSource(options.flexVolume),
        flocker: serializeFlockerVolumeSource(options.flocker),
        gcePersistentDisk: serializeGCEPersistentDiskVolumeSource(
            options.gcePersistentDisk
        ),
        gitRepo: serializeGitRepoVolumeSource(options.gitRepo),
        glusterfs: serializeGlusterfsVolumeSource(options.glusterfs),
        hostPath: serializeHostPathVolumeSource(options.hostPath),
        iscsi: serializeISCSIVolumeSource(options.iscsi),
        name: options.name,
        nfs: serializeNFSVolumeSource(options.nfs),
        persistentVolumeClaim: serializePersistentVolumeClaimVolumeSource(
            options.persistentVolumeClaim
        ),
        photonPersistentDisk: serializePhotonPersistentDiskVolumeSource(
            options.photonPersistentDisk
        ),
        portworxVolume: serializePortworxVolumeSource(options.portworxVolume),
        projected: serializeProjectedVolumeSource(options.projected),
        quobyte: serializeQuobyteVolumeSource(options.quobyte),
        rbd: serializeRBDVolumeSource(options.rbd),
        scaleIO: serializeScaleIOVolumeSource(options.scaleIO),
        secret: serializeSecretVolumeSource(options.secret),
        storageos: serializeStorageOSVolumeSource(options.storageos),
        vsphereVolume: serializeVsphereVirtualDiskVolumeSource(
            options.vsphereVolume
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type ScopeSelector = {
    readonly matchExpressions?: Array<ScopedResourceSelectorRequirement>;
};

export type SerializedScopeSelector = {
    matchExpressions?: Array<SerializedScopedResourceSelectorRequirement>;
};

export function serializeScopeSelector(options: undefined): undefined;
export function serializeScopeSelector(
    options: ScopeSelector
): SerializedScopeSelector;
export function serializeScopeSelector(
    options: ScopeSelector | undefined
): SerializedScopeSelector | undefined;
export function serializeScopeSelector(
    options: ScopeSelector | undefined
): SerializedScopeSelector | undefined {
    if (options === undefined) return undefined;
    const result: SerializedScopeSelector = {
        matchExpressions: prelude.serialize(options.matchExpressions, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) =>
                        serializeScopedResourceSelectorRequirement(item)
                    )
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type ServicePort = {
    readonly appProtocol?: string;
    readonly name?: string;
    readonly nodePort?: number;
    readonly port: number;
    readonly protocol?: string;
    readonly targetPort?: IntOrString;
};

export type SerializedServicePort = {
    appProtocol?: string;
    name?: string;
    nodePort?: number;
    port: number;
    protocol?: string;
    targetPort?: IntOrString;
};

export function serializeServicePort(options: undefined): undefined;
export function serializeServicePort(
    options: ServicePort
): SerializedServicePort;
export function serializeServicePort(
    options: ServicePort | undefined
): SerializedServicePort | undefined;
export function serializeServicePort(
    options: ServicePort | undefined
): SerializedServicePort | undefined {
    if (options === undefined) return undefined;
    const result: SerializedServicePort = {
        appProtocol: options.appProtocol,
        name: options.name,
        nodePort: options.nodePort,
        port: options.port,
        protocol: options.protocol,
        targetPort: options.targetPort,
    };

    return senchou.wrapTemplate(options, result);
}

export type SessionAffinityConfig = {
    readonly clientIP?: ClientIPConfig;
};

export type SerializedSessionAffinityConfig = {
    clientIP?: SerializedClientIPConfig;
};

export function serializeSessionAffinityConfig(options: undefined): undefined;
export function serializeSessionAffinityConfig(
    options: SessionAffinityConfig
): SerializedSessionAffinityConfig;
export function serializeSessionAffinityConfig(
    options: SessionAffinityConfig | undefined
): SerializedSessionAffinityConfig | undefined;
export function serializeSessionAffinityConfig(
    options: SessionAffinityConfig | undefined
): SerializedSessionAffinityConfig | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSessionAffinityConfig = {
        clientIP: serializeClientIPConfig(options.clientIP),
    };

    return senchou.wrapTemplate(options, result);
}

export type EndpointConditions = {
    readonly ready?: boolean;
    readonly serving?: boolean;
    readonly terminating?: boolean;
};

export type SerializedEndpointConditions = {
    ready?: boolean;
    serving?: boolean;
    terminating?: boolean;
};

export function serializeEndpointConditions(options: undefined): undefined;
export function serializeEndpointConditions(
    options: EndpointConditions
): SerializedEndpointConditions;
export function serializeEndpointConditions(
    options: EndpointConditions | undefined
): SerializedEndpointConditions | undefined;
export function serializeEndpointConditions(
    options: EndpointConditions | undefined
): SerializedEndpointConditions | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEndpointConditions = {
        ready: options.ready,
        serving: options.serving,
        terminating: options.terminating,
    };

    return senchou.wrapTemplate(options, result);
}

export type EndpointHints = {
    readonly forZones?: Array<ForZone>;
};

export type SerializedEndpointHints = {
    forZones?: Array<SerializedForZone>;
};

export function serializeEndpointHints(options: undefined): undefined;
export function serializeEndpointHints(
    options: EndpointHints
): SerializedEndpointHints;
export function serializeEndpointHints(
    options: EndpointHints | undefined
): SerializedEndpointHints | undefined;
export function serializeEndpointHints(
    options: EndpointHints | undefined
): SerializedEndpointHints | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEndpointHints = {
        forZones: prelude.serialize(options.forZones, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeForZone(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type EndpointConditionsV1Beta1 = {
    readonly ready?: boolean;
    readonly serving?: boolean;
    readonly terminating?: boolean;
};

export type SerializedEndpointConditionsV1Beta1 = {
    ready?: boolean;
    serving?: boolean;
    terminating?: boolean;
};

export function serializeEndpointConditionsV1Beta1(
    options: undefined
): undefined;
export function serializeEndpointConditionsV1Beta1(
    options: EndpointConditionsV1Beta1
): SerializedEndpointConditionsV1Beta1;
export function serializeEndpointConditionsV1Beta1(
    options: EndpointConditionsV1Beta1 | undefined
): SerializedEndpointConditionsV1Beta1 | undefined;
export function serializeEndpointConditionsV1Beta1(
    options: EndpointConditionsV1Beta1 | undefined
): SerializedEndpointConditionsV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEndpointConditionsV1Beta1 = {
        ready: options.ready,
        serving: options.serving,
        terminating: options.terminating,
    };

    return senchou.wrapTemplate(options, result);
}

export type EndpointHintsV1Beta1 = {
    readonly forZones?: Array<ForZoneV1Beta1>;
};

export type SerializedEndpointHintsV1Beta1 = {
    forZones?: Array<SerializedForZoneV1Beta1>;
};

export function serializeEndpointHintsV1Beta1(options: undefined): undefined;
export function serializeEndpointHintsV1Beta1(
    options: EndpointHintsV1Beta1
): SerializedEndpointHintsV1Beta1;
export function serializeEndpointHintsV1Beta1(
    options: EndpointHintsV1Beta1 | undefined
): SerializedEndpointHintsV1Beta1 | undefined;
export function serializeEndpointHintsV1Beta1(
    options: EndpointHintsV1Beta1 | undefined
): SerializedEndpointHintsV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEndpointHintsV1Beta1 = {
        forZones: prelude.serialize(options.forZones, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeForZoneV1Beta1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type FlowDistinguisherMethodV1Beta1 = {
    readonly type: string;
};

export type SerializedFlowDistinguisherMethodV1Beta1 = {
    type: string;
};

export function serializeFlowDistinguisherMethodV1Beta1(
    options: undefined
): undefined;
export function serializeFlowDistinguisherMethodV1Beta1(
    options: FlowDistinguisherMethodV1Beta1
): SerializedFlowDistinguisherMethodV1Beta1;
export function serializeFlowDistinguisherMethodV1Beta1(
    options: FlowDistinguisherMethodV1Beta1 | undefined
): SerializedFlowDistinguisherMethodV1Beta1 | undefined;
export function serializeFlowDistinguisherMethodV1Beta1(
    options: FlowDistinguisherMethodV1Beta1 | undefined
): SerializedFlowDistinguisherMethodV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedFlowDistinguisherMethodV1Beta1 = {
        type: options.type,
    };

    return senchou.wrapTemplate(options, result);
}

export type PriorityLevelConfigurationReferenceV1Beta1 = {
    readonly name: string;
};

export type SerializedPriorityLevelConfigurationReferenceV1Beta1 = {
    name: string;
};

export function serializePriorityLevelConfigurationReferenceV1Beta1(
    options: undefined
): undefined;
export function serializePriorityLevelConfigurationReferenceV1Beta1(
    options: PriorityLevelConfigurationReferenceV1Beta1
): SerializedPriorityLevelConfigurationReferenceV1Beta1;
export function serializePriorityLevelConfigurationReferenceV1Beta1(
    options: PriorityLevelConfigurationReferenceV1Beta1 | undefined
): SerializedPriorityLevelConfigurationReferenceV1Beta1 | undefined;
export function serializePriorityLevelConfigurationReferenceV1Beta1(
    options: PriorityLevelConfigurationReferenceV1Beta1 | undefined
): SerializedPriorityLevelConfigurationReferenceV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPriorityLevelConfigurationReferenceV1Beta1 = {
        name: options.name,
    };

    return senchou.wrapTemplate(options, result);
}

export type PolicyRulesWithSubjectsV1Beta1 = {
    readonly nonResourceRules?: Array<NonResourcePolicyRuleV1Beta1>;
    readonly resourceRules?: Array<ResourcePolicyRuleV1Beta1>;
    readonly subjects: Array<SubjectV1Beta1>;
};

export type SerializedPolicyRulesWithSubjectsV1Beta1 = {
    nonResourceRules?: Array<SerializedNonResourcePolicyRuleV1Beta1>;
    resourceRules?: Array<SerializedResourcePolicyRuleV1Beta1>;
    subjects: Array<SerializedSubjectV1Beta1>;
};

export function serializePolicyRulesWithSubjectsV1Beta1(
    options: undefined
): undefined;
export function serializePolicyRulesWithSubjectsV1Beta1(
    options: PolicyRulesWithSubjectsV1Beta1
): SerializedPolicyRulesWithSubjectsV1Beta1;
export function serializePolicyRulesWithSubjectsV1Beta1(
    options: PolicyRulesWithSubjectsV1Beta1 | undefined
): SerializedPolicyRulesWithSubjectsV1Beta1 | undefined;
export function serializePolicyRulesWithSubjectsV1Beta1(
    options: PolicyRulesWithSubjectsV1Beta1 | undefined
): SerializedPolicyRulesWithSubjectsV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPolicyRulesWithSubjectsV1Beta1 = {
        nonResourceRules: prelude.serialize(options.nonResourceRules, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeNonResourcePolicyRuleV1Beta1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        resourceRules: prelude.serialize(options.resourceRules, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeResourcePolicyRuleV1Beta1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        subjects: prelude.serialize(options.subjects, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeSubjectV1Beta1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type LimitedPriorityLevelConfigurationV1Beta1 = {
    readonly assuredConcurrencyShares?: number;
    readonly limitResponse?: LimitResponseV1Beta1;
};

export type SerializedLimitedPriorityLevelConfigurationV1Beta1 = {
    assuredConcurrencyShares?: number;
    limitResponse?: SerializedLimitResponseV1Beta1;
};

export function serializeLimitedPriorityLevelConfigurationV1Beta1(
    options: undefined
): undefined;
export function serializeLimitedPriorityLevelConfigurationV1Beta1(
    options: LimitedPriorityLevelConfigurationV1Beta1
): SerializedLimitedPriorityLevelConfigurationV1Beta1;
export function serializeLimitedPriorityLevelConfigurationV1Beta1(
    options: LimitedPriorityLevelConfigurationV1Beta1 | undefined
): SerializedLimitedPriorityLevelConfigurationV1Beta1 | undefined;
export function serializeLimitedPriorityLevelConfigurationV1Beta1(
    options: LimitedPriorityLevelConfigurationV1Beta1 | undefined
): SerializedLimitedPriorityLevelConfigurationV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedLimitedPriorityLevelConfigurationV1Beta1 = {
        assuredConcurrencyShares: options.assuredConcurrencyShares,
        limitResponse: serializeLimitResponseV1Beta1(options.limitResponse),
    };

    return senchou.wrapTemplate(options, result);
}

export type IngressBackend = {
    readonly resource?: TypedLocalObjectReference;
    readonly service?: IngressServiceBackend;
};

export type SerializedIngressBackend = {
    resource?: SerializedTypedLocalObjectReference;
    service?: SerializedIngressServiceBackend;
};

export function serializeIngressBackend(options: undefined): undefined;
export function serializeIngressBackend(
    options: IngressBackend
): SerializedIngressBackend;
export function serializeIngressBackend(
    options: IngressBackend | undefined
): SerializedIngressBackend | undefined;
export function serializeIngressBackend(
    options: IngressBackend | undefined
): SerializedIngressBackend | undefined {
    if (options === undefined) return undefined;
    const result: SerializedIngressBackend = {
        resource: serializeTypedLocalObjectReference(options.resource),
        service: serializeIngressServiceBackend(options.service),
    };

    return senchou.wrapTemplate(options, result);
}

export type IngressRule = {
    readonly host?: string;
    readonly http?: HTTPIngressRuleValue;
};

export type SerializedIngressRule = {
    host?: string;
    http?: SerializedHTTPIngressRuleValue;
};

export function serializeIngressRule(options: undefined): undefined;
export function serializeIngressRule(
    options: IngressRule
): SerializedIngressRule;
export function serializeIngressRule(
    options: IngressRule | undefined
): SerializedIngressRule | undefined;
export function serializeIngressRule(
    options: IngressRule | undefined
): SerializedIngressRule | undefined {
    if (options === undefined) return undefined;
    const result: SerializedIngressRule = {
        host: options.host,
        http: serializeHTTPIngressRuleValue(options.http),
    };

    return senchou.wrapTemplate(options, result);
}

export type IngressTLS = {
    readonly hosts?: Array<string>;
    readonly secretName?: string;
};

export type SerializedIngressTLS = {
    hosts?: Array<string>;
    secretName?: string;
};

export function serializeIngressTLS(options: undefined): undefined;
export function serializeIngressTLS(options: IngressTLS): SerializedIngressTLS;
export function serializeIngressTLS(
    options: IngressTLS | undefined
): SerializedIngressTLS | undefined;
export function serializeIngressTLS(
    options: IngressTLS | undefined
): SerializedIngressTLS | undefined {
    if (options === undefined) return undefined;
    const result: SerializedIngressTLS = {
        hosts: prelude.serialize(options.hosts, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        secretName: options.secretName,
    };

    return senchou.wrapTemplate(options, result);
}

export type IngressClassParametersReference = {
    readonly apiGroup?: string;
    readonly kind: string;
    readonly name: string;
    readonly namespace?: string;
    readonly scope?: string;
};

export type SerializedIngressClassParametersReference = {
    apiGroup?: string;
    kind: string;
    name: string;
    namespace?: string;
    scope?: string;
};

export function serializeIngressClassParametersReference(
    options: undefined
): undefined;
export function serializeIngressClassParametersReference(
    options: IngressClassParametersReference
): SerializedIngressClassParametersReference;
export function serializeIngressClassParametersReference(
    options: IngressClassParametersReference | undefined
): SerializedIngressClassParametersReference | undefined;
export function serializeIngressClassParametersReference(
    options: IngressClassParametersReference | undefined
): SerializedIngressClassParametersReference | undefined {
    if (options === undefined) return undefined;
    const result: SerializedIngressClassParametersReference = {
        apiGroup: options.apiGroup,
        kind: options.kind,
        name: options.name,
        namespace: options.namespace,
        scope: options.scope,
    };

    return senchou.wrapTemplate(options, result);
}

export type NetworkPolicyEgressRule = {
    readonly ports?: Array<NetworkPolicyPort>;
    readonly to?: Array<NetworkPolicyPeer>;
};

export type SerializedNetworkPolicyEgressRule = {
    ports?: Array<SerializedNetworkPolicyPort>;
    to?: Array<SerializedNetworkPolicyPeer>;
};

export function serializeNetworkPolicyEgressRule(options: undefined): undefined;
export function serializeNetworkPolicyEgressRule(
    options: NetworkPolicyEgressRule
): SerializedNetworkPolicyEgressRule;
export function serializeNetworkPolicyEgressRule(
    options: NetworkPolicyEgressRule | undefined
): SerializedNetworkPolicyEgressRule | undefined;
export function serializeNetworkPolicyEgressRule(
    options: NetworkPolicyEgressRule | undefined
): SerializedNetworkPolicyEgressRule | undefined {
    if (options === undefined) return undefined;
    const result: SerializedNetworkPolicyEgressRule = {
        ports: prelude.serialize(options.ports, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeNetworkPolicyPort(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        to: prelude.serialize(options.to, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeNetworkPolicyPeer(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type NetworkPolicyIngressRule = {
    readonly from?: Array<NetworkPolicyPeer>;
    readonly ports?: Array<NetworkPolicyPort>;
};

export type SerializedNetworkPolicyIngressRule = {
    from?: Array<SerializedNetworkPolicyPeer>;
    ports?: Array<SerializedNetworkPolicyPort>;
};

export function serializeNetworkPolicyIngressRule(
    options: undefined
): undefined;
export function serializeNetworkPolicyIngressRule(
    options: NetworkPolicyIngressRule
): SerializedNetworkPolicyIngressRule;
export function serializeNetworkPolicyIngressRule(
    options: NetworkPolicyIngressRule | undefined
): SerializedNetworkPolicyIngressRule | undefined;
export function serializeNetworkPolicyIngressRule(
    options: NetworkPolicyIngressRule | undefined
): SerializedNetworkPolicyIngressRule | undefined {
    if (options === undefined) return undefined;
    const result: SerializedNetworkPolicyIngressRule = {
        from: prelude.serialize(options.from, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeNetworkPolicyPeer(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        ports: prelude.serialize(options.ports, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeNetworkPolicyPort(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type OverheadV1Alpha1 = {
    readonly podFixed?: { [key: string]: Quantity };
};

export type SerializedOverheadV1Alpha1 = {
    podFixed?: { [key: string]: Quantity };
};

export function serializeOverheadV1Alpha1(options: undefined): undefined;
export function serializeOverheadV1Alpha1(
    options: OverheadV1Alpha1
): SerializedOverheadV1Alpha1;
export function serializeOverheadV1Alpha1(
    options: OverheadV1Alpha1 | undefined
): SerializedOverheadV1Alpha1 | undefined;
export function serializeOverheadV1Alpha1(
    options: OverheadV1Alpha1 | undefined
): SerializedOverheadV1Alpha1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedOverheadV1Alpha1 = {
        podFixed:
            options.podFixed === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.podFixed,
                      Object.entries(options.podFixed).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
    };

    return senchou.wrapTemplate(options, result);
}

export type SchedulingV1Alpha1 = {
    readonly nodeSelector?: { [key: string]: string };
    readonly tolerations?: Array<Toleration>;
};

export type SerializedSchedulingV1Alpha1 = {
    nodeSelector?: { [key: string]: string };
    tolerations?: Array<SerializedToleration>;
};

export function serializeSchedulingV1Alpha1(options: undefined): undefined;
export function serializeSchedulingV1Alpha1(
    options: SchedulingV1Alpha1
): SerializedSchedulingV1Alpha1;
export function serializeSchedulingV1Alpha1(
    options: SchedulingV1Alpha1 | undefined
): SerializedSchedulingV1Alpha1 | undefined;
export function serializeSchedulingV1Alpha1(
    options: SchedulingV1Alpha1 | undefined
): SerializedSchedulingV1Alpha1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSchedulingV1Alpha1 = {
        nodeSelector:
            options.nodeSelector === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.nodeSelector,
                      Object.entries(options.nodeSelector).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        tolerations: prelude.serialize(options.tolerations, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeToleration(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export enum Kind {
    DeleteOptions = "DeleteOptions",
}

export type Preconditions = {
    readonly resourceVersion?: string;
    readonly uid?: string;
};

export type SerializedPreconditions = {
    resourceVersion?: string;
    uid?: string;
};

export function serializePreconditions(options: undefined): undefined;
export function serializePreconditions(
    options: Preconditions
): SerializedPreconditions;
export function serializePreconditions(
    options: Preconditions | undefined
): SerializedPreconditions | undefined;
export function serializePreconditions(
    options: Preconditions | undefined
): SerializedPreconditions | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPreconditions = {
        resourceVersion: options.resourceVersion,
        uid: options.uid,
    };

    return senchou.wrapTemplate(options, result);
}

export type IntOrString = string | number;
export const isIntOrString = (input: any): input is IntOrString => {
    return ["string", "number"].includes(typeof input);
};

export type AllowedCSIDriverV1Beta1 = {
    readonly name: string;
};

export type SerializedAllowedCSIDriverV1Beta1 = {
    name: string;
};

export function serializeAllowedCSIDriverV1Beta1(options: undefined): undefined;
export function serializeAllowedCSIDriverV1Beta1(
    options: AllowedCSIDriverV1Beta1
): SerializedAllowedCSIDriverV1Beta1;
export function serializeAllowedCSIDriverV1Beta1(
    options: AllowedCSIDriverV1Beta1 | undefined
): SerializedAllowedCSIDriverV1Beta1 | undefined;
export function serializeAllowedCSIDriverV1Beta1(
    options: AllowedCSIDriverV1Beta1 | undefined
): SerializedAllowedCSIDriverV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedAllowedCSIDriverV1Beta1 = {
        name: options.name,
    };

    return senchou.wrapTemplate(options, result);
}

export type AllowedFlexVolumeV1Beta1 = {
    readonly driver: string;
};

export type SerializedAllowedFlexVolumeV1Beta1 = {
    driver: string;
};

export function serializeAllowedFlexVolumeV1Beta1(
    options: undefined
): undefined;
export function serializeAllowedFlexVolumeV1Beta1(
    options: AllowedFlexVolumeV1Beta1
): SerializedAllowedFlexVolumeV1Beta1;
export function serializeAllowedFlexVolumeV1Beta1(
    options: AllowedFlexVolumeV1Beta1 | undefined
): SerializedAllowedFlexVolumeV1Beta1 | undefined;
export function serializeAllowedFlexVolumeV1Beta1(
    options: AllowedFlexVolumeV1Beta1 | undefined
): SerializedAllowedFlexVolumeV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedAllowedFlexVolumeV1Beta1 = {
        driver: options.driver,
    };

    return senchou.wrapTemplate(options, result);
}

export type AllowedHostPathV1Beta1 = {
    readonly pathPrefix?: string;
    readonly readOnly?: boolean;
};

export type SerializedAllowedHostPathV1Beta1 = {
    pathPrefix?: string;
    readOnly?: boolean;
};

export function serializeAllowedHostPathV1Beta1(options: undefined): undefined;
export function serializeAllowedHostPathV1Beta1(
    options: AllowedHostPathV1Beta1
): SerializedAllowedHostPathV1Beta1;
export function serializeAllowedHostPathV1Beta1(
    options: AllowedHostPathV1Beta1 | undefined
): SerializedAllowedHostPathV1Beta1 | undefined;
export function serializeAllowedHostPathV1Beta1(
    options: AllowedHostPathV1Beta1 | undefined
): SerializedAllowedHostPathV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedAllowedHostPathV1Beta1 = {
        pathPrefix: options.pathPrefix,
        readOnly: options.readOnly,
    };

    return senchou.wrapTemplate(options, result);
}

export type FSGroupStrategyOptionsV1Beta1 = {
    readonly ranges?: Array<IDRangeV1Beta1>;
    readonly rule?: string;
};

export type SerializedFSGroupStrategyOptionsV1Beta1 = {
    ranges?: Array<SerializedIDRangeV1Beta1>;
    rule?: string;
};

export function serializeFSGroupStrategyOptionsV1Beta1(
    options: undefined
): undefined;
export function serializeFSGroupStrategyOptionsV1Beta1(
    options: FSGroupStrategyOptionsV1Beta1
): SerializedFSGroupStrategyOptionsV1Beta1;
export function serializeFSGroupStrategyOptionsV1Beta1(
    options: FSGroupStrategyOptionsV1Beta1 | undefined
): SerializedFSGroupStrategyOptionsV1Beta1 | undefined;
export function serializeFSGroupStrategyOptionsV1Beta1(
    options: FSGroupStrategyOptionsV1Beta1 | undefined
): SerializedFSGroupStrategyOptionsV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedFSGroupStrategyOptionsV1Beta1 = {
        ranges: prelude.serialize(options.ranges, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeIDRangeV1Beta1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        rule: options.rule,
    };

    return senchou.wrapTemplate(options, result);
}

export type HostPortRangeV1Beta1 = {
    readonly max: number;
    readonly min: number;
};

export type SerializedHostPortRangeV1Beta1 = {
    max: number;
    min: number;
};

export function serializeHostPortRangeV1Beta1(options: undefined): undefined;
export function serializeHostPortRangeV1Beta1(
    options: HostPortRangeV1Beta1
): SerializedHostPortRangeV1Beta1;
export function serializeHostPortRangeV1Beta1(
    options: HostPortRangeV1Beta1 | undefined
): SerializedHostPortRangeV1Beta1 | undefined;
export function serializeHostPortRangeV1Beta1(
    options: HostPortRangeV1Beta1 | undefined
): SerializedHostPortRangeV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedHostPortRangeV1Beta1 = {
        max: options.max,
        min: options.min,
    };

    return senchou.wrapTemplate(options, result);
}

export type RunAsGroupStrategyOptionsV1Beta1 = {
    readonly ranges?: Array<IDRangeV1Beta1>;
    readonly rule: string;
};

export type SerializedRunAsGroupStrategyOptionsV1Beta1 = {
    ranges?: Array<SerializedIDRangeV1Beta1>;
    rule: string;
};

export function serializeRunAsGroupStrategyOptionsV1Beta1(
    options: undefined
): undefined;
export function serializeRunAsGroupStrategyOptionsV1Beta1(
    options: RunAsGroupStrategyOptionsV1Beta1
): SerializedRunAsGroupStrategyOptionsV1Beta1;
export function serializeRunAsGroupStrategyOptionsV1Beta1(
    options: RunAsGroupStrategyOptionsV1Beta1 | undefined
): SerializedRunAsGroupStrategyOptionsV1Beta1 | undefined;
export function serializeRunAsGroupStrategyOptionsV1Beta1(
    options: RunAsGroupStrategyOptionsV1Beta1 | undefined
): SerializedRunAsGroupStrategyOptionsV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRunAsGroupStrategyOptionsV1Beta1 = {
        ranges: prelude.serialize(options.ranges, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeIDRangeV1Beta1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        rule: options.rule,
    };

    return senchou.wrapTemplate(options, result);
}

export type RunAsUserStrategyOptionsV1Beta1 = {
    readonly ranges?: Array<IDRangeV1Beta1>;
    readonly rule: string;
};

export type SerializedRunAsUserStrategyOptionsV1Beta1 = {
    ranges?: Array<SerializedIDRangeV1Beta1>;
    rule: string;
};

export function serializeRunAsUserStrategyOptionsV1Beta1(
    options: undefined
): undefined;
export function serializeRunAsUserStrategyOptionsV1Beta1(
    options: RunAsUserStrategyOptionsV1Beta1
): SerializedRunAsUserStrategyOptionsV1Beta1;
export function serializeRunAsUserStrategyOptionsV1Beta1(
    options: RunAsUserStrategyOptionsV1Beta1 | undefined
): SerializedRunAsUserStrategyOptionsV1Beta1 | undefined;
export function serializeRunAsUserStrategyOptionsV1Beta1(
    options: RunAsUserStrategyOptionsV1Beta1 | undefined
): SerializedRunAsUserStrategyOptionsV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRunAsUserStrategyOptionsV1Beta1 = {
        ranges: prelude.serialize(options.ranges, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeIDRangeV1Beta1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        rule: options.rule,
    };

    return senchou.wrapTemplate(options, result);
}

export type RuntimeClassStrategyOptionsV1Beta1 = {
    readonly allowedRuntimeClassNames: Array<string>;
    readonly defaultRuntimeClassName?: string;
};

export type SerializedRuntimeClassStrategyOptionsV1Beta1 = {
    allowedRuntimeClassNames: Array<string>;
    defaultRuntimeClassName?: string;
};

export function serializeRuntimeClassStrategyOptionsV1Beta1(
    options: undefined
): undefined;
export function serializeRuntimeClassStrategyOptionsV1Beta1(
    options: RuntimeClassStrategyOptionsV1Beta1
): SerializedRuntimeClassStrategyOptionsV1Beta1;
export function serializeRuntimeClassStrategyOptionsV1Beta1(
    options: RuntimeClassStrategyOptionsV1Beta1 | undefined
): SerializedRuntimeClassStrategyOptionsV1Beta1 | undefined;
export function serializeRuntimeClassStrategyOptionsV1Beta1(
    options: RuntimeClassStrategyOptionsV1Beta1 | undefined
): SerializedRuntimeClassStrategyOptionsV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRuntimeClassStrategyOptionsV1Beta1 = {
        allowedRuntimeClassNames: prelude.serialize(
            options.allowedRuntimeClassNames,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items.map((item) => item).filter(prelude.isNotUndefined)
                )
        ),
        defaultRuntimeClassName: options.defaultRuntimeClassName,
    };

    return senchou.wrapTemplate(options, result);
}

export type SELinuxStrategyOptionsV1Beta1 = {
    readonly rule: string;
    readonly seLinuxOptions?: SELinuxOptions;
};

export type SerializedSELinuxStrategyOptionsV1Beta1 = {
    rule: string;
    seLinuxOptions?: SerializedSELinuxOptions;
};

export function serializeSELinuxStrategyOptionsV1Beta1(
    options: undefined
): undefined;
export function serializeSELinuxStrategyOptionsV1Beta1(
    options: SELinuxStrategyOptionsV1Beta1
): SerializedSELinuxStrategyOptionsV1Beta1;
export function serializeSELinuxStrategyOptionsV1Beta1(
    options: SELinuxStrategyOptionsV1Beta1 | undefined
): SerializedSELinuxStrategyOptionsV1Beta1 | undefined;
export function serializeSELinuxStrategyOptionsV1Beta1(
    options: SELinuxStrategyOptionsV1Beta1 | undefined
): SerializedSELinuxStrategyOptionsV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSELinuxStrategyOptionsV1Beta1 = {
        rule: options.rule,
        seLinuxOptions: serializeSELinuxOptions(options.seLinuxOptions),
    };

    return senchou.wrapTemplate(options, result);
}

export type SupplementalGroupsStrategyOptionsV1Beta1 = {
    readonly ranges?: Array<IDRangeV1Beta1>;
    readonly rule?: string;
};

export type SerializedSupplementalGroupsStrategyOptionsV1Beta1 = {
    ranges?: Array<SerializedIDRangeV1Beta1>;
    rule?: string;
};

export function serializeSupplementalGroupsStrategyOptionsV1Beta1(
    options: undefined
): undefined;
export function serializeSupplementalGroupsStrategyOptionsV1Beta1(
    options: SupplementalGroupsStrategyOptionsV1Beta1
): SerializedSupplementalGroupsStrategyOptionsV1Beta1;
export function serializeSupplementalGroupsStrategyOptionsV1Beta1(
    options: SupplementalGroupsStrategyOptionsV1Beta1 | undefined
): SerializedSupplementalGroupsStrategyOptionsV1Beta1 | undefined;
export function serializeSupplementalGroupsStrategyOptionsV1Beta1(
    options: SupplementalGroupsStrategyOptionsV1Beta1 | undefined
): SerializedSupplementalGroupsStrategyOptionsV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSupplementalGroupsStrategyOptionsV1Beta1 = {
        ranges: prelude.serialize(options.ranges, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeIDRangeV1Beta1(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        rule: options.rule,
    };

    return senchou.wrapTemplate(options, result);
}

export type CSINodeDriver = {
    readonly allocatable?: VolumeNodeResources;
    readonly name: string;
    readonly nodeID: string;
    readonly topologyKeys?: Array<string>;
};

export type SerializedCSINodeDriver = {
    allocatable?: SerializedVolumeNodeResources;
    name: string;
    nodeID: string;
    topologyKeys?: Array<string>;
};

export function serializeCSINodeDriver(options: undefined): undefined;
export function serializeCSINodeDriver(
    options: CSINodeDriver
): SerializedCSINodeDriver;
export function serializeCSINodeDriver(
    options: CSINodeDriver | undefined
): SerializedCSINodeDriver | undefined;
export function serializeCSINodeDriver(
    options: CSINodeDriver | undefined
): SerializedCSINodeDriver | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCSINodeDriver = {
        allocatable: serializeVolumeNodeResources(options.allocatable),
        name: options.name,
        nodeID: options.nodeID,
        topologyKeys: prelude.serialize(options.topologyKeys, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type TopologySelectorLabelRequirement = {
    readonly key: string;
    readonly values: Array<string>;
};

export type SerializedTopologySelectorLabelRequirement = {
    key: string;
    values: Array<string>;
};

export function serializeTopologySelectorLabelRequirement(
    options: undefined
): undefined;
export function serializeTopologySelectorLabelRequirement(
    options: TopologySelectorLabelRequirement
): SerializedTopologySelectorLabelRequirement;
export function serializeTopologySelectorLabelRequirement(
    options: TopologySelectorLabelRequirement | undefined
): SerializedTopologySelectorLabelRequirement | undefined;
export function serializeTopologySelectorLabelRequirement(
    options: TopologySelectorLabelRequirement | undefined
): SerializedTopologySelectorLabelRequirement | undefined {
    if (options === undefined) return undefined;
    const result: SerializedTopologySelectorLabelRequirement = {
        key: options.key,
        values: prelude.serialize(options.values, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type VolumeAttachmentSource = {
    readonly inlineVolumeSpec?: PersistentVolumeSpec;
    readonly persistentVolumeName?: string;
};

export type SerializedVolumeAttachmentSource = {
    inlineVolumeSpec?: SerializedPersistentVolumeSpec;
    persistentVolumeName?: string;
};

export function serializeVolumeAttachmentSource(options: undefined): undefined;
export function serializeVolumeAttachmentSource(
    options: VolumeAttachmentSource
): SerializedVolumeAttachmentSource;
export function serializeVolumeAttachmentSource(
    options: VolumeAttachmentSource | undefined
): SerializedVolumeAttachmentSource | undefined;
export function serializeVolumeAttachmentSource(
    options: VolumeAttachmentSource | undefined
): SerializedVolumeAttachmentSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedVolumeAttachmentSource = {
        inlineVolumeSpec: serializePersistentVolumeSpec(
            options.inlineVolumeSpec
        ),
        persistentVolumeName: options.persistentVolumeName,
    };

    return senchou.wrapTemplate(options, result);
}

export type LabelSelectorRequirement = {
    readonly key: string;
    readonly operator: string;
    readonly values?: Array<string>;
};

export type SerializedLabelSelectorRequirement = {
    key: string;
    operator: string;
    values?: Array<string>;
};

export function serializeLabelSelectorRequirement(
    options: undefined
): undefined;
export function serializeLabelSelectorRequirement(
    options: LabelSelectorRequirement
): SerializedLabelSelectorRequirement;
export function serializeLabelSelectorRequirement(
    options: LabelSelectorRequirement | undefined
): SerializedLabelSelectorRequirement | undefined;
export function serializeLabelSelectorRequirement(
    options: LabelSelectorRequirement | undefined
): SerializedLabelSelectorRequirement | undefined {
    if (options === undefined) return undefined;
    const result: SerializedLabelSelectorRequirement = {
        key: options.key,
        operator: options.operator,
        values: prelude.serialize(options.values, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type VolumeAttachmentSourceV1Alpha1 = {
    readonly inlineVolumeSpec?: PersistentVolumeSpec;
    readonly persistentVolumeName?: string;
};

export type SerializedVolumeAttachmentSourceV1Alpha1 = {
    inlineVolumeSpec?: SerializedPersistentVolumeSpec;
    persistentVolumeName?: string;
};

export function serializeVolumeAttachmentSourceV1Alpha1(
    options: undefined
): undefined;
export function serializeVolumeAttachmentSourceV1Alpha1(
    options: VolumeAttachmentSourceV1Alpha1
): SerializedVolumeAttachmentSourceV1Alpha1;
export function serializeVolumeAttachmentSourceV1Alpha1(
    options: VolumeAttachmentSourceV1Alpha1 | undefined
): SerializedVolumeAttachmentSourceV1Alpha1 | undefined;
export function serializeVolumeAttachmentSourceV1Alpha1(
    options: VolumeAttachmentSourceV1Alpha1 | undefined
): SerializedVolumeAttachmentSourceV1Alpha1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedVolumeAttachmentSourceV1Alpha1 = {
        inlineVolumeSpec: serializePersistentVolumeSpec(
            options.inlineVolumeSpec
        ),
        persistentVolumeName: options.persistentVolumeName,
    };

    return senchou.wrapTemplate(options, result);
}

export type CustomResourceConversion = {
    readonly strategy: string;
    readonly webhook?: WebhookConversion;
};

export type SerializedCustomResourceConversion = {
    strategy: string;
    webhook?: SerializedWebhookConversion;
};

export function serializeCustomResourceConversion(
    options: undefined
): undefined;
export function serializeCustomResourceConversion(
    options: CustomResourceConversion
): SerializedCustomResourceConversion;
export function serializeCustomResourceConversion(
    options: CustomResourceConversion | undefined
): SerializedCustomResourceConversion | undefined;
export function serializeCustomResourceConversion(
    options: CustomResourceConversion | undefined
): SerializedCustomResourceConversion | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCustomResourceConversion = {
        strategy: options.strategy,
        webhook: serializeWebhookConversion(options.webhook),
    };

    return senchou.wrapTemplate(options, result);
}

export type CustomResourceDefinitionNames = {
    readonly categories?: Array<string>;
    readonly kind: string;
    readonly listKind?: string;
    readonly plural: string;
    readonly shortNames?: Array<string>;
    readonly singular?: string;
};

export type SerializedCustomResourceDefinitionNames = {
    categories?: Array<string>;
    kind: string;
    listKind?: string;
    plural: string;
    shortNames?: Array<string>;
    singular?: string;
};

export function serializeCustomResourceDefinitionNames(
    options: undefined
): undefined;
export function serializeCustomResourceDefinitionNames(
    options: CustomResourceDefinitionNames
): SerializedCustomResourceDefinitionNames;
export function serializeCustomResourceDefinitionNames(
    options: CustomResourceDefinitionNames | undefined
): SerializedCustomResourceDefinitionNames | undefined;
export function serializeCustomResourceDefinitionNames(
    options: CustomResourceDefinitionNames | undefined
): SerializedCustomResourceDefinitionNames | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCustomResourceDefinitionNames = {
        categories: prelude.serialize(options.categories, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        kind: options.kind,
        listKind: options.listKind,
        plural: options.plural,
        shortNames: prelude.serialize(options.shortNames, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        singular: options.singular,
    };

    return senchou.wrapTemplate(options, result);
}

export type CustomResourceDefinitionVersion = {
    readonly additionalPrinterColumns?: Array<CustomResourceColumnDefinition>;
    readonly deprecated?: boolean;
    readonly deprecationWarning?: string;
    readonly name: string;
    readonly schema?: CustomResourceValidation;
    readonly served: boolean;
    readonly storage: boolean;
    readonly subresources?: CustomResourceSubresources;
};

export type SerializedCustomResourceDefinitionVersion = {
    additionalPrinterColumns?: Array<SerializedCustomResourceColumnDefinition>;
    deprecated?: boolean;
    deprecationWarning?: string;
    name: string;
    schema?: SerializedCustomResourceValidation;
    served: boolean;
    storage: boolean;
    subresources?: SerializedCustomResourceSubresources;
};

export function serializeCustomResourceDefinitionVersion(
    options: undefined
): undefined;
export function serializeCustomResourceDefinitionVersion(
    options: CustomResourceDefinitionVersion
): SerializedCustomResourceDefinitionVersion;
export function serializeCustomResourceDefinitionVersion(
    options: CustomResourceDefinitionVersion | undefined
): SerializedCustomResourceDefinitionVersion | undefined;
export function serializeCustomResourceDefinitionVersion(
    options: CustomResourceDefinitionVersion | undefined
): SerializedCustomResourceDefinitionVersion | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCustomResourceDefinitionVersion = {
        additionalPrinterColumns: prelude.serialize(
            options.additionalPrinterColumns,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items
                        .map((item) =>
                            serializeCustomResourceColumnDefinition(item)
                        )
                        .filter(prelude.isNotUndefined)
                )
        ),
        deprecated: options.deprecated,
        deprecationWarning: options.deprecationWarning,
        name: options.name,
        schema: serializeCustomResourceValidation(options.schema),
        served: options.served,
        storage: options.storage,
        subresources: serializeCustomResourceSubresources(options.subresources),
    };

    return senchou.wrapTemplate(options, result);
}

export type StatusCause = {
    readonly field?: string;
    readonly message?: string;
    readonly reason?: string;
};

export type SerializedStatusCause = {
    field?: string;
    message?: string;
    reason?: string;
};

export function serializeStatusCause(options: undefined): undefined;
export function serializeStatusCause(
    options: StatusCause
): SerializedStatusCause;
export function serializeStatusCause(
    options: StatusCause | undefined
): SerializedStatusCause | undefined;
export function serializeStatusCause(
    options: StatusCause | undefined
): SerializedStatusCause | undefined {
    if (options === undefined) return undefined;
    const result: SerializedStatusCause = {
        field: options.field,
        message: options.message,
        reason: options.reason,
    };

    return senchou.wrapTemplate(options, result);
}

export type ServiceReference = {
    readonly name: string;
    readonly namespace: string;
    readonly path?: string;
    readonly port?: number;
};

export type SerializedServiceReference = {
    name: string;
    namespace: string;
    path?: string;
    port?: number;
};

export function serializeServiceReference(options: undefined): undefined;
export function serializeServiceReference(
    options: ServiceReference
): SerializedServiceReference;
export function serializeServiceReference(
    options: ServiceReference | undefined
): SerializedServiceReference | undefined;
export function serializeServiceReference(
    options: ServiceReference | undefined
): SerializedServiceReference | undefined {
    if (options === undefined) return undefined;
    const result: SerializedServiceReference = {
        name: options.name,
        namespace: options.namespace,
        path: options.path,
        port: options.port,
    };

    return senchou.wrapTemplate(options, result);
}

export type RollingUpdateDaemonSet = {
    readonly maxSurge?: IntOrString;
    readonly maxUnavailable?: IntOrString;
};

export type SerializedRollingUpdateDaemonSet = {
    maxSurge?: IntOrString;
    maxUnavailable?: IntOrString;
};

export function serializeRollingUpdateDaemonSet(options: undefined): undefined;
export function serializeRollingUpdateDaemonSet(
    options: RollingUpdateDaemonSet
): SerializedRollingUpdateDaemonSet;
export function serializeRollingUpdateDaemonSet(
    options: RollingUpdateDaemonSet | undefined
): SerializedRollingUpdateDaemonSet | undefined;
export function serializeRollingUpdateDaemonSet(
    options: RollingUpdateDaemonSet | undefined
): SerializedRollingUpdateDaemonSet | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRollingUpdateDaemonSet = {
        maxSurge: options.maxSurge,
        maxUnavailable: options.maxUnavailable,
    };

    return senchou.wrapTemplate(options, result);
}

export type RollingUpdateDeployment = {
    readonly maxSurge?: IntOrString;
    readonly maxUnavailable?: IntOrString;
};

export type SerializedRollingUpdateDeployment = {
    maxSurge?: IntOrString;
    maxUnavailable?: IntOrString;
};

export function serializeRollingUpdateDeployment(options: undefined): undefined;
export function serializeRollingUpdateDeployment(
    options: RollingUpdateDeployment
): SerializedRollingUpdateDeployment;
export function serializeRollingUpdateDeployment(
    options: RollingUpdateDeployment | undefined
): SerializedRollingUpdateDeployment | undefined;
export function serializeRollingUpdateDeployment(
    options: RollingUpdateDeployment | undefined
): SerializedRollingUpdateDeployment | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRollingUpdateDeployment = {
        maxSurge: options.maxSurge,
        maxUnavailable: options.maxUnavailable,
    };

    return senchou.wrapTemplate(options, result);
}

export type RollingUpdateStatefulSetStrategy = {
    readonly partition?: number;
};

export type SerializedRollingUpdateStatefulSetStrategy = {
    partition?: number;
};

export function serializeRollingUpdateStatefulSetStrategy(
    options: undefined
): undefined;
export function serializeRollingUpdateStatefulSetStrategy(
    options: RollingUpdateStatefulSetStrategy
): SerializedRollingUpdateStatefulSetStrategy;
export function serializeRollingUpdateStatefulSetStrategy(
    options: RollingUpdateStatefulSetStrategy | undefined
): SerializedRollingUpdateStatefulSetStrategy | undefined;
export function serializeRollingUpdateStatefulSetStrategy(
    options: RollingUpdateStatefulSetStrategy | undefined
): SerializedRollingUpdateStatefulSetStrategy | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRollingUpdateStatefulSetStrategy = {
        partition: options.partition,
    };

    return senchou.wrapTemplate(options, result);
}

export type ContainerResourceMetricSourceV2Beta1 = {
    readonly container: string;
    readonly name: string;
    readonly targetAverageUtilization?: number;
    readonly targetAverageValue?: Quantity;
};

export type SerializedContainerResourceMetricSourceV2Beta1 = {
    container: string;
    name: string;
    targetAverageUtilization?: number;
    targetAverageValue?: Quantity;
};

export function serializeContainerResourceMetricSourceV2Beta1(
    options: undefined
): undefined;
export function serializeContainerResourceMetricSourceV2Beta1(
    options: ContainerResourceMetricSourceV2Beta1
): SerializedContainerResourceMetricSourceV2Beta1;
export function serializeContainerResourceMetricSourceV2Beta1(
    options: ContainerResourceMetricSourceV2Beta1 | undefined
): SerializedContainerResourceMetricSourceV2Beta1 | undefined;
export function serializeContainerResourceMetricSourceV2Beta1(
    options: ContainerResourceMetricSourceV2Beta1 | undefined
): SerializedContainerResourceMetricSourceV2Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedContainerResourceMetricSourceV2Beta1 = {
        container: options.container,
        name: options.name,
        targetAverageUtilization: options.targetAverageUtilization,
        targetAverageValue: options.targetAverageValue,
    };

    return senchou.wrapTemplate(options, result);
}

export type ExternalMetricSourceV2Beta1 = {
    readonly metricName: string;
    readonly metricSelector?: LabelSelector;
    readonly targetAverageValue?: Quantity;
    readonly targetValue?: Quantity;
};

export type SerializedExternalMetricSourceV2Beta1 = {
    metricName: string;
    metricSelector?: SerializedLabelSelector;
    targetAverageValue?: Quantity;
    targetValue?: Quantity;
};

export function serializeExternalMetricSourceV2Beta1(
    options: undefined
): undefined;
export function serializeExternalMetricSourceV2Beta1(
    options: ExternalMetricSourceV2Beta1
): SerializedExternalMetricSourceV2Beta1;
export function serializeExternalMetricSourceV2Beta1(
    options: ExternalMetricSourceV2Beta1 | undefined
): SerializedExternalMetricSourceV2Beta1 | undefined;
export function serializeExternalMetricSourceV2Beta1(
    options: ExternalMetricSourceV2Beta1 | undefined
): SerializedExternalMetricSourceV2Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedExternalMetricSourceV2Beta1 = {
        metricName: options.metricName,
        metricSelector: serializeLabelSelector(options.metricSelector),
        targetAverageValue: options.targetAverageValue,
        targetValue: options.targetValue,
    };

    return senchou.wrapTemplate(options, result);
}

export type ObjectMetricSourceV2Beta1 = {
    readonly averageValue?: Quantity;
    readonly metricName: string;
    readonly selector?: LabelSelector;
    readonly target: CrossVersionObjectReferenceV2Beta1;
    readonly targetValue: Quantity;
};

export type SerializedObjectMetricSourceV2Beta1 = {
    averageValue?: Quantity;
    metricName: string;
    selector?: SerializedLabelSelector;
    target: SerializedCrossVersionObjectReferenceV2Beta1;
    targetValue: Quantity;
};

export function serializeObjectMetricSourceV2Beta1(
    options: undefined
): undefined;
export function serializeObjectMetricSourceV2Beta1(
    options: ObjectMetricSourceV2Beta1
): SerializedObjectMetricSourceV2Beta1;
export function serializeObjectMetricSourceV2Beta1(
    options: ObjectMetricSourceV2Beta1 | undefined
): SerializedObjectMetricSourceV2Beta1 | undefined;
export function serializeObjectMetricSourceV2Beta1(
    options: ObjectMetricSourceV2Beta1 | undefined
): SerializedObjectMetricSourceV2Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedObjectMetricSourceV2Beta1 = {
        averageValue: options.averageValue,
        metricName: options.metricName,
        selector: serializeLabelSelector(options.selector),
        target: serializeCrossVersionObjectReferenceV2Beta1(options.target),
        targetValue: options.targetValue,
    };

    return senchou.wrapTemplate(options, result);
}

export type PodsMetricSourceV2Beta1 = {
    readonly metricName: string;
    readonly selector?: LabelSelector;
    readonly targetAverageValue: Quantity;
};

export type SerializedPodsMetricSourceV2Beta1 = {
    metricName: string;
    selector?: SerializedLabelSelector;
    targetAverageValue: Quantity;
};

export function serializePodsMetricSourceV2Beta1(options: undefined): undefined;
export function serializePodsMetricSourceV2Beta1(
    options: PodsMetricSourceV2Beta1
): SerializedPodsMetricSourceV2Beta1;
export function serializePodsMetricSourceV2Beta1(
    options: PodsMetricSourceV2Beta1 | undefined
): SerializedPodsMetricSourceV2Beta1 | undefined;
export function serializePodsMetricSourceV2Beta1(
    options: PodsMetricSourceV2Beta1 | undefined
): SerializedPodsMetricSourceV2Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPodsMetricSourceV2Beta1 = {
        metricName: options.metricName,
        selector: serializeLabelSelector(options.selector),
        targetAverageValue: options.targetAverageValue,
    };

    return senchou.wrapTemplate(options, result);
}

export type ResourceMetricSourceV2Beta1 = {
    readonly name: string;
    readonly targetAverageUtilization?: number;
    readonly targetAverageValue?: Quantity;
};

export type SerializedResourceMetricSourceV2Beta1 = {
    name: string;
    targetAverageUtilization?: number;
    targetAverageValue?: Quantity;
};

export function serializeResourceMetricSourceV2Beta1(
    options: undefined
): undefined;
export function serializeResourceMetricSourceV2Beta1(
    options: ResourceMetricSourceV2Beta1
): SerializedResourceMetricSourceV2Beta1;
export function serializeResourceMetricSourceV2Beta1(
    options: ResourceMetricSourceV2Beta1 | undefined
): SerializedResourceMetricSourceV2Beta1 | undefined;
export function serializeResourceMetricSourceV2Beta1(
    options: ResourceMetricSourceV2Beta1 | undefined
): SerializedResourceMetricSourceV2Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedResourceMetricSourceV2Beta1 = {
        name: options.name,
        targetAverageUtilization: options.targetAverageUtilization,
        targetAverageValue: options.targetAverageValue,
    };

    return senchou.wrapTemplate(options, result);
}

export type HPAScalingRulesV2Beta2 = {
    readonly policies?: Array<HPAScalingPolicyV2Beta2>;
    readonly selectPolicy?: string;
    readonly stabilizationWindowSeconds?: number;
};

export type SerializedHPAScalingRulesV2Beta2 = {
    policies?: Array<SerializedHPAScalingPolicyV2Beta2>;
    selectPolicy?: string;
    stabilizationWindowSeconds?: number;
};

export function serializeHPAScalingRulesV2Beta2(options: undefined): undefined;
export function serializeHPAScalingRulesV2Beta2(
    options: HPAScalingRulesV2Beta2
): SerializedHPAScalingRulesV2Beta2;
export function serializeHPAScalingRulesV2Beta2(
    options: HPAScalingRulesV2Beta2 | undefined
): SerializedHPAScalingRulesV2Beta2 | undefined;
export function serializeHPAScalingRulesV2Beta2(
    options: HPAScalingRulesV2Beta2 | undefined
): SerializedHPAScalingRulesV2Beta2 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedHPAScalingRulesV2Beta2 = {
        policies: prelude.serialize(options.policies, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeHPAScalingPolicyV2Beta2(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        selectPolicy: options.selectPolicy,
        stabilizationWindowSeconds: options.stabilizationWindowSeconds,
    };

    return senchou.wrapTemplate(options, result);
}

export type ContainerResourceMetricSourceV2Beta2 = {
    readonly container: string;
    readonly name: string;
    readonly target: MetricTargetV2Beta2;
};

export type SerializedContainerResourceMetricSourceV2Beta2 = {
    container: string;
    name: string;
    target: SerializedMetricTargetV2Beta2;
};

export function serializeContainerResourceMetricSourceV2Beta2(
    options: undefined
): undefined;
export function serializeContainerResourceMetricSourceV2Beta2(
    options: ContainerResourceMetricSourceV2Beta2
): SerializedContainerResourceMetricSourceV2Beta2;
export function serializeContainerResourceMetricSourceV2Beta2(
    options: ContainerResourceMetricSourceV2Beta2 | undefined
): SerializedContainerResourceMetricSourceV2Beta2 | undefined;
export function serializeContainerResourceMetricSourceV2Beta2(
    options: ContainerResourceMetricSourceV2Beta2 | undefined
): SerializedContainerResourceMetricSourceV2Beta2 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedContainerResourceMetricSourceV2Beta2 = {
        container: options.container,
        name: options.name,
        target: serializeMetricTargetV2Beta2(options.target),
    };

    return senchou.wrapTemplate(options, result);
}

export type ExternalMetricSourceV2Beta2 = {
    readonly metric: MetricIdentifierV2Beta2;
    readonly target: MetricTargetV2Beta2;
};

export type SerializedExternalMetricSourceV2Beta2 = {
    metric: SerializedMetricIdentifierV2Beta2;
    target: SerializedMetricTargetV2Beta2;
};

export function serializeExternalMetricSourceV2Beta2(
    options: undefined
): undefined;
export function serializeExternalMetricSourceV2Beta2(
    options: ExternalMetricSourceV2Beta2
): SerializedExternalMetricSourceV2Beta2;
export function serializeExternalMetricSourceV2Beta2(
    options: ExternalMetricSourceV2Beta2 | undefined
): SerializedExternalMetricSourceV2Beta2 | undefined;
export function serializeExternalMetricSourceV2Beta2(
    options: ExternalMetricSourceV2Beta2 | undefined
): SerializedExternalMetricSourceV2Beta2 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedExternalMetricSourceV2Beta2 = {
        metric: serializeMetricIdentifierV2Beta2(options.metric),
        target: serializeMetricTargetV2Beta2(options.target),
    };

    return senchou.wrapTemplate(options, result);
}

export type ObjectMetricSourceV2Beta2 = {
    readonly describedObject: CrossVersionObjectReferenceV2Beta2;
    readonly metric: MetricIdentifierV2Beta2;
    readonly target: MetricTargetV2Beta2;
};

export type SerializedObjectMetricSourceV2Beta2 = {
    describedObject: SerializedCrossVersionObjectReferenceV2Beta2;
    metric: SerializedMetricIdentifierV2Beta2;
    target: SerializedMetricTargetV2Beta2;
};

export function serializeObjectMetricSourceV2Beta2(
    options: undefined
): undefined;
export function serializeObjectMetricSourceV2Beta2(
    options: ObjectMetricSourceV2Beta2
): SerializedObjectMetricSourceV2Beta2;
export function serializeObjectMetricSourceV2Beta2(
    options: ObjectMetricSourceV2Beta2 | undefined
): SerializedObjectMetricSourceV2Beta2 | undefined;
export function serializeObjectMetricSourceV2Beta2(
    options: ObjectMetricSourceV2Beta2 | undefined
): SerializedObjectMetricSourceV2Beta2 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedObjectMetricSourceV2Beta2 = {
        describedObject: serializeCrossVersionObjectReferenceV2Beta2(
            options.describedObject
        ),
        metric: serializeMetricIdentifierV2Beta2(options.metric),
        target: serializeMetricTargetV2Beta2(options.target),
    };

    return senchou.wrapTemplate(options, result);
}

export type PodsMetricSourceV2Beta2 = {
    readonly metric: MetricIdentifierV2Beta2;
    readonly target: MetricTargetV2Beta2;
};

export type SerializedPodsMetricSourceV2Beta2 = {
    metric: SerializedMetricIdentifierV2Beta2;
    target: SerializedMetricTargetV2Beta2;
};

export function serializePodsMetricSourceV2Beta2(options: undefined): undefined;
export function serializePodsMetricSourceV2Beta2(
    options: PodsMetricSourceV2Beta2
): SerializedPodsMetricSourceV2Beta2;
export function serializePodsMetricSourceV2Beta2(
    options: PodsMetricSourceV2Beta2 | undefined
): SerializedPodsMetricSourceV2Beta2 | undefined;
export function serializePodsMetricSourceV2Beta2(
    options: PodsMetricSourceV2Beta2 | undefined
): SerializedPodsMetricSourceV2Beta2 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPodsMetricSourceV2Beta2 = {
        metric: serializeMetricIdentifierV2Beta2(options.metric),
        target: serializeMetricTargetV2Beta2(options.target),
    };

    return senchou.wrapTemplate(options, result);
}

export type ResourceMetricSourceV2Beta2 = {
    readonly name: string;
    readonly target: MetricTargetV2Beta2;
};

export type SerializedResourceMetricSourceV2Beta2 = {
    name: string;
    target: SerializedMetricTargetV2Beta2;
};

export function serializeResourceMetricSourceV2Beta2(
    options: undefined
): undefined;
export function serializeResourceMetricSourceV2Beta2(
    options: ResourceMetricSourceV2Beta2
): SerializedResourceMetricSourceV2Beta2;
export function serializeResourceMetricSourceV2Beta2(
    options: ResourceMetricSourceV2Beta2 | undefined
): SerializedResourceMetricSourceV2Beta2 | undefined;
export function serializeResourceMetricSourceV2Beta2(
    options: ResourceMetricSourceV2Beta2 | undefined
): SerializedResourceMetricSourceV2Beta2 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedResourceMetricSourceV2Beta2 = {
        name: options.name,
        target: serializeMetricTargetV2Beta2(options.target),
    };

    return senchou.wrapTemplate(options, result);
}

export type ConfigMapNodeConfigSource = {
    readonly kubeletConfigKey: string;
    readonly name: string;
    readonly namespace: string;
    readonly resourceVersion?: string;
    readonly uid?: string;
};

export type SerializedConfigMapNodeConfigSource = {
    kubeletConfigKey: string;
    name: string;
    namespace: string;
    resourceVersion?: string;
    uid?: string;
};

export function serializeConfigMapNodeConfigSource(
    options: undefined
): undefined;
export function serializeConfigMapNodeConfigSource(
    options: ConfigMapNodeConfigSource
): SerializedConfigMapNodeConfigSource;
export function serializeConfigMapNodeConfigSource(
    options: ConfigMapNodeConfigSource | undefined
): SerializedConfigMapNodeConfigSource | undefined;
export function serializeConfigMapNodeConfigSource(
    options: ConfigMapNodeConfigSource | undefined
): SerializedConfigMapNodeConfigSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedConfigMapNodeConfigSource = {
        kubeletConfigKey: options.kubeletConfigKey,
        name: options.name,
        namespace: options.namespace,
        resourceVersion: options.resourceVersion,
        uid: options.uid,
    };

    return senchou.wrapTemplate(options, result);
}

export type SecretReference = {
    readonly name?: string;
    readonly namespace?: string;
};

export type SerializedSecretReference = {
    name?: string;
    namespace?: string;
};

export function serializeSecretReference(options: undefined): undefined;
export function serializeSecretReference(
    options: SecretReference
): SerializedSecretReference;
export function serializeSecretReference(
    options: SecretReference | undefined
): SerializedSecretReference | undefined;
export function serializeSecretReference(
    options: SecretReference | undefined
): SerializedSecretReference | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSecretReference = {
        name: options.name,
        namespace: options.namespace,
    };

    return senchou.wrapTemplate(options, result);
}

export type NodeSelector = {
    readonly nodeSelectorTerms: Array<NodeSelectorTerm>;
};

export type SerializedNodeSelector = {
    nodeSelectorTerms: Array<SerializedNodeSelectorTerm>;
};

export function serializeNodeSelector(options: undefined): undefined;
export function serializeNodeSelector(
    options: NodeSelector
): SerializedNodeSelector;
export function serializeNodeSelector(
    options: NodeSelector | undefined
): SerializedNodeSelector | undefined;
export function serializeNodeSelector(
    options: NodeSelector | undefined
): SerializedNodeSelector | undefined {
    if (options === undefined) return undefined;
    const result: SerializedNodeSelector = {
        nodeSelectorTerms: prelude.serialize(
            options.nodeSelectorTerms,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items
                        .map((item) => serializeNodeSelectorTerm(item))
                        .filter(prelude.isNotUndefined)
                )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type NodeAffinity = {
    readonly preferredDuringSchedulingIgnoredDuringExecution?: Array<
        PreferredSchedulingTerm
    >;
    readonly requiredDuringSchedulingIgnoredDuringExecution?: NodeSelector;
};

export type SerializedNodeAffinity = {
    preferredDuringSchedulingIgnoredDuringExecution?: Array<
        SerializedPreferredSchedulingTerm
    >;
    requiredDuringSchedulingIgnoredDuringExecution?: SerializedNodeSelector;
};

export function serializeNodeAffinity(options: undefined): undefined;
export function serializeNodeAffinity(
    options: NodeAffinity
): SerializedNodeAffinity;
export function serializeNodeAffinity(
    options: NodeAffinity | undefined
): SerializedNodeAffinity | undefined;
export function serializeNodeAffinity(
    options: NodeAffinity | undefined
): SerializedNodeAffinity | undefined {
    if (options === undefined) return undefined;
    const result: SerializedNodeAffinity = {
        preferredDuringSchedulingIgnoredDuringExecution: prelude.serialize(
            options.preferredDuringSchedulingIgnoredDuringExecution,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items
                        .map((item) => serializePreferredSchedulingTerm(item))
                        .filter(prelude.isNotUndefined)
                )
        ),
        requiredDuringSchedulingIgnoredDuringExecution: serializeNodeSelector(
            options.requiredDuringSchedulingIgnoredDuringExecution
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type PodAffinity = {
    readonly preferredDuringSchedulingIgnoredDuringExecution?: Array<
        WeightedPodAffinityTerm
    >;
    readonly requiredDuringSchedulingIgnoredDuringExecution?: Array<
        PodAffinityTerm
    >;
};

export type SerializedPodAffinity = {
    preferredDuringSchedulingIgnoredDuringExecution?: Array<
        SerializedWeightedPodAffinityTerm
    >;
    requiredDuringSchedulingIgnoredDuringExecution?: Array<
        SerializedPodAffinityTerm
    >;
};

export function serializePodAffinity(options: undefined): undefined;
export function serializePodAffinity(
    options: PodAffinity
): SerializedPodAffinity;
export function serializePodAffinity(
    options: PodAffinity | undefined
): SerializedPodAffinity | undefined;
export function serializePodAffinity(
    options: PodAffinity | undefined
): SerializedPodAffinity | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPodAffinity = {
        preferredDuringSchedulingIgnoredDuringExecution: prelude.serialize(
            options.preferredDuringSchedulingIgnoredDuringExecution,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items
                        .map((item) => serializeWeightedPodAffinityTerm(item))
                        .filter(prelude.isNotUndefined)
                )
        ),
        requiredDuringSchedulingIgnoredDuringExecution: prelude.serialize(
            options.requiredDuringSchedulingIgnoredDuringExecution,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items
                        .map((item) => serializePodAffinityTerm(item))
                        .filter(prelude.isNotUndefined)
                )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type PodAntiAffinity = {
    readonly preferredDuringSchedulingIgnoredDuringExecution?: Array<
        WeightedPodAffinityTerm
    >;
    readonly requiredDuringSchedulingIgnoredDuringExecution?: Array<
        PodAffinityTerm
    >;
};

export type SerializedPodAntiAffinity = {
    preferredDuringSchedulingIgnoredDuringExecution?: Array<
        SerializedWeightedPodAffinityTerm
    >;
    requiredDuringSchedulingIgnoredDuringExecution?: Array<
        SerializedPodAffinityTerm
    >;
};

export function serializePodAntiAffinity(options: undefined): undefined;
export function serializePodAntiAffinity(
    options: PodAntiAffinity
): SerializedPodAntiAffinity;
export function serializePodAntiAffinity(
    options: PodAntiAffinity | undefined
): SerializedPodAntiAffinity | undefined;
export function serializePodAntiAffinity(
    options: PodAntiAffinity | undefined
): SerializedPodAntiAffinity | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPodAntiAffinity = {
        preferredDuringSchedulingIgnoredDuringExecution: prelude.serialize(
            options.preferredDuringSchedulingIgnoredDuringExecution,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items
                        .map((item) => serializeWeightedPodAffinityTerm(item))
                        .filter(prelude.isNotUndefined)
                )
        ),
        requiredDuringSchedulingIgnoredDuringExecution: prelude.serialize(
            options.requiredDuringSchedulingIgnoredDuringExecution,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items
                        .map((item) => serializePodAffinityTerm(item))
                        .filter(prelude.isNotUndefined)
                )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type EnvVar = {
    readonly name: string;
    readonly value?: string;
    readonly valueFrom?: EnvVarSource;
};

export type SerializedEnvVar = {
    name: string;
    value?: string;
    valueFrom?: SerializedEnvVarSource;
};

export function serializeEnvVar(options: undefined): undefined;
export function serializeEnvVar(options: EnvVar): SerializedEnvVar;
export function serializeEnvVar(
    options: EnvVar | undefined
): SerializedEnvVar | undefined;
export function serializeEnvVar(
    options: EnvVar | undefined
): SerializedEnvVar | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEnvVar = {
        name: options.name,
        value: options.value,
        valueFrom: serializeEnvVarSource(options.valueFrom),
    };

    return senchou.wrapTemplate(options, result);
}

export type EnvFromSource = {
    readonly configMapRef?: ConfigMapEnvSource;
    readonly prefix?: string;
    readonly secretRef?: SecretEnvSource;
};

export type SerializedEnvFromSource = {
    configMapRef?: SerializedConfigMapEnvSource;
    prefix?: string;
    secretRef?: SerializedSecretEnvSource;
};

export function serializeEnvFromSource(options: undefined): undefined;
export function serializeEnvFromSource(
    options: EnvFromSource
): SerializedEnvFromSource;
export function serializeEnvFromSource(
    options: EnvFromSource | undefined
): SerializedEnvFromSource | undefined;
export function serializeEnvFromSource(
    options: EnvFromSource | undefined
): SerializedEnvFromSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEnvFromSource = {
        configMapRef: serializeConfigMapEnvSource(options.configMapRef),
        prefix: options.prefix,
        secretRef: serializeSecretEnvSource(options.secretRef),
    };

    return senchou.wrapTemplate(options, result);
}

export type Lifecycle = {
    readonly postStart?: Handler;
    readonly preStop?: Handler;
};

export type SerializedLifecycle = {
    postStart?: SerializedHandler;
    preStop?: SerializedHandler;
};

export function serializeLifecycle(options: undefined): undefined;
export function serializeLifecycle(options: Lifecycle): SerializedLifecycle;
export function serializeLifecycle(
    options: Lifecycle | undefined
): SerializedLifecycle | undefined;
export function serializeLifecycle(
    options: Lifecycle | undefined
): SerializedLifecycle | undefined {
    if (options === undefined) return undefined;
    const result: SerializedLifecycle = {
        postStart: serializeHandler(options.postStart),
        preStop: serializeHandler(options.preStop),
    };

    return senchou.wrapTemplate(options, result);
}

export type Probe = {
    readonly exec?: ExecAction;
    readonly failureThreshold?: number;
    readonly httpGet?: HTTPGetAction;
    readonly initialDelaySeconds?: number;
    readonly periodSeconds?: number;
    readonly successThreshold?: number;
    readonly tcpSocket?: TCPSocketAction;
    readonly terminationGracePeriodSeconds?: number;
    readonly timeoutSeconds?: number;
};

export type SerializedProbe = {
    exec?: SerializedExecAction;
    failureThreshold?: number;
    httpGet?: SerializedHTTPGetAction;
    initialDelaySeconds?: number;
    periodSeconds?: number;
    successThreshold?: number;
    tcpSocket?: SerializedTCPSocketAction;
    terminationGracePeriodSeconds?: number;
    timeoutSeconds?: number;
};

export function serializeProbe(options: undefined): undefined;
export function serializeProbe(options: Probe): SerializedProbe;
export function serializeProbe(
    options: Probe | undefined
): SerializedProbe | undefined;
export function serializeProbe(
    options: Probe | undefined
): SerializedProbe | undefined {
    if (options === undefined) return undefined;
    const result: SerializedProbe = {
        exec: serializeExecAction(options.exec),
        failureThreshold: options.failureThreshold,
        httpGet: serializeHTTPGetAction(options.httpGet),
        initialDelaySeconds: options.initialDelaySeconds,
        periodSeconds: options.periodSeconds,
        successThreshold: options.successThreshold,
        tcpSocket: serializeTCPSocketAction(options.tcpSocket),
        terminationGracePeriodSeconds: options.terminationGracePeriodSeconds,
        timeoutSeconds: options.timeoutSeconds,
    };

    return senchou.wrapTemplate(options, result);
}

export type ContainerPort = {
    readonly containerPort: number;
    readonly hostIP?: string;
    readonly hostPort?: number;
    readonly name?: string;
    readonly protocol?: string;
};

export type SerializedContainerPort = {
    containerPort: number;
    hostIP?: string;
    hostPort?: number;
    name?: string;
    protocol?: string;
};

export function serializeContainerPort(options: undefined): undefined;
export function serializeContainerPort(
    options: ContainerPort
): SerializedContainerPort;
export function serializeContainerPort(
    options: ContainerPort | undefined
): SerializedContainerPort | undefined;
export function serializeContainerPort(
    options: ContainerPort | undefined
): SerializedContainerPort | undefined {
    if (options === undefined) return undefined;
    const result: SerializedContainerPort = {
        containerPort: options.containerPort,
        hostIP: options.hostIP,
        hostPort: options.hostPort,
        name: options.name,
        protocol: options.protocol,
    };

    return senchou.wrapTemplate(options, result);
}

export type SecurityContext = {
    readonly allowPrivilegeEscalation?: boolean;
    readonly capabilities?: Capabilities;
    readonly privileged?: boolean;
    readonly procMount?: string;
    readonly readOnlyRootFilesystem?: boolean;
    readonly runAsGroup?: number;
    readonly runAsNonRoot?: boolean;
    readonly runAsUser?: number;
    readonly seLinuxOptions?: SELinuxOptions;
    readonly seccompProfile?: SeccompProfile;
    readonly windowsOptions?: WindowsSecurityContextOptions;
};

export type SerializedSecurityContext = {
    allowPrivilegeEscalation?: boolean;
    capabilities?: SerializedCapabilities;
    privileged?: boolean;
    procMount?: string;
    readOnlyRootFilesystem?: boolean;
    runAsGroup?: number;
    runAsNonRoot?: boolean;
    runAsUser?: number;
    seLinuxOptions?: SerializedSELinuxOptions;
    seccompProfile?: SerializedSeccompProfile;
    windowsOptions?: SerializedWindowsSecurityContextOptions;
};

export function serializeSecurityContext(options: undefined): undefined;
export function serializeSecurityContext(
    options: SecurityContext
): SerializedSecurityContext;
export function serializeSecurityContext(
    options: SecurityContext | undefined
): SerializedSecurityContext | undefined;
export function serializeSecurityContext(
    options: SecurityContext | undefined
): SerializedSecurityContext | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSecurityContext = {
        allowPrivilegeEscalation: options.allowPrivilegeEscalation,
        capabilities: serializeCapabilities(options.capabilities),
        privileged: options.privileged,
        procMount: options.procMount,
        readOnlyRootFilesystem: options.readOnlyRootFilesystem,
        runAsGroup: options.runAsGroup,
        runAsNonRoot: options.runAsNonRoot,
        runAsUser: options.runAsUser,
        seLinuxOptions: serializeSELinuxOptions(options.seLinuxOptions),
        seccompProfile: serializeSeccompProfile(options.seccompProfile),
        windowsOptions: serializeWindowsSecurityContextOptions(
            options.windowsOptions
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type VolumeDevice = {
    readonly devicePath: string;
    readonly name: string;
};

export type SerializedVolumeDevice = {
    devicePath: string;
    name: string;
};

export function serializeVolumeDevice(options: undefined): undefined;
export function serializeVolumeDevice(
    options: VolumeDevice
): SerializedVolumeDevice;
export function serializeVolumeDevice(
    options: VolumeDevice | undefined
): SerializedVolumeDevice | undefined;
export function serializeVolumeDevice(
    options: VolumeDevice | undefined
): SerializedVolumeDevice | undefined {
    if (options === undefined) return undefined;
    const result: SerializedVolumeDevice = {
        devicePath: options.devicePath,
        name: options.name,
    };

    return senchou.wrapTemplate(options, result);
}

export type VolumeMount = {
    readonly mountPath: string;
    readonly mountPropagation?: string;
    readonly name: string;
    readonly readOnly?: boolean;
    readonly subPath?: string;
    readonly subPathExpr?: string;
};

export type SerializedVolumeMount = {
    mountPath: string;
    mountPropagation?: string;
    name: string;
    readOnly?: boolean;
    subPath?: string;
    subPathExpr?: string;
};

export function serializeVolumeMount(options: undefined): undefined;
export function serializeVolumeMount(
    options: VolumeMount
): SerializedVolumeMount;
export function serializeVolumeMount(
    options: VolumeMount | undefined
): SerializedVolumeMount | undefined;
export function serializeVolumeMount(
    options: VolumeMount | undefined
): SerializedVolumeMount | undefined {
    if (options === undefined) return undefined;
    const result: SerializedVolumeMount = {
        mountPath: options.mountPath,
        mountPropagation: options.mountPropagation,
        name: options.name,
        readOnly: options.readOnly,
        subPath: options.subPath,
        subPathExpr: options.subPathExpr,
    };

    return senchou.wrapTemplate(options, result);
}

export type PodDNSConfigOption = {
    readonly name?: string;
    readonly value?: string;
};

export type SerializedPodDNSConfigOption = {
    name?: string;
    value?: string;
};

export function serializePodDNSConfigOption(options: undefined): undefined;
export function serializePodDNSConfigOption(
    options: PodDNSConfigOption
): SerializedPodDNSConfigOption;
export function serializePodDNSConfigOption(
    options: PodDNSConfigOption | undefined
): SerializedPodDNSConfigOption | undefined;
export function serializePodDNSConfigOption(
    options: PodDNSConfigOption | undefined
): SerializedPodDNSConfigOption | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPodDNSConfigOption = {
        name: options.name,
        value: options.value,
    };

    return senchou.wrapTemplate(options, result);
}

export type SELinuxOptions = {
    readonly level?: string;
    readonly role?: string;
    readonly type?: string;
    readonly user?: string;
};

export type SerializedSELinuxOptions = {
    level?: string;
    role?: string;
    type?: string;
    user?: string;
};

export function serializeSELinuxOptions(options: undefined): undefined;
export function serializeSELinuxOptions(
    options: SELinuxOptions
): SerializedSELinuxOptions;
export function serializeSELinuxOptions(
    options: SELinuxOptions | undefined
): SerializedSELinuxOptions | undefined;
export function serializeSELinuxOptions(
    options: SELinuxOptions | undefined
): SerializedSELinuxOptions | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSELinuxOptions = {
        level: options.level,
        role: options.role,
        type: options.type,
        user: options.user,
    };

    return senchou.wrapTemplate(options, result);
}

export type SeccompProfile = {
    readonly localhostProfile?: string;
    readonly type: string;
};

export type SerializedSeccompProfile = {
    localhostProfile?: string;
    type: string;
};

export function serializeSeccompProfile(options: undefined): undefined;
export function serializeSeccompProfile(
    options: SeccompProfile
): SerializedSeccompProfile;
export function serializeSeccompProfile(
    options: SeccompProfile | undefined
): SerializedSeccompProfile | undefined;
export function serializeSeccompProfile(
    options: SeccompProfile | undefined
): SerializedSeccompProfile | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSeccompProfile = {
        localhostProfile: options.localhostProfile,
        type: options.type,
    };

    return senchou.wrapTemplate(options, result);
}

export type Sysctl = {
    readonly name: string;
    readonly value: string;
};

export type SerializedSysctl = {
    name: string;
    value: string;
};

export function serializeSysctl(options: undefined): undefined;
export function serializeSysctl(options: Sysctl): SerializedSysctl;
export function serializeSysctl(
    options: Sysctl | undefined
): SerializedSysctl | undefined;
export function serializeSysctl(
    options: Sysctl | undefined
): SerializedSysctl | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSysctl = {
        name: options.name,
        value: options.value,
    };

    return senchou.wrapTemplate(options, result);
}

export type WindowsSecurityContextOptions = {
    readonly gmsaCredentialSpec?: string;
    readonly gmsaCredentialSpecName?: string;
    readonly hostProcess?: boolean;
    readonly runAsUserName?: string;
};

export type SerializedWindowsSecurityContextOptions = {
    gmsaCredentialSpec?: string;
    gmsaCredentialSpecName?: string;
    hostProcess?: boolean;
    runAsUserName?: string;
};

export function serializeWindowsSecurityContextOptions(
    options: undefined
): undefined;
export function serializeWindowsSecurityContextOptions(
    options: WindowsSecurityContextOptions
): SerializedWindowsSecurityContextOptions;
export function serializeWindowsSecurityContextOptions(
    options: WindowsSecurityContextOptions | undefined
): SerializedWindowsSecurityContextOptions | undefined;
export function serializeWindowsSecurityContextOptions(
    options: WindowsSecurityContextOptions | undefined
): SerializedWindowsSecurityContextOptions | undefined {
    if (options === undefined) return undefined;
    const result: SerializedWindowsSecurityContextOptions = {
        gmsaCredentialSpec: options.gmsaCredentialSpec,
        gmsaCredentialSpecName: options.gmsaCredentialSpecName,
        hostProcess: options.hostProcess,
        runAsUserName: options.runAsUserName,
    };

    return senchou.wrapTemplate(options, result);
}

export type AzureFileVolumeSource = {
    readonly readOnly?: boolean;
    readonly secretName: string;
    readonly shareName: string;
};

export type SerializedAzureFileVolumeSource = {
    readOnly?: boolean;
    secretName: string;
    shareName: string;
};

export function serializeAzureFileVolumeSource(options: undefined): undefined;
export function serializeAzureFileVolumeSource(
    options: AzureFileVolumeSource
): SerializedAzureFileVolumeSource;
export function serializeAzureFileVolumeSource(
    options: AzureFileVolumeSource | undefined
): SerializedAzureFileVolumeSource | undefined;
export function serializeAzureFileVolumeSource(
    options: AzureFileVolumeSource | undefined
): SerializedAzureFileVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedAzureFileVolumeSource = {
        readOnly: options.readOnly,
        secretName: options.secretName,
        shareName: options.shareName,
    };

    return senchou.wrapTemplate(options, result);
}

export type CephFSVolumeSource = {
    readonly monitors: Array<string>;
    readonly path?: string;
    readonly readOnly?: boolean;
    readonly secretFile?: string;
    readonly secretRef?: LocalObjectReference;
    readonly user?: string;
};

export type SerializedCephFSVolumeSource = {
    monitors: Array<string>;
    path?: string;
    readOnly?: boolean;
    secretFile?: string;
    secretRef?: SerializedLocalObjectReference;
    user?: string;
};

export function serializeCephFSVolumeSource(options: undefined): undefined;
export function serializeCephFSVolumeSource(
    options: CephFSVolumeSource
): SerializedCephFSVolumeSource;
export function serializeCephFSVolumeSource(
    options: CephFSVolumeSource | undefined
): SerializedCephFSVolumeSource | undefined;
export function serializeCephFSVolumeSource(
    options: CephFSVolumeSource | undefined
): SerializedCephFSVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCephFSVolumeSource = {
        monitors: prelude.serialize(options.monitors, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        path: options.path,
        readOnly: options.readOnly,
        secretFile: options.secretFile,
        secretRef: serializeLocalObjectReference(options.secretRef),
        user: options.user,
    };

    return senchou.wrapTemplate(options, result);
}

export type CinderVolumeSource = {
    readonly fsType?: string;
    readonly readOnly?: boolean;
    readonly secretRef?: LocalObjectReference;
    readonly volumeID: string;
};

export type SerializedCinderVolumeSource = {
    fsType?: string;
    readOnly?: boolean;
    secretRef?: SerializedLocalObjectReference;
    volumeID: string;
};

export function serializeCinderVolumeSource(options: undefined): undefined;
export function serializeCinderVolumeSource(
    options: CinderVolumeSource
): SerializedCinderVolumeSource;
export function serializeCinderVolumeSource(
    options: CinderVolumeSource | undefined
): SerializedCinderVolumeSource | undefined;
export function serializeCinderVolumeSource(
    options: CinderVolumeSource | undefined
): SerializedCinderVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCinderVolumeSource = {
        fsType: options.fsType,
        readOnly: options.readOnly,
        secretRef: serializeLocalObjectReference(options.secretRef),
        volumeID: options.volumeID,
    };

    return senchou.wrapTemplate(options, result);
}

export type ConfigMapVolumeSource = {
    readonly defaultMode?: number;
    readonly items?: Array<KeyToPath>;
    readonly name?: string;
    readonly optional?: boolean;
};

export type SerializedConfigMapVolumeSource = {
    defaultMode?: number;
    items?: Array<SerializedKeyToPath>;
    name?: string;
    optional?: boolean;
};

export function serializeConfigMapVolumeSource(options: undefined): undefined;
export function serializeConfigMapVolumeSource(
    options: ConfigMapVolumeSource
): SerializedConfigMapVolumeSource;
export function serializeConfigMapVolumeSource(
    options: ConfigMapVolumeSource | undefined
): SerializedConfigMapVolumeSource | undefined;
export function serializeConfigMapVolumeSource(
    options: ConfigMapVolumeSource | undefined
): SerializedConfigMapVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedConfigMapVolumeSource = {
        defaultMode: options.defaultMode,
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeKeyToPath(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        name: options.name,
        optional: options.optional,
    };

    return senchou.wrapTemplate(options, result);
}

export type CSIVolumeSource = {
    readonly driver: string;
    readonly fsType?: string;
    readonly nodePublishSecretRef?: LocalObjectReference;
    readonly readOnly?: boolean;
    readonly volumeAttributes?: { [key: string]: string };
};

export type SerializedCSIVolumeSource = {
    driver: string;
    fsType?: string;
    nodePublishSecretRef?: SerializedLocalObjectReference;
    readOnly?: boolean;
    volumeAttributes?: { [key: string]: string };
};

export function serializeCSIVolumeSource(options: undefined): undefined;
export function serializeCSIVolumeSource(
    options: CSIVolumeSource
): SerializedCSIVolumeSource;
export function serializeCSIVolumeSource(
    options: CSIVolumeSource | undefined
): SerializedCSIVolumeSource | undefined;
export function serializeCSIVolumeSource(
    options: CSIVolumeSource | undefined
): SerializedCSIVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCSIVolumeSource = {
        driver: options.driver,
        fsType: options.fsType,
        nodePublishSecretRef: serializeLocalObjectReference(
            options.nodePublishSecretRef
        ),
        readOnly: options.readOnly,
        volumeAttributes:
            options.volumeAttributes === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.volumeAttributes,
                      Object.entries(options.volumeAttributes).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
    };

    return senchou.wrapTemplate(options, result);
}

export type DownwardAPIVolumeSource = {
    readonly defaultMode?: number;
    readonly items?: Array<DownwardAPIVolumeFile>;
};

export type SerializedDownwardAPIVolumeSource = {
    defaultMode?: number;
    items?: Array<SerializedDownwardAPIVolumeFile>;
};

export function serializeDownwardAPIVolumeSource(options: undefined): undefined;
export function serializeDownwardAPIVolumeSource(
    options: DownwardAPIVolumeSource
): SerializedDownwardAPIVolumeSource;
export function serializeDownwardAPIVolumeSource(
    options: DownwardAPIVolumeSource | undefined
): SerializedDownwardAPIVolumeSource | undefined;
export function serializeDownwardAPIVolumeSource(
    options: DownwardAPIVolumeSource | undefined
): SerializedDownwardAPIVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedDownwardAPIVolumeSource = {
        defaultMode: options.defaultMode,
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeDownwardAPIVolumeFile(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type EmptyDirVolumeSource = {
    readonly medium?: string;
    readonly sizeLimit?: Quantity;
};

export type SerializedEmptyDirVolumeSource = {
    medium?: string;
    sizeLimit?: Quantity;
};

export function serializeEmptyDirVolumeSource(options: undefined): undefined;
export function serializeEmptyDirVolumeSource(
    options: EmptyDirVolumeSource
): SerializedEmptyDirVolumeSource;
export function serializeEmptyDirVolumeSource(
    options: EmptyDirVolumeSource | undefined
): SerializedEmptyDirVolumeSource | undefined;
export function serializeEmptyDirVolumeSource(
    options: EmptyDirVolumeSource | undefined
): SerializedEmptyDirVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEmptyDirVolumeSource = {
        medium: options.medium,
        sizeLimit: options.sizeLimit,
    };

    return senchou.wrapTemplate(options, result);
}

export type EphemeralVolumeSource = {
    readonly volumeClaimTemplate?: PersistentVolumeClaimTemplate;
};

export type SerializedEphemeralVolumeSource = {
    volumeClaimTemplate?: SerializedPersistentVolumeClaimTemplate;
};

export function serializeEphemeralVolumeSource(options: undefined): undefined;
export function serializeEphemeralVolumeSource(
    options: EphemeralVolumeSource
): SerializedEphemeralVolumeSource;
export function serializeEphemeralVolumeSource(
    options: EphemeralVolumeSource | undefined
): SerializedEphemeralVolumeSource | undefined;
export function serializeEphemeralVolumeSource(
    options: EphemeralVolumeSource | undefined
): SerializedEphemeralVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEphemeralVolumeSource = {
        volumeClaimTemplate: serializePersistentVolumeClaimTemplate(
            options.volumeClaimTemplate
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type FlexVolumeSource = {
    readonly driver: string;
    readonly fsType?: string;
    readonly options?: { [key: string]: string };
    readonly readOnly?: boolean;
    readonly secretRef?: LocalObjectReference;
};

export type SerializedFlexVolumeSource = {
    driver: string;
    fsType?: string;
    options?: { [key: string]: string };
    readOnly?: boolean;
    secretRef?: SerializedLocalObjectReference;
};

export function serializeFlexVolumeSource(options: undefined): undefined;
export function serializeFlexVolumeSource(
    options: FlexVolumeSource
): SerializedFlexVolumeSource;
export function serializeFlexVolumeSource(
    options: FlexVolumeSource | undefined
): SerializedFlexVolumeSource | undefined;
export function serializeFlexVolumeSource(
    options: FlexVolumeSource | undefined
): SerializedFlexVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedFlexVolumeSource = {
        driver: options.driver,
        fsType: options.fsType,
        options:
            options.options === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.options,
                      Object.entries(options.options).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        readOnly: options.readOnly,
        secretRef: serializeLocalObjectReference(options.secretRef),
    };

    return senchou.wrapTemplate(options, result);
}

export type GitRepoVolumeSource = {
    readonly directory?: string;
    readonly repository: string;
    readonly revision?: string;
};

export type SerializedGitRepoVolumeSource = {
    directory?: string;
    repository: string;
    revision?: string;
};

export function serializeGitRepoVolumeSource(options: undefined): undefined;
export function serializeGitRepoVolumeSource(
    options: GitRepoVolumeSource
): SerializedGitRepoVolumeSource;
export function serializeGitRepoVolumeSource(
    options: GitRepoVolumeSource | undefined
): SerializedGitRepoVolumeSource | undefined;
export function serializeGitRepoVolumeSource(
    options: GitRepoVolumeSource | undefined
): SerializedGitRepoVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedGitRepoVolumeSource = {
        directory: options.directory,
        repository: options.repository,
        revision: options.revision,
    };

    return senchou.wrapTemplate(options, result);
}

export type GlusterfsVolumeSource = {
    readonly endpoints: string;
    readonly path: string;
    readonly readOnly?: boolean;
};

export type SerializedGlusterfsVolumeSource = {
    endpoints: string;
    path: string;
    readOnly?: boolean;
};

export function serializeGlusterfsVolumeSource(options: undefined): undefined;
export function serializeGlusterfsVolumeSource(
    options: GlusterfsVolumeSource
): SerializedGlusterfsVolumeSource;
export function serializeGlusterfsVolumeSource(
    options: GlusterfsVolumeSource | undefined
): SerializedGlusterfsVolumeSource | undefined;
export function serializeGlusterfsVolumeSource(
    options: GlusterfsVolumeSource | undefined
): SerializedGlusterfsVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedGlusterfsVolumeSource = {
        endpoints: options.endpoints,
        path: options.path,
        readOnly: options.readOnly,
    };

    return senchou.wrapTemplate(options, result);
}

export type ISCSIVolumeSource = {
    readonly chapAuthDiscovery?: boolean;
    readonly chapAuthSession?: boolean;
    readonly fsType?: string;
    readonly initiatorName?: string;
    readonly iqn: string;
    readonly iscsiInterface?: string;
    readonly lun: number;
    readonly portals?: Array<string>;
    readonly readOnly?: boolean;
    readonly secretRef?: LocalObjectReference;
    readonly targetPortal: string;
};

export type SerializedISCSIVolumeSource = {
    chapAuthDiscovery?: boolean;
    chapAuthSession?: boolean;
    fsType?: string;
    initiatorName?: string;
    iqn: string;
    iscsiInterface?: string;
    lun: number;
    portals?: Array<string>;
    readOnly?: boolean;
    secretRef?: SerializedLocalObjectReference;
    targetPortal: string;
};

export function serializeISCSIVolumeSource(options: undefined): undefined;
export function serializeISCSIVolumeSource(
    options: ISCSIVolumeSource
): SerializedISCSIVolumeSource;
export function serializeISCSIVolumeSource(
    options: ISCSIVolumeSource | undefined
): SerializedISCSIVolumeSource | undefined;
export function serializeISCSIVolumeSource(
    options: ISCSIVolumeSource | undefined
): SerializedISCSIVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedISCSIVolumeSource = {
        chapAuthDiscovery: options.chapAuthDiscovery,
        chapAuthSession: options.chapAuthSession,
        fsType: options.fsType,
        initiatorName: options.initiatorName,
        iqn: options.iqn,
        iscsiInterface: options.iscsiInterface,
        lun: options.lun,
        portals: prelude.serialize(options.portals, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        readOnly: options.readOnly,
        secretRef: serializeLocalObjectReference(options.secretRef),
        targetPortal: options.targetPortal,
    };

    return senchou.wrapTemplate(options, result);
}

export type PersistentVolumeClaimVolumeSource = {
    readonly claimName: string;
    readonly readOnly?: boolean;
};

export type SerializedPersistentVolumeClaimVolumeSource = {
    claimName: string;
    readOnly?: boolean;
};

export function serializePersistentVolumeClaimVolumeSource(
    options: undefined
): undefined;
export function serializePersistentVolumeClaimVolumeSource(
    options: PersistentVolumeClaimVolumeSource
): SerializedPersistentVolumeClaimVolumeSource;
export function serializePersistentVolumeClaimVolumeSource(
    options: PersistentVolumeClaimVolumeSource | undefined
): SerializedPersistentVolumeClaimVolumeSource | undefined;
export function serializePersistentVolumeClaimVolumeSource(
    options: PersistentVolumeClaimVolumeSource | undefined
): SerializedPersistentVolumeClaimVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPersistentVolumeClaimVolumeSource = {
        claimName: options.claimName,
        readOnly: options.readOnly,
    };

    return senchou.wrapTemplate(options, result);
}

export type ProjectedVolumeSource = {
    readonly defaultMode?: number;
    readonly sources?: Array<VolumeProjection>;
};

export type SerializedProjectedVolumeSource = {
    defaultMode?: number;
    sources?: Array<SerializedVolumeProjection>;
};

export function serializeProjectedVolumeSource(options: undefined): undefined;
export function serializeProjectedVolumeSource(
    options: ProjectedVolumeSource
): SerializedProjectedVolumeSource;
export function serializeProjectedVolumeSource(
    options: ProjectedVolumeSource | undefined
): SerializedProjectedVolumeSource | undefined;
export function serializeProjectedVolumeSource(
    options: ProjectedVolumeSource | undefined
): SerializedProjectedVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedProjectedVolumeSource = {
        defaultMode: options.defaultMode,
        sources: prelude.serialize(options.sources, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeVolumeProjection(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type RBDVolumeSource = {
    readonly fsType?: string;
    readonly image: string;
    readonly keyring?: string;
    readonly monitors: Array<string>;
    readonly pool?: string;
    readonly readOnly?: boolean;
    readonly secretRef?: LocalObjectReference;
    readonly user?: string;
};

export type SerializedRBDVolumeSource = {
    fsType?: string;
    image: string;
    keyring?: string;
    monitors: Array<string>;
    pool?: string;
    readOnly?: boolean;
    secretRef?: SerializedLocalObjectReference;
    user?: string;
};

export function serializeRBDVolumeSource(options: undefined): undefined;
export function serializeRBDVolumeSource(
    options: RBDVolumeSource
): SerializedRBDVolumeSource;
export function serializeRBDVolumeSource(
    options: RBDVolumeSource | undefined
): SerializedRBDVolumeSource | undefined;
export function serializeRBDVolumeSource(
    options: RBDVolumeSource | undefined
): SerializedRBDVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedRBDVolumeSource = {
        fsType: options.fsType,
        image: options.image,
        keyring: options.keyring,
        monitors: prelude.serialize(options.monitors, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        pool: options.pool,
        readOnly: options.readOnly,
        secretRef: serializeLocalObjectReference(options.secretRef),
        user: options.user,
    };

    return senchou.wrapTemplate(options, result);
}

export type ScaleIOVolumeSource = {
    readonly fsType?: string;
    readonly gateway: string;
    readonly protectionDomain?: string;
    readonly readOnly?: boolean;
    readonly secretRef: LocalObjectReference;
    readonly sslEnabled?: boolean;
    readonly storageMode?: string;
    readonly storagePool?: string;
    readonly system: string;
    readonly volumeName?: string;
};

export type SerializedScaleIOVolumeSource = {
    fsType?: string;
    gateway: string;
    protectionDomain?: string;
    readOnly?: boolean;
    secretRef: SerializedLocalObjectReference;
    sslEnabled?: boolean;
    storageMode?: string;
    storagePool?: string;
    system: string;
    volumeName?: string;
};

export function serializeScaleIOVolumeSource(options: undefined): undefined;
export function serializeScaleIOVolumeSource(
    options: ScaleIOVolumeSource
): SerializedScaleIOVolumeSource;
export function serializeScaleIOVolumeSource(
    options: ScaleIOVolumeSource | undefined
): SerializedScaleIOVolumeSource | undefined;
export function serializeScaleIOVolumeSource(
    options: ScaleIOVolumeSource | undefined
): SerializedScaleIOVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedScaleIOVolumeSource = {
        fsType: options.fsType,
        gateway: options.gateway,
        protectionDomain: options.protectionDomain,
        readOnly: options.readOnly,
        secretRef: serializeLocalObjectReference(options.secretRef),
        sslEnabled: options.sslEnabled,
        storageMode: options.storageMode,
        storagePool: options.storagePool,
        system: options.system,
        volumeName: options.volumeName,
    };

    return senchou.wrapTemplate(options, result);
}

export type SecretVolumeSource = {
    readonly defaultMode?: number;
    readonly items?: Array<KeyToPath>;
    readonly optional?: boolean;
    readonly secretName?: string;
};

export type SerializedSecretVolumeSource = {
    defaultMode?: number;
    items?: Array<SerializedKeyToPath>;
    optional?: boolean;
    secretName?: string;
};

export function serializeSecretVolumeSource(options: undefined): undefined;
export function serializeSecretVolumeSource(
    options: SecretVolumeSource
): SerializedSecretVolumeSource;
export function serializeSecretVolumeSource(
    options: SecretVolumeSource | undefined
): SerializedSecretVolumeSource | undefined;
export function serializeSecretVolumeSource(
    options: SecretVolumeSource | undefined
): SerializedSecretVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSecretVolumeSource = {
        defaultMode: options.defaultMode,
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeKeyToPath(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        optional: options.optional,
        secretName: options.secretName,
    };

    return senchou.wrapTemplate(options, result);
}

export type StorageOSVolumeSource = {
    readonly fsType?: string;
    readonly readOnly?: boolean;
    readonly secretRef?: LocalObjectReference;
    readonly volumeName?: string;
    readonly volumeNamespace?: string;
};

export type SerializedStorageOSVolumeSource = {
    fsType?: string;
    readOnly?: boolean;
    secretRef?: SerializedLocalObjectReference;
    volumeName?: string;
    volumeNamespace?: string;
};

export function serializeStorageOSVolumeSource(options: undefined): undefined;
export function serializeStorageOSVolumeSource(
    options: StorageOSVolumeSource
): SerializedStorageOSVolumeSource;
export function serializeStorageOSVolumeSource(
    options: StorageOSVolumeSource | undefined
): SerializedStorageOSVolumeSource | undefined;
export function serializeStorageOSVolumeSource(
    options: StorageOSVolumeSource | undefined
): SerializedStorageOSVolumeSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedStorageOSVolumeSource = {
        fsType: options.fsType,
        readOnly: options.readOnly,
        secretRef: serializeLocalObjectReference(options.secretRef),
        volumeName: options.volumeName,
        volumeNamespace: options.volumeNamespace,
    };

    return senchou.wrapTemplate(options, result);
}

export type ScopedResourceSelectorRequirement = {
    readonly operator: string;
    readonly scopeName: string;
    readonly values?: Array<string>;
};

export type SerializedScopedResourceSelectorRequirement = {
    operator: string;
    scopeName: string;
    values?: Array<string>;
};

export function serializeScopedResourceSelectorRequirement(
    options: undefined
): undefined;
export function serializeScopedResourceSelectorRequirement(
    options: ScopedResourceSelectorRequirement
): SerializedScopedResourceSelectorRequirement;
export function serializeScopedResourceSelectorRequirement(
    options: ScopedResourceSelectorRequirement | undefined
): SerializedScopedResourceSelectorRequirement | undefined;
export function serializeScopedResourceSelectorRequirement(
    options: ScopedResourceSelectorRequirement | undefined
): SerializedScopedResourceSelectorRequirement | undefined {
    if (options === undefined) return undefined;
    const result: SerializedScopedResourceSelectorRequirement = {
        operator: options.operator,
        scopeName: options.scopeName,
        values: prelude.serialize(options.values, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type ClientIPConfig = {
    readonly timeoutSeconds?: number;
};

export type SerializedClientIPConfig = {
    timeoutSeconds?: number;
};

export function serializeClientIPConfig(options: undefined): undefined;
export function serializeClientIPConfig(
    options: ClientIPConfig
): SerializedClientIPConfig;
export function serializeClientIPConfig(
    options: ClientIPConfig | undefined
): SerializedClientIPConfig | undefined;
export function serializeClientIPConfig(
    options: ClientIPConfig | undefined
): SerializedClientIPConfig | undefined {
    if (options === undefined) return undefined;
    const result: SerializedClientIPConfig = {
        timeoutSeconds: options.timeoutSeconds,
    };

    return senchou.wrapTemplate(options, result);
}

export type ForZone = {
    readonly name: string;
};

export type SerializedForZone = {
    name: string;
};

export function serializeForZone(options: undefined): undefined;
export function serializeForZone(options: ForZone): SerializedForZone;
export function serializeForZone(
    options: ForZone | undefined
): SerializedForZone | undefined;
export function serializeForZone(
    options: ForZone | undefined
): SerializedForZone | undefined {
    if (options === undefined) return undefined;
    const result: SerializedForZone = {
        name: options.name,
    };

    return senchou.wrapTemplate(options, result);
}

export type ForZoneV1Beta1 = {
    readonly name: string;
};

export type SerializedForZoneV1Beta1 = {
    name: string;
};

export function serializeForZoneV1Beta1(options: undefined): undefined;
export function serializeForZoneV1Beta1(
    options: ForZoneV1Beta1
): SerializedForZoneV1Beta1;
export function serializeForZoneV1Beta1(
    options: ForZoneV1Beta1 | undefined
): SerializedForZoneV1Beta1 | undefined;
export function serializeForZoneV1Beta1(
    options: ForZoneV1Beta1 | undefined
): SerializedForZoneV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedForZoneV1Beta1 = {
        name: options.name,
    };

    return senchou.wrapTemplate(options, result);
}

export type NonResourcePolicyRuleV1Beta1 = {
    readonly nonResourceURLs: Array<string>;
    readonly verbs: Array<string>;
};

export type SerializedNonResourcePolicyRuleV1Beta1 = {
    nonResourceURLs: Array<string>;
    verbs: Array<string>;
};

export function serializeNonResourcePolicyRuleV1Beta1(
    options: undefined
): undefined;
export function serializeNonResourcePolicyRuleV1Beta1(
    options: NonResourcePolicyRuleV1Beta1
): SerializedNonResourcePolicyRuleV1Beta1;
export function serializeNonResourcePolicyRuleV1Beta1(
    options: NonResourcePolicyRuleV1Beta1 | undefined
): SerializedNonResourcePolicyRuleV1Beta1 | undefined;
export function serializeNonResourcePolicyRuleV1Beta1(
    options: NonResourcePolicyRuleV1Beta1 | undefined
): SerializedNonResourcePolicyRuleV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedNonResourcePolicyRuleV1Beta1 = {
        nonResourceURLs: prelude.serialize(options.nonResourceURLs, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        verbs: prelude.serialize(options.verbs, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type ResourcePolicyRuleV1Beta1 = {
    readonly apiGroups: Array<string>;
    readonly clusterScope?: boolean;
    readonly namespaces?: Array<string>;
    readonly resources: Array<string>;
    readonly verbs: Array<string>;
};

export type SerializedResourcePolicyRuleV1Beta1 = {
    apiGroups: Array<string>;
    clusterScope?: boolean;
    namespaces?: Array<string>;
    resources: Array<string>;
    verbs: Array<string>;
};

export function serializeResourcePolicyRuleV1Beta1(
    options: undefined
): undefined;
export function serializeResourcePolicyRuleV1Beta1(
    options: ResourcePolicyRuleV1Beta1
): SerializedResourcePolicyRuleV1Beta1;
export function serializeResourcePolicyRuleV1Beta1(
    options: ResourcePolicyRuleV1Beta1 | undefined
): SerializedResourcePolicyRuleV1Beta1 | undefined;
export function serializeResourcePolicyRuleV1Beta1(
    options: ResourcePolicyRuleV1Beta1 | undefined
): SerializedResourcePolicyRuleV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedResourcePolicyRuleV1Beta1 = {
        apiGroups: prelude.serialize(options.apiGroups, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        clusterScope: options.clusterScope,
        namespaces: prelude.serialize(options.namespaces, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        resources: prelude.serialize(options.resources, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        verbs: prelude.serialize(options.verbs, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type SubjectV1Beta1 = {
    readonly group?: GroupSubjectV1Beta1;
    readonly kind: string;
    readonly serviceAccount?: ServiceAccountSubjectV1Beta1;
    readonly user?: UserSubjectV1Beta1;
};

export type SerializedSubjectV1Beta1 = {
    group?: SerializedGroupSubjectV1Beta1;
    kind: string;
    serviceAccount?: SerializedServiceAccountSubjectV1Beta1;
    user?: SerializedUserSubjectV1Beta1;
};

export function serializeSubjectV1Beta1(options: undefined): undefined;
export function serializeSubjectV1Beta1(
    options: SubjectV1Beta1
): SerializedSubjectV1Beta1;
export function serializeSubjectV1Beta1(
    options: SubjectV1Beta1 | undefined
): SerializedSubjectV1Beta1 | undefined;
export function serializeSubjectV1Beta1(
    options: SubjectV1Beta1 | undefined
): SerializedSubjectV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSubjectV1Beta1 = {
        group: serializeGroupSubjectV1Beta1(options.group),
        kind: options.kind,
        serviceAccount: serializeServiceAccountSubjectV1Beta1(
            options.serviceAccount
        ),
        user: serializeUserSubjectV1Beta1(options.user),
    };

    return senchou.wrapTemplate(options, result);
}

export type LimitResponseV1Beta1 = {
    readonly queuing?: QueuingConfigurationV1Beta1;
    readonly type: string;
};

export type SerializedLimitResponseV1Beta1 = {
    queuing?: SerializedQueuingConfigurationV1Beta1;
    type: string;
};

export function serializeLimitResponseV1Beta1(options: undefined): undefined;
export function serializeLimitResponseV1Beta1(
    options: LimitResponseV1Beta1
): SerializedLimitResponseV1Beta1;
export function serializeLimitResponseV1Beta1(
    options: LimitResponseV1Beta1 | undefined
): SerializedLimitResponseV1Beta1 | undefined;
export function serializeLimitResponseV1Beta1(
    options: LimitResponseV1Beta1 | undefined
): SerializedLimitResponseV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedLimitResponseV1Beta1 = {
        queuing: serializeQueuingConfigurationV1Beta1(options.queuing),
        type: options.type,
    };

    return senchou.wrapTemplate(options, result);
}

export type IngressServiceBackend = {
    readonly name: string;
    readonly port?: ServiceBackendPort;
};

export type SerializedIngressServiceBackend = {
    name: string;
    port?: SerializedServiceBackendPort;
};

export function serializeIngressServiceBackend(options: undefined): undefined;
export function serializeIngressServiceBackend(
    options: IngressServiceBackend
): SerializedIngressServiceBackend;
export function serializeIngressServiceBackend(
    options: IngressServiceBackend | undefined
): SerializedIngressServiceBackend | undefined;
export function serializeIngressServiceBackend(
    options: IngressServiceBackend | undefined
): SerializedIngressServiceBackend | undefined {
    if (options === undefined) return undefined;
    const result: SerializedIngressServiceBackend = {
        name: options.name,
        port: serializeServiceBackendPort(options.port),
    };

    return senchou.wrapTemplate(options, result);
}

export type HTTPIngressRuleValue = {
    readonly paths: Array<HTTPIngressPath>;
};

export type SerializedHTTPIngressRuleValue = {
    paths: Array<SerializedHTTPIngressPath>;
};

export function serializeHTTPIngressRuleValue(options: undefined): undefined;
export function serializeHTTPIngressRuleValue(
    options: HTTPIngressRuleValue
): SerializedHTTPIngressRuleValue;
export function serializeHTTPIngressRuleValue(
    options: HTTPIngressRuleValue | undefined
): SerializedHTTPIngressRuleValue | undefined;
export function serializeHTTPIngressRuleValue(
    options: HTTPIngressRuleValue | undefined
): SerializedHTTPIngressRuleValue | undefined {
    if (options === undefined) return undefined;
    const result: SerializedHTTPIngressRuleValue = {
        paths: prelude.serialize(options.paths, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeHTTPIngressPath(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type NetworkPolicyPort = {
    readonly endPort?: number;
    readonly port?: IntOrString;
    readonly protocol?: string;
};

export type SerializedNetworkPolicyPort = {
    endPort?: number;
    port?: IntOrString;
    protocol?: string;
};

export function serializeNetworkPolicyPort(options: undefined): undefined;
export function serializeNetworkPolicyPort(
    options: NetworkPolicyPort
): SerializedNetworkPolicyPort;
export function serializeNetworkPolicyPort(
    options: NetworkPolicyPort | undefined
): SerializedNetworkPolicyPort | undefined;
export function serializeNetworkPolicyPort(
    options: NetworkPolicyPort | undefined
): SerializedNetworkPolicyPort | undefined {
    if (options === undefined) return undefined;
    const result: SerializedNetworkPolicyPort = {
        endPort: options.endPort,
        port: options.port,
        protocol: options.protocol,
    };

    return senchou.wrapTemplate(options, result);
}

export type NetworkPolicyPeer = {
    readonly ipBlock?: IPBlock;
    readonly namespaceSelector?: LabelSelector;
    readonly podSelector?: LabelSelector;
};

export type SerializedNetworkPolicyPeer = {
    ipBlock?: SerializedIPBlock;
    namespaceSelector?: SerializedLabelSelector;
    podSelector?: SerializedLabelSelector;
};

export function serializeNetworkPolicyPeer(options: undefined): undefined;
export function serializeNetworkPolicyPeer(
    options: NetworkPolicyPeer
): SerializedNetworkPolicyPeer;
export function serializeNetworkPolicyPeer(
    options: NetworkPolicyPeer | undefined
): SerializedNetworkPolicyPeer | undefined;
export function serializeNetworkPolicyPeer(
    options: NetworkPolicyPeer | undefined
): SerializedNetworkPolicyPeer | undefined {
    if (options === undefined) return undefined;
    const result: SerializedNetworkPolicyPeer = {
        ipBlock: serializeIPBlock(options.ipBlock),
        namespaceSelector: serializeLabelSelector(options.namespaceSelector),
        podSelector: serializeLabelSelector(options.podSelector),
    };

    return senchou.wrapTemplate(options, result);
}

export type IDRangeV1Beta1 = {
    readonly max: number;
    readonly min: number;
};

export type SerializedIDRangeV1Beta1 = {
    max: number;
    min: number;
};

export function serializeIDRangeV1Beta1(options: undefined): undefined;
export function serializeIDRangeV1Beta1(
    options: IDRangeV1Beta1
): SerializedIDRangeV1Beta1;
export function serializeIDRangeV1Beta1(
    options: IDRangeV1Beta1 | undefined
): SerializedIDRangeV1Beta1 | undefined;
export function serializeIDRangeV1Beta1(
    options: IDRangeV1Beta1 | undefined
): SerializedIDRangeV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedIDRangeV1Beta1 = {
        max: options.max,
        min: options.min,
    };

    return senchou.wrapTemplate(options, result);
}

export type VolumeNodeResources = {
    readonly count?: number;
};

export type SerializedVolumeNodeResources = {
    count?: number;
};

export function serializeVolumeNodeResources(options: undefined): undefined;
export function serializeVolumeNodeResources(
    options: VolumeNodeResources
): SerializedVolumeNodeResources;
export function serializeVolumeNodeResources(
    options: VolumeNodeResources | undefined
): SerializedVolumeNodeResources | undefined;
export function serializeVolumeNodeResources(
    options: VolumeNodeResources | undefined
): SerializedVolumeNodeResources | undefined {
    if (options === undefined) return undefined;
    const result: SerializedVolumeNodeResources = {
        count: options.count,
    };

    return senchou.wrapTemplate(options, result);
}

export type WebhookConversion = {
    readonly clientConfig?: WebhookClientConfig;
    readonly conversionReviewVersions: Array<string>;
};

export type SerializedWebhookConversion = {
    clientConfig?: SerializedWebhookClientConfig;
    conversionReviewVersions: Array<string>;
};

export function serializeWebhookConversion(options: undefined): undefined;
export function serializeWebhookConversion(
    options: WebhookConversion
): SerializedWebhookConversion;
export function serializeWebhookConversion(
    options: WebhookConversion | undefined
): SerializedWebhookConversion | undefined;
export function serializeWebhookConversion(
    options: WebhookConversion | undefined
): SerializedWebhookConversion | undefined {
    if (options === undefined) return undefined;
    const result: SerializedWebhookConversion = {
        clientConfig: serializeWebhookClientConfig(options.clientConfig),
        conversionReviewVersions: prelude.serialize(
            options.conversionReviewVersions,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items.map((item) => item).filter(prelude.isNotUndefined)
                )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type CustomResourceColumnDefinition = {
    readonly description?: string;
    readonly format?: string;
    readonly jsonPath: string;
    readonly name: string;
    readonly priority?: number;
    readonly type: string;
};

export type SerializedCustomResourceColumnDefinition = {
    description?: string;
    format?: string;
    jsonPath: string;
    name: string;
    priority?: number;
    type: string;
};

export function serializeCustomResourceColumnDefinition(
    options: undefined
): undefined;
export function serializeCustomResourceColumnDefinition(
    options: CustomResourceColumnDefinition
): SerializedCustomResourceColumnDefinition;
export function serializeCustomResourceColumnDefinition(
    options: CustomResourceColumnDefinition | undefined
): SerializedCustomResourceColumnDefinition | undefined;
export function serializeCustomResourceColumnDefinition(
    options: CustomResourceColumnDefinition | undefined
): SerializedCustomResourceColumnDefinition | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCustomResourceColumnDefinition = {
        description: options.description,
        format: options.format,
        jsonPath: options.jsonPath,
        name: options.name,
        priority: options.priority,
        type: options.type,
    };

    return senchou.wrapTemplate(options, result);
}

export type CustomResourceValidation = {
    readonly openAPIV3Schema?: JSONSchemaProps;
};

export type SerializedCustomResourceValidation = {
    openAPIV3Schema?: SerializedJSONSchemaProps;
};

export function serializeCustomResourceValidation(
    options: undefined
): undefined;
export function serializeCustomResourceValidation(
    options: CustomResourceValidation
): SerializedCustomResourceValidation;
export function serializeCustomResourceValidation(
    options: CustomResourceValidation | undefined
): SerializedCustomResourceValidation | undefined;
export function serializeCustomResourceValidation(
    options: CustomResourceValidation | undefined
): SerializedCustomResourceValidation | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCustomResourceValidation = {
        openAPIV3Schema: serializeJSONSchemaProps(options.openAPIV3Schema),
    };

    return senchou.wrapTemplate(options, result);
}

export type CustomResourceSubresources = {
    readonly scale?: CustomResourceSubresourceScale;
    readonly status?: any;
};

export type SerializedCustomResourceSubresources = {
    scale?: SerializedCustomResourceSubresourceScale;
    status?: any;
};

export function serializeCustomResourceSubresources(
    options: undefined
): undefined;
export function serializeCustomResourceSubresources(
    options: CustomResourceSubresources
): SerializedCustomResourceSubresources;
export function serializeCustomResourceSubresources(
    options: CustomResourceSubresources | undefined
): SerializedCustomResourceSubresources | undefined;
export function serializeCustomResourceSubresources(
    options: CustomResourceSubresources | undefined
): SerializedCustomResourceSubresources | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCustomResourceSubresources = {
        scale: serializeCustomResourceSubresourceScale(options.scale),
        status: options.status,
    };

    return senchou.wrapTemplate(options, result);
}

export type HPAScalingPolicyV2Beta2 = {
    readonly periodSeconds: number;
    readonly type: string;
    readonly value: number;
};

export type SerializedHPAScalingPolicyV2Beta2 = {
    periodSeconds: number;
    type: string;
    value: number;
};

export function serializeHPAScalingPolicyV2Beta2(options: undefined): undefined;
export function serializeHPAScalingPolicyV2Beta2(
    options: HPAScalingPolicyV2Beta2
): SerializedHPAScalingPolicyV2Beta2;
export function serializeHPAScalingPolicyV2Beta2(
    options: HPAScalingPolicyV2Beta2 | undefined
): SerializedHPAScalingPolicyV2Beta2 | undefined;
export function serializeHPAScalingPolicyV2Beta2(
    options: HPAScalingPolicyV2Beta2 | undefined
): SerializedHPAScalingPolicyV2Beta2 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedHPAScalingPolicyV2Beta2 = {
        periodSeconds: options.periodSeconds,
        type: options.type,
        value: options.value,
    };

    return senchou.wrapTemplate(options, result);
}

export type MetricTargetV2Beta2 = {
    readonly averageUtilization?: number;
    readonly averageValue?: Quantity;
    readonly type: string;
    readonly value?: Quantity;
};

export type SerializedMetricTargetV2Beta2 = {
    averageUtilization?: number;
    averageValue?: Quantity;
    type: string;
    value?: Quantity;
};

export function serializeMetricTargetV2Beta2(options: undefined): undefined;
export function serializeMetricTargetV2Beta2(
    options: MetricTargetV2Beta2
): SerializedMetricTargetV2Beta2;
export function serializeMetricTargetV2Beta2(
    options: MetricTargetV2Beta2 | undefined
): SerializedMetricTargetV2Beta2 | undefined;
export function serializeMetricTargetV2Beta2(
    options: MetricTargetV2Beta2 | undefined
): SerializedMetricTargetV2Beta2 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedMetricTargetV2Beta2 = {
        averageUtilization: options.averageUtilization,
        averageValue: options.averageValue,
        type: options.type,
        value: options.value,
    };

    return senchou.wrapTemplate(options, result);
}

export type MetricIdentifierV2Beta2 = {
    readonly name: string;
    readonly selector?: LabelSelector;
};

export type SerializedMetricIdentifierV2Beta2 = {
    name: string;
    selector?: SerializedLabelSelector;
};

export function serializeMetricIdentifierV2Beta2(options: undefined): undefined;
export function serializeMetricIdentifierV2Beta2(
    options: MetricIdentifierV2Beta2
): SerializedMetricIdentifierV2Beta2;
export function serializeMetricIdentifierV2Beta2(
    options: MetricIdentifierV2Beta2 | undefined
): SerializedMetricIdentifierV2Beta2 | undefined;
export function serializeMetricIdentifierV2Beta2(
    options: MetricIdentifierV2Beta2 | undefined
): SerializedMetricIdentifierV2Beta2 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedMetricIdentifierV2Beta2 = {
        name: options.name,
        selector: serializeLabelSelector(options.selector),
    };

    return senchou.wrapTemplate(options, result);
}

export type NodeSelectorTerm = {
    readonly matchExpressions?: Array<NodeSelectorRequirement>;
    readonly matchFields?: Array<NodeSelectorRequirement>;
};

export type SerializedNodeSelectorTerm = {
    matchExpressions?: Array<SerializedNodeSelectorRequirement>;
    matchFields?: Array<SerializedNodeSelectorRequirement>;
};

export function serializeNodeSelectorTerm(options: undefined): undefined;
export function serializeNodeSelectorTerm(
    options: NodeSelectorTerm
): SerializedNodeSelectorTerm;
export function serializeNodeSelectorTerm(
    options: NodeSelectorTerm | undefined
): SerializedNodeSelectorTerm | undefined;
export function serializeNodeSelectorTerm(
    options: NodeSelectorTerm | undefined
): SerializedNodeSelectorTerm | undefined {
    if (options === undefined) return undefined;
    const result: SerializedNodeSelectorTerm = {
        matchExpressions: prelude.serialize(options.matchExpressions, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeNodeSelectorRequirement(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        matchFields: prelude.serialize(options.matchFields, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeNodeSelectorRequirement(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type PreferredSchedulingTerm = {
    readonly preference: NodeSelectorTerm;
    readonly weight: number;
};

export type SerializedPreferredSchedulingTerm = {
    preference: SerializedNodeSelectorTerm;
    weight: number;
};

export function serializePreferredSchedulingTerm(options: undefined): undefined;
export function serializePreferredSchedulingTerm(
    options: PreferredSchedulingTerm
): SerializedPreferredSchedulingTerm;
export function serializePreferredSchedulingTerm(
    options: PreferredSchedulingTerm | undefined
): SerializedPreferredSchedulingTerm | undefined;
export function serializePreferredSchedulingTerm(
    options: PreferredSchedulingTerm | undefined
): SerializedPreferredSchedulingTerm | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPreferredSchedulingTerm = {
        preference: serializeNodeSelectorTerm(options.preference),
        weight: options.weight,
    };

    return senchou.wrapTemplate(options, result);
}

export type WeightedPodAffinityTerm = {
    readonly podAffinityTerm: PodAffinityTerm;
    readonly weight: number;
};

export type SerializedWeightedPodAffinityTerm = {
    podAffinityTerm: SerializedPodAffinityTerm;
    weight: number;
};

export function serializeWeightedPodAffinityTerm(options: undefined): undefined;
export function serializeWeightedPodAffinityTerm(
    options: WeightedPodAffinityTerm
): SerializedWeightedPodAffinityTerm;
export function serializeWeightedPodAffinityTerm(
    options: WeightedPodAffinityTerm | undefined
): SerializedWeightedPodAffinityTerm | undefined;
export function serializeWeightedPodAffinityTerm(
    options: WeightedPodAffinityTerm | undefined
): SerializedWeightedPodAffinityTerm | undefined {
    if (options === undefined) return undefined;
    const result: SerializedWeightedPodAffinityTerm = {
        podAffinityTerm: serializePodAffinityTerm(options.podAffinityTerm),
        weight: options.weight,
    };

    return senchou.wrapTemplate(options, result);
}

export type PodAffinityTerm = {
    readonly labelSelector?: LabelSelector;
    readonly namespaceSelector?: LabelSelector;
    readonly namespaces?: Array<string>;
    readonly topologyKey: string;
};

export type SerializedPodAffinityTerm = {
    labelSelector?: SerializedLabelSelector;
    namespaceSelector?: SerializedLabelSelector;
    namespaces?: Array<string>;
    topologyKey: string;
};

export function serializePodAffinityTerm(options: undefined): undefined;
export function serializePodAffinityTerm(
    options: PodAffinityTerm
): SerializedPodAffinityTerm;
export function serializePodAffinityTerm(
    options: PodAffinityTerm | undefined
): SerializedPodAffinityTerm | undefined;
export function serializePodAffinityTerm(
    options: PodAffinityTerm | undefined
): SerializedPodAffinityTerm | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPodAffinityTerm = {
        labelSelector: serializeLabelSelector(options.labelSelector),
        namespaceSelector: serializeLabelSelector(options.namespaceSelector),
        namespaces: prelude.serialize(options.namespaces, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        topologyKey: options.topologyKey,
    };

    return senchou.wrapTemplate(options, result);
}

export type EnvVarSource = {
    readonly configMapKeyRef?: ConfigMapKeySelector;
    readonly fieldRef?: ObjectFieldSelector;
    readonly resourceFieldRef?: ResourceFieldSelector;
    readonly secretKeyRef?: SecretKeySelector;
};

export type SerializedEnvVarSource = {
    configMapKeyRef?: SerializedConfigMapKeySelector;
    fieldRef?: SerializedObjectFieldSelector;
    resourceFieldRef?: SerializedResourceFieldSelector;
    secretKeyRef?: SerializedSecretKeySelector;
};

export function serializeEnvVarSource(options: undefined): undefined;
export function serializeEnvVarSource(
    options: EnvVarSource
): SerializedEnvVarSource;
export function serializeEnvVarSource(
    options: EnvVarSource | undefined
): SerializedEnvVarSource | undefined;
export function serializeEnvVarSource(
    options: EnvVarSource | undefined
): SerializedEnvVarSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedEnvVarSource = {
        configMapKeyRef: serializeConfigMapKeySelector(options.configMapKeyRef),
        fieldRef: serializeObjectFieldSelector(options.fieldRef),
        resourceFieldRef: serializeResourceFieldSelector(
            options.resourceFieldRef
        ),
        secretKeyRef: serializeSecretKeySelector(options.secretKeyRef),
    };

    return senchou.wrapTemplate(options, result);
}

export type ConfigMapEnvSource = {
    readonly name?: string;
    readonly optional?: boolean;
};

export type SerializedConfigMapEnvSource = {
    name?: string;
    optional?: boolean;
};

export function serializeConfigMapEnvSource(options: undefined): undefined;
export function serializeConfigMapEnvSource(
    options: ConfigMapEnvSource
): SerializedConfigMapEnvSource;
export function serializeConfigMapEnvSource(
    options: ConfigMapEnvSource | undefined
): SerializedConfigMapEnvSource | undefined;
export function serializeConfigMapEnvSource(
    options: ConfigMapEnvSource | undefined
): SerializedConfigMapEnvSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedConfigMapEnvSource = {
        name: options.name,
        optional: options.optional,
    };

    return senchou.wrapTemplate(options, result);
}

export type SecretEnvSource = {
    readonly name?: string;
    readonly optional?: boolean;
};

export type SerializedSecretEnvSource = {
    name?: string;
    optional?: boolean;
};

export function serializeSecretEnvSource(options: undefined): undefined;
export function serializeSecretEnvSource(
    options: SecretEnvSource
): SerializedSecretEnvSource;
export function serializeSecretEnvSource(
    options: SecretEnvSource | undefined
): SerializedSecretEnvSource | undefined;
export function serializeSecretEnvSource(
    options: SecretEnvSource | undefined
): SerializedSecretEnvSource | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSecretEnvSource = {
        name: options.name,
        optional: options.optional,
    };

    return senchou.wrapTemplate(options, result);
}

export type Handler = {
    readonly exec?: ExecAction;
    readonly httpGet?: HTTPGetAction;
    readonly tcpSocket?: TCPSocketAction;
};

export type SerializedHandler = {
    exec?: SerializedExecAction;
    httpGet?: SerializedHTTPGetAction;
    tcpSocket?: SerializedTCPSocketAction;
};

export function serializeHandler(options: undefined): undefined;
export function serializeHandler(options: Handler): SerializedHandler;
export function serializeHandler(
    options: Handler | undefined
): SerializedHandler | undefined;
export function serializeHandler(
    options: Handler | undefined
): SerializedHandler | undefined {
    if (options === undefined) return undefined;
    const result: SerializedHandler = {
        exec: serializeExecAction(options.exec),
        httpGet: serializeHTTPGetAction(options.httpGet),
        tcpSocket: serializeTCPSocketAction(options.tcpSocket),
    };

    return senchou.wrapTemplate(options, result);
}

export type ExecAction = {
    readonly command?: Array<string>;
};

export type SerializedExecAction = {
    command?: Array<string>;
};

export function serializeExecAction(options: undefined): undefined;
export function serializeExecAction(options: ExecAction): SerializedExecAction;
export function serializeExecAction(
    options: ExecAction | undefined
): SerializedExecAction | undefined;
export function serializeExecAction(
    options: ExecAction | undefined
): SerializedExecAction | undefined {
    if (options === undefined) return undefined;
    const result: SerializedExecAction = {
        command: prelude.serialize(options.command, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type HTTPGetAction = {
    readonly host?: string;
    readonly httpHeaders?: Array<HTTPHeader>;
    readonly path?: string;
    readonly port: IntOrString;
    readonly scheme?: string;
};

export type SerializedHTTPGetAction = {
    host?: string;
    httpHeaders?: Array<SerializedHTTPHeader>;
    path?: string;
    port: IntOrString;
    scheme?: string;
};

export function serializeHTTPGetAction(options: undefined): undefined;
export function serializeHTTPGetAction(
    options: HTTPGetAction
): SerializedHTTPGetAction;
export function serializeHTTPGetAction(
    options: HTTPGetAction | undefined
): SerializedHTTPGetAction | undefined;
export function serializeHTTPGetAction(
    options: HTTPGetAction | undefined
): SerializedHTTPGetAction | undefined {
    if (options === undefined) return undefined;
    const result: SerializedHTTPGetAction = {
        host: options.host,
        httpHeaders: prelude.serialize(options.httpHeaders, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeHTTPHeader(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        path: options.path,
        port: options.port,
        scheme: options.scheme,
    };

    return senchou.wrapTemplate(options, result);
}

export type TCPSocketAction = {
    readonly host?: string;
    readonly port: IntOrString;
};

export type SerializedTCPSocketAction = {
    host?: string;
    port: IntOrString;
};

export function serializeTCPSocketAction(options: undefined): undefined;
export function serializeTCPSocketAction(
    options: TCPSocketAction
): SerializedTCPSocketAction;
export function serializeTCPSocketAction(
    options: TCPSocketAction | undefined
): SerializedTCPSocketAction | undefined;
export function serializeTCPSocketAction(
    options: TCPSocketAction | undefined
): SerializedTCPSocketAction | undefined {
    if (options === undefined) return undefined;
    const result: SerializedTCPSocketAction = {
        host: options.host,
        port: options.port,
    };

    return senchou.wrapTemplate(options, result);
}

export type Capabilities = {
    readonly add?: Array<string>;
    readonly drop?: Array<string>;
};

export type SerializedCapabilities = {
    add?: Array<string>;
    drop?: Array<string>;
};

export function serializeCapabilities(options: undefined): undefined;
export function serializeCapabilities(
    options: Capabilities
): SerializedCapabilities;
export function serializeCapabilities(
    options: Capabilities | undefined
): SerializedCapabilities | undefined;
export function serializeCapabilities(
    options: Capabilities | undefined
): SerializedCapabilities | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCapabilities = {
        add: prelude.serialize(options.add, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        drop: prelude.serialize(options.drop, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type KeyToPath = {
    readonly key: string;
    readonly mode?: number;
    readonly path: string;
};

export type SerializedKeyToPath = {
    key: string;
    mode?: number;
    path: string;
};

export function serializeKeyToPath(options: undefined): undefined;
export function serializeKeyToPath(options: KeyToPath): SerializedKeyToPath;
export function serializeKeyToPath(
    options: KeyToPath | undefined
): SerializedKeyToPath | undefined;
export function serializeKeyToPath(
    options: KeyToPath | undefined
): SerializedKeyToPath | undefined {
    if (options === undefined) return undefined;
    const result: SerializedKeyToPath = {
        key: options.key,
        mode: options.mode,
        path: options.path,
    };

    return senchou.wrapTemplate(options, result);
}

export type DownwardAPIVolumeFile = {
    readonly fieldRef?: ObjectFieldSelector;
    readonly mode?: number;
    readonly path: string;
    readonly resourceFieldRef?: ResourceFieldSelector;
};

export type SerializedDownwardAPIVolumeFile = {
    fieldRef?: SerializedObjectFieldSelector;
    mode?: number;
    path: string;
    resourceFieldRef?: SerializedResourceFieldSelector;
};

export function serializeDownwardAPIVolumeFile(options: undefined): undefined;
export function serializeDownwardAPIVolumeFile(
    options: DownwardAPIVolumeFile
): SerializedDownwardAPIVolumeFile;
export function serializeDownwardAPIVolumeFile(
    options: DownwardAPIVolumeFile | undefined
): SerializedDownwardAPIVolumeFile | undefined;
export function serializeDownwardAPIVolumeFile(
    options: DownwardAPIVolumeFile | undefined
): SerializedDownwardAPIVolumeFile | undefined {
    if (options === undefined) return undefined;
    const result: SerializedDownwardAPIVolumeFile = {
        fieldRef: serializeObjectFieldSelector(options.fieldRef),
        mode: options.mode,
        path: options.path,
        resourceFieldRef: serializeResourceFieldSelector(
            options.resourceFieldRef
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type PersistentVolumeClaimTemplate = {
    readonly metadata?: ObjectMeta;
    readonly spec: PersistentVolumeClaimSpec;
};

export type SerializedPersistentVolumeClaimTemplate = {
    metadata?: SerializedObjectMeta;
    spec: SerializedPersistentVolumeClaimSpec;
};

export function serializePersistentVolumeClaimTemplate(
    options: undefined
): undefined;
export function serializePersistentVolumeClaimTemplate(
    options: PersistentVolumeClaimTemplate
): SerializedPersistentVolumeClaimTemplate;
export function serializePersistentVolumeClaimTemplate(
    options: PersistentVolumeClaimTemplate | undefined
): SerializedPersistentVolumeClaimTemplate | undefined;
export function serializePersistentVolumeClaimTemplate(
    options: PersistentVolumeClaimTemplate | undefined
): SerializedPersistentVolumeClaimTemplate | undefined {
    if (options === undefined) return undefined;
    const result: SerializedPersistentVolumeClaimTemplate = {
        metadata: serializeObjectMeta(options.metadata),
        spec: serializePersistentVolumeClaimSpec(options.spec),
    };

    return senchou.wrapTemplate(options, result);
}

export type VolumeProjection = {
    readonly configMap?: ConfigMapProjection;
    readonly downwardAPI?: DownwardAPIProjection;
    readonly secret?: SecretProjection;
    readonly serviceAccountToken?: ServiceAccountTokenProjection;
};

export type SerializedVolumeProjection = {
    configMap?: SerializedConfigMapProjection;
    downwardAPI?: SerializedDownwardAPIProjection;
    secret?: SerializedSecretProjection;
    serviceAccountToken?: SerializedServiceAccountTokenProjection;
};

export function serializeVolumeProjection(options: undefined): undefined;
export function serializeVolumeProjection(
    options: VolumeProjection
): SerializedVolumeProjection;
export function serializeVolumeProjection(
    options: VolumeProjection | undefined
): SerializedVolumeProjection | undefined;
export function serializeVolumeProjection(
    options: VolumeProjection | undefined
): SerializedVolumeProjection | undefined {
    if (options === undefined) return undefined;
    const result: SerializedVolumeProjection = {
        configMap: serializeConfigMapProjection(options.configMap),
        downwardAPI: serializeDownwardAPIProjection(options.downwardAPI),
        secret: serializeSecretProjection(options.secret),
        serviceAccountToken: serializeServiceAccountTokenProjection(
            options.serviceAccountToken
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type GroupSubjectV1Beta1 = {
    readonly name: string;
};

export type SerializedGroupSubjectV1Beta1 = {
    name: string;
};

export function serializeGroupSubjectV1Beta1(options: undefined): undefined;
export function serializeGroupSubjectV1Beta1(
    options: GroupSubjectV1Beta1
): SerializedGroupSubjectV1Beta1;
export function serializeGroupSubjectV1Beta1(
    options: GroupSubjectV1Beta1 | undefined
): SerializedGroupSubjectV1Beta1 | undefined;
export function serializeGroupSubjectV1Beta1(
    options: GroupSubjectV1Beta1 | undefined
): SerializedGroupSubjectV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedGroupSubjectV1Beta1 = {
        name: options.name,
    };

    return senchou.wrapTemplate(options, result);
}

export type ServiceAccountSubjectV1Beta1 = {
    readonly name: string;
    readonly namespace: string;
};

export type SerializedServiceAccountSubjectV1Beta1 = {
    name: string;
    namespace: string;
};

export function serializeServiceAccountSubjectV1Beta1(
    options: undefined
): undefined;
export function serializeServiceAccountSubjectV1Beta1(
    options: ServiceAccountSubjectV1Beta1
): SerializedServiceAccountSubjectV1Beta1;
export function serializeServiceAccountSubjectV1Beta1(
    options: ServiceAccountSubjectV1Beta1 | undefined
): SerializedServiceAccountSubjectV1Beta1 | undefined;
export function serializeServiceAccountSubjectV1Beta1(
    options: ServiceAccountSubjectV1Beta1 | undefined
): SerializedServiceAccountSubjectV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedServiceAccountSubjectV1Beta1 = {
        name: options.name,
        namespace: options.namespace,
    };

    return senchou.wrapTemplate(options, result);
}

export type UserSubjectV1Beta1 = {
    readonly name: string;
};

export type SerializedUserSubjectV1Beta1 = {
    name: string;
};

export function serializeUserSubjectV1Beta1(options: undefined): undefined;
export function serializeUserSubjectV1Beta1(
    options: UserSubjectV1Beta1
): SerializedUserSubjectV1Beta1;
export function serializeUserSubjectV1Beta1(
    options: UserSubjectV1Beta1 | undefined
): SerializedUserSubjectV1Beta1 | undefined;
export function serializeUserSubjectV1Beta1(
    options: UserSubjectV1Beta1 | undefined
): SerializedUserSubjectV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedUserSubjectV1Beta1 = {
        name: options.name,
    };

    return senchou.wrapTemplate(options, result);
}

export type QueuingConfigurationV1Beta1 = {
    readonly handSize?: number;
    readonly queueLengthLimit?: number;
    readonly queues?: number;
};

export type SerializedQueuingConfigurationV1Beta1 = {
    handSize?: number;
    queueLengthLimit?: number;
    queues?: number;
};

export function serializeQueuingConfigurationV1Beta1(
    options: undefined
): undefined;
export function serializeQueuingConfigurationV1Beta1(
    options: QueuingConfigurationV1Beta1
): SerializedQueuingConfigurationV1Beta1;
export function serializeQueuingConfigurationV1Beta1(
    options: QueuingConfigurationV1Beta1 | undefined
): SerializedQueuingConfigurationV1Beta1 | undefined;
export function serializeQueuingConfigurationV1Beta1(
    options: QueuingConfigurationV1Beta1 | undefined
): SerializedQueuingConfigurationV1Beta1 | undefined {
    if (options === undefined) return undefined;
    const result: SerializedQueuingConfigurationV1Beta1 = {
        handSize: options.handSize,
        queueLengthLimit: options.queueLengthLimit,
        queues: options.queues,
    };

    return senchou.wrapTemplate(options, result);
}

export type ServiceBackendPort = {
    readonly name?: string;
    readonly number?: number;
};

export type SerializedServiceBackendPort = {
    name?: string;
    number?: number;
};

export function serializeServiceBackendPort(options: undefined): undefined;
export function serializeServiceBackendPort(
    options: ServiceBackendPort
): SerializedServiceBackendPort;
export function serializeServiceBackendPort(
    options: ServiceBackendPort | undefined
): SerializedServiceBackendPort | undefined;
export function serializeServiceBackendPort(
    options: ServiceBackendPort | undefined
): SerializedServiceBackendPort | undefined {
    if (options === undefined) return undefined;
    const result: SerializedServiceBackendPort = {
        name: options.name,
        number: options.number,
    };

    return senchou.wrapTemplate(options, result);
}

export type HTTPIngressPath = {
    readonly backend: IngressBackend;
    readonly path?: string;
    readonly pathType: string;
};

export type SerializedHTTPIngressPath = {
    backend: SerializedIngressBackend;
    path?: string;
    pathType: string;
};

export function serializeHTTPIngressPath(options: undefined): undefined;
export function serializeHTTPIngressPath(
    options: HTTPIngressPath
): SerializedHTTPIngressPath;
export function serializeHTTPIngressPath(
    options: HTTPIngressPath | undefined
): SerializedHTTPIngressPath | undefined;
export function serializeHTTPIngressPath(
    options: HTTPIngressPath | undefined
): SerializedHTTPIngressPath | undefined {
    if (options === undefined) return undefined;
    const result: SerializedHTTPIngressPath = {
        backend: serializeIngressBackend(options.backend),
        path: options.path,
        pathType: options.pathType,
    };

    return senchou.wrapTemplate(options, result);
}

export type IPBlock = {
    readonly cidr: string;
    readonly except?: Array<string>;
};

export type SerializedIPBlock = {
    cidr: string;
    except?: Array<string>;
};

export function serializeIPBlock(options: undefined): undefined;
export function serializeIPBlock(options: IPBlock): SerializedIPBlock;
export function serializeIPBlock(
    options: IPBlock | undefined
): SerializedIPBlock | undefined;
export function serializeIPBlock(
    options: IPBlock | undefined
): SerializedIPBlock | undefined {
    if (options === undefined) return undefined;
    const result: SerializedIPBlock = {
        cidr: options.cidr,
        except: prelude.serialize(options.except, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type JSONSchemaProps = {
    readonly $ref?: string;
    readonly $schema?: string;
    readonly additionalItems?: any;
    readonly additionalProperties?: any;
    readonly allOf?: Array<JSONSchemaProps>;
    readonly anyOf?: Array<JSONSchemaProps>;
    readonly default?: any;
    readonly definitions?: { [key: string]: JSONSchemaProps };
    readonly dependencies?: { [key: string]: any };
    readonly description?: string;
    readonly enum?: Array<any>;
    readonly example?: any;
    readonly exclusiveMaximum?: boolean;
    readonly exclusiveMinimum?: boolean;
    readonly externalDocs?: ExternalDocumentation;
    readonly format?: string;
    readonly id?: string;
    readonly items?: any;
    readonly maxItems?: number;
    readonly maxLength?: number;
    readonly maxProperties?: number;
    readonly maximum?: number;
    readonly minItems?: number;
    readonly minLength?: number;
    readonly minProperties?: number;
    readonly minimum?: number;
    readonly multipleOf?: number;
    readonly not?: JSONSchemaProps;
    readonly nullable?: boolean;
    readonly oneOf?: Array<JSONSchemaProps>;
    readonly pattern?: string;
    readonly patternProperties?: { [key: string]: JSONSchemaProps };
    readonly properties?: { [key: string]: JSONSchemaProps };
    readonly required?: Array<string>;
    readonly title?: string;
    readonly type?: string;
    readonly uniqueItems?: boolean;
    readonly xKubernetesEmbeddedResource?: boolean;
    readonly xKubernetesIntOrString?: boolean;
    readonly xKubernetesListMapKeys?: Array<string>;
    readonly xKubernetesListType?: string;
    readonly xKubernetesMapType?: string;
    readonly xKubernetesPreserveUnknownFields?: boolean;
};

export type SerializedJSONSchemaProps = {
    $ref?: string;
    $schema?: string;
    additionalItems?: any;
    additionalProperties?: any;
    allOf?: Array<SerializedJSONSchemaProps>;
    anyOf?: Array<SerializedJSONSchemaProps>;
    default?: any;
    definitions?: { [key: string]: JSONSchemaProps };
    dependencies?: { [key: string]: any };
    description?: string;
    enum?: Array<any>;
    example?: any;
    exclusiveMaximum?: boolean;
    exclusiveMinimum?: boolean;
    externalDocs?: SerializedExternalDocumentation;
    format?: string;
    id?: string;
    items?: any;
    maxItems?: number;
    maxLength?: number;
    maxProperties?: number;
    maximum?: number;
    minItems?: number;
    minLength?: number;
    minProperties?: number;
    minimum?: number;
    multipleOf?: number;
    not?: SerializedJSONSchemaProps;
    nullable?: boolean;
    oneOf?: Array<SerializedJSONSchemaProps>;
    pattern?: string;
    patternProperties?: { [key: string]: JSONSchemaProps };
    properties?: { [key: string]: JSONSchemaProps };
    required?: Array<string>;
    title?: string;
    type?: string;
    uniqueItems?: boolean;
    "x-kubernetes-embedded-resource"?: boolean;
    "x-kubernetes-int-or-string"?: boolean;
    "x-kubernetes-list-map-keys"?: Array<string>;
    "x-kubernetes-list-type"?: string;
    "x-kubernetes-map-type"?: string;
    "x-kubernetes-preserve-unknown-fields"?: boolean;
};

export function serializeJSONSchemaProps(options: undefined): undefined;
export function serializeJSONSchemaProps(
    options: JSONSchemaProps
): SerializedJSONSchemaProps;
export function serializeJSONSchemaProps(
    options: JSONSchemaProps | undefined
): SerializedJSONSchemaProps | undefined;
export function serializeJSONSchemaProps(
    options: JSONSchemaProps | undefined
): SerializedJSONSchemaProps | undefined {
    if (options === undefined) return undefined;
    const result: SerializedJSONSchemaProps = {
        $ref: options.$ref,
        $schema: options.$schema,
        additionalItems: options.additionalItems,
        additionalProperties: options.additionalProperties,
        allOf: prelude.serialize(options.allOf, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeJSONSchemaProps(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        anyOf: prelude.serialize(options.anyOf, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeJSONSchemaProps(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        default: options.default,
        definitions:
            options.definitions === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.definitions,
                      Object.entries(options.definitions).reduce(
                          (r, i) =>
                              i[1] === undefined
                                  ? r
                                  : {
                                        ...r,
                                        [i[0]]: serializeJSONSchemaProps(i[1]),
                                    },
                          {}
                      )
                  ),
        dependencies:
            options.dependencies === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.dependencies,
                      Object.entries(options.dependencies).reduce(
                          (r, i) =>
                              i[1] === undefined ? r : { ...r, [i[0]]: i[1] },
                          {}
                      )
                  ),
        description: options.description,
        enum: prelude.serialize(options.enum, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        example: options.example,
        exclusiveMaximum: options.exclusiveMaximum,
        exclusiveMinimum: options.exclusiveMinimum,
        externalDocs: serializeExternalDocumentation(options.externalDocs),
        format: options.format,
        id: options.id,
        items: options.items,
        maxItems: options.maxItems,
        maxLength: options.maxLength,
        maxProperties: options.maxProperties,
        maximum: options.maximum,
        minItems: options.minItems,
        minLength: options.minLength,
        minProperties: options.minProperties,
        minimum: options.minimum,
        multipleOf: options.multipleOf,
        not: serializeJSONSchemaProps(options.not),
        nullable: options.nullable,
        oneOf: prelude.serialize(options.oneOf, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeJSONSchemaProps(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        pattern: options.pattern,
        patternProperties:
            options.patternProperties === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.patternProperties,
                      Object.entries(options.patternProperties).reduce(
                          (r, i) =>
                              i[1] === undefined
                                  ? r
                                  : {
                                        ...r,
                                        [i[0]]: serializeJSONSchemaProps(i[1]),
                                    },
                          {}
                      )
                  ),
        properties:
            options.properties === undefined
                ? undefined
                : senchou.wrapTemplate(
                      options.properties,
                      Object.entries(options.properties).reduce(
                          (r, i) =>
                              i[1] === undefined
                                  ? r
                                  : {
                                        ...r,
                                        [i[0]]: serializeJSONSchemaProps(i[1]),
                                    },
                          {}
                      )
                  ),
        required: prelude.serialize(options.required, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
        title: options.title,
        type: options.type,
        uniqueItems: options.uniqueItems,
        "x-kubernetes-embedded-resource": options.xKubernetesEmbeddedResource,
        "x-kubernetes-int-or-string": options.xKubernetesIntOrString,
        "x-kubernetes-list-map-keys": prelude.serialize(
            options.xKubernetesListMapKeys,
            (items) =>
                senchou.wrapTemplate(
                    items,
                    items.map((item) => item).filter(prelude.isNotUndefined)
                )
        ),
        "x-kubernetes-list-type": options.xKubernetesListType,
        "x-kubernetes-map-type": options.xKubernetesMapType,
        "x-kubernetes-preserve-unknown-fields":
            options.xKubernetesPreserveUnknownFields,
    };

    return senchou.wrapTemplate(options, result);
}

export type CustomResourceSubresourceScale = {
    readonly labelSelectorPath?: string;
    readonly specReplicasPath: string;
    readonly statusReplicasPath: string;
};

export type SerializedCustomResourceSubresourceScale = {
    labelSelectorPath?: string;
    specReplicasPath: string;
    statusReplicasPath: string;
};

export function serializeCustomResourceSubresourceScale(
    options: undefined
): undefined;
export function serializeCustomResourceSubresourceScale(
    options: CustomResourceSubresourceScale
): SerializedCustomResourceSubresourceScale;
export function serializeCustomResourceSubresourceScale(
    options: CustomResourceSubresourceScale | undefined
): SerializedCustomResourceSubresourceScale | undefined;
export function serializeCustomResourceSubresourceScale(
    options: CustomResourceSubresourceScale | undefined
): SerializedCustomResourceSubresourceScale | undefined {
    if (options === undefined) return undefined;
    const result: SerializedCustomResourceSubresourceScale = {
        labelSelectorPath: options.labelSelectorPath,
        specReplicasPath: options.specReplicasPath,
        statusReplicasPath: options.statusReplicasPath,
    };

    return senchou.wrapTemplate(options, result);
}

export type NodeSelectorRequirement = {
    readonly key: string;
    readonly operator: string;
    readonly values?: Array<string>;
};

export type SerializedNodeSelectorRequirement = {
    key: string;
    operator: string;
    values?: Array<string>;
};

export function serializeNodeSelectorRequirement(options: undefined): undefined;
export function serializeNodeSelectorRequirement(
    options: NodeSelectorRequirement
): SerializedNodeSelectorRequirement;
export function serializeNodeSelectorRequirement(
    options: NodeSelectorRequirement | undefined
): SerializedNodeSelectorRequirement | undefined;
export function serializeNodeSelectorRequirement(
    options: NodeSelectorRequirement | undefined
): SerializedNodeSelectorRequirement | undefined {
    if (options === undefined) return undefined;
    const result: SerializedNodeSelectorRequirement = {
        key: options.key,
        operator: options.operator,
        values: prelude.serialize(options.values, (items) =>
            senchou.wrapTemplate(
                items,
                items.map((item) => item).filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type ConfigMapKeySelector = {
    readonly key: string;
    readonly name?: string;
    readonly optional?: boolean;
};

export type SerializedConfigMapKeySelector = {
    key: string;
    name?: string;
    optional?: boolean;
};

export function serializeConfigMapKeySelector(options: undefined): undefined;
export function serializeConfigMapKeySelector(
    options: ConfigMapKeySelector
): SerializedConfigMapKeySelector;
export function serializeConfigMapKeySelector(
    options: ConfigMapKeySelector | undefined
): SerializedConfigMapKeySelector | undefined;
export function serializeConfigMapKeySelector(
    options: ConfigMapKeySelector | undefined
): SerializedConfigMapKeySelector | undefined {
    if (options === undefined) return undefined;
    const result: SerializedConfigMapKeySelector = {
        key: options.key,
        name: options.name,
        optional: options.optional,
    };

    return senchou.wrapTemplate(options, result);
}

export type ObjectFieldSelector = {
    readonly apiVersion?: string;
    readonly fieldPath: string;
};

export type SerializedObjectFieldSelector = {
    apiVersion?: string;
    fieldPath: string;
};

export function serializeObjectFieldSelector(options: undefined): undefined;
export function serializeObjectFieldSelector(
    options: ObjectFieldSelector
): SerializedObjectFieldSelector;
export function serializeObjectFieldSelector(
    options: ObjectFieldSelector | undefined
): SerializedObjectFieldSelector | undefined;
export function serializeObjectFieldSelector(
    options: ObjectFieldSelector | undefined
): SerializedObjectFieldSelector | undefined {
    if (options === undefined) return undefined;
    const result: SerializedObjectFieldSelector = {
        apiVersion: options.apiVersion,
        fieldPath: options.fieldPath,
    };

    return senchou.wrapTemplate(options, result);
}

export type ResourceFieldSelector = {
    readonly containerName?: string;
    readonly divisor?: Quantity;
    readonly resource: string;
};

export type SerializedResourceFieldSelector = {
    containerName?: string;
    divisor?: Quantity;
    resource: string;
};

export function serializeResourceFieldSelector(options: undefined): undefined;
export function serializeResourceFieldSelector(
    options: ResourceFieldSelector
): SerializedResourceFieldSelector;
export function serializeResourceFieldSelector(
    options: ResourceFieldSelector | undefined
): SerializedResourceFieldSelector | undefined;
export function serializeResourceFieldSelector(
    options: ResourceFieldSelector | undefined
): SerializedResourceFieldSelector | undefined {
    if (options === undefined) return undefined;
    const result: SerializedResourceFieldSelector = {
        containerName: options.containerName,
        divisor: options.divisor,
        resource: options.resource,
    };

    return senchou.wrapTemplate(options, result);
}

export type SecretKeySelector = {
    readonly key: string;
    readonly name?: string;
    readonly optional?: boolean;
};

export type SerializedSecretKeySelector = {
    key: string;
    name?: string;
    optional?: boolean;
};

export function serializeSecretKeySelector(options: undefined): undefined;
export function serializeSecretKeySelector(
    options: SecretKeySelector
): SerializedSecretKeySelector;
export function serializeSecretKeySelector(
    options: SecretKeySelector | undefined
): SerializedSecretKeySelector | undefined;
export function serializeSecretKeySelector(
    options: SecretKeySelector | undefined
): SerializedSecretKeySelector | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSecretKeySelector = {
        key: options.key,
        name: options.name,
        optional: options.optional,
    };

    return senchou.wrapTemplate(options, result);
}

export type HTTPHeader = {
    readonly name: string;
    readonly value: string;
};

export type SerializedHTTPHeader = {
    name: string;
    value: string;
};

export function serializeHTTPHeader(options: undefined): undefined;
export function serializeHTTPHeader(options: HTTPHeader): SerializedHTTPHeader;
export function serializeHTTPHeader(
    options: HTTPHeader | undefined
): SerializedHTTPHeader | undefined;
export function serializeHTTPHeader(
    options: HTTPHeader | undefined
): SerializedHTTPHeader | undefined {
    if (options === undefined) return undefined;
    const result: SerializedHTTPHeader = {
        name: options.name,
        value: options.value,
    };

    return senchou.wrapTemplate(options, result);
}

export type ConfigMapProjection = {
    readonly items?: Array<KeyToPath>;
    readonly name?: string;
    readonly optional?: boolean;
};

export type SerializedConfigMapProjection = {
    items?: Array<SerializedKeyToPath>;
    name?: string;
    optional?: boolean;
};

export function serializeConfigMapProjection(options: undefined): undefined;
export function serializeConfigMapProjection(
    options: ConfigMapProjection
): SerializedConfigMapProjection;
export function serializeConfigMapProjection(
    options: ConfigMapProjection | undefined
): SerializedConfigMapProjection | undefined;
export function serializeConfigMapProjection(
    options: ConfigMapProjection | undefined
): SerializedConfigMapProjection | undefined {
    if (options === undefined) return undefined;
    const result: SerializedConfigMapProjection = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeKeyToPath(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        name: options.name,
        optional: options.optional,
    };

    return senchou.wrapTemplate(options, result);
}

export type DownwardAPIProjection = {
    readonly items?: Array<DownwardAPIVolumeFile>;
};

export type SerializedDownwardAPIProjection = {
    items?: Array<SerializedDownwardAPIVolumeFile>;
};

export function serializeDownwardAPIProjection(options: undefined): undefined;
export function serializeDownwardAPIProjection(
    options: DownwardAPIProjection
): SerializedDownwardAPIProjection;
export function serializeDownwardAPIProjection(
    options: DownwardAPIProjection | undefined
): SerializedDownwardAPIProjection | undefined;
export function serializeDownwardAPIProjection(
    options: DownwardAPIProjection | undefined
): SerializedDownwardAPIProjection | undefined {
    if (options === undefined) return undefined;
    const result: SerializedDownwardAPIProjection = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeDownwardAPIVolumeFile(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
    };

    return senchou.wrapTemplate(options, result);
}

export type SecretProjection = {
    readonly items?: Array<KeyToPath>;
    readonly name?: string;
    readonly optional?: boolean;
};

export type SerializedSecretProjection = {
    items?: Array<SerializedKeyToPath>;
    name?: string;
    optional?: boolean;
};

export function serializeSecretProjection(options: undefined): undefined;
export function serializeSecretProjection(
    options: SecretProjection
): SerializedSecretProjection;
export function serializeSecretProjection(
    options: SecretProjection | undefined
): SerializedSecretProjection | undefined;
export function serializeSecretProjection(
    options: SecretProjection | undefined
): SerializedSecretProjection | undefined {
    if (options === undefined) return undefined;
    const result: SerializedSecretProjection = {
        items: prelude.serialize(options.items, (items) =>
            senchou.wrapTemplate(
                items,
                items
                    .map((item) => serializeKeyToPath(item))
                    .filter(prelude.isNotUndefined)
            )
        ),
        name: options.name,
        optional: options.optional,
    };

    return senchou.wrapTemplate(options, result);
}

export type ServiceAccountTokenProjection = {
    readonly audience?: string;
    readonly expirationSeconds?: number;
    readonly path: string;
};

export type SerializedServiceAccountTokenProjection = {
    audience?: string;
    expirationSeconds?: number;
    path: string;
};

export function serializeServiceAccountTokenProjection(
    options: undefined
): undefined;
export function serializeServiceAccountTokenProjection(
    options: ServiceAccountTokenProjection
): SerializedServiceAccountTokenProjection;
export function serializeServiceAccountTokenProjection(
    options: ServiceAccountTokenProjection | undefined
): SerializedServiceAccountTokenProjection | undefined;
export function serializeServiceAccountTokenProjection(
    options: ServiceAccountTokenProjection | undefined
): SerializedServiceAccountTokenProjection | undefined {
    if (options === undefined) return undefined;
    const result: SerializedServiceAccountTokenProjection = {
        audience: options.audience,
        expirationSeconds: options.expirationSeconds,
        path: options.path,
    };

    return senchou.wrapTemplate(options, result);
}

export type ExternalDocumentation = {
    readonly description?: string;
    readonly url?: string;
};

export type SerializedExternalDocumentation = {
    description?: string;
    url?: string;
};

export function serializeExternalDocumentation(options: undefined): undefined;
export function serializeExternalDocumentation(
    options: ExternalDocumentation
): SerializedExternalDocumentation;
export function serializeExternalDocumentation(
    options: ExternalDocumentation | undefined
): SerializedExternalDocumentation | undefined;
export function serializeExternalDocumentation(
    options: ExternalDocumentation | undefined
): SerializedExternalDocumentation | undefined {
    if (options === undefined) return undefined;
    const result: SerializedExternalDocumentation = {
        description: options.description,
        url: options.url,
    };

    return senchou.wrapTemplate(options, result);
}
