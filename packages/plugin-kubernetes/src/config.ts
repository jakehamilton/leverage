export type KubernetesConfigType =
    | "kubernetes"
    | "helm"
    | "chart"
    | "template"
    | "patch";
/*
apiVersion: The chart API version (required)
name: The name of the chart (required)
version: A SemVer 2 version (required)
kubeVersion: A SemVer range of compatible Kubernetes versions (optional)
description: A single-sentence description of this project (optional)
type: The type of the chart (optional)
keywords:
  - A list of keywords about this project (optional)
home: The URL of this projects home page (optional)
sources:
  - A list of URLs to source code for this project (optional)
dependencies: # A list of the chart requirements (optional)
  - name: The name of the chart (nginx)
    version: The version of the chart ("1.2.3")
    repository: (optional) The repository URL ("https://example.com/charts") or alias ("@repo-name")
    condition: (optional) A yaml path that resolves to a boolean, used for enabling/disabling charts (e.g. subchart1.enabled )
    tags: # (optional)
      - Tags can be used to group charts for enabling/disabling together
    import-values: # (optional)
      - ImportValues holds the mapping of source values to parent key to be imported. Each item can be a string or pair of child/parent sublist items.
    alias: (optional) Alias to be used for the chart. Useful when you have to add the same chart multiple times
maintainers: # (optional)
  - name: The maintainers name (required for each maintainer)
    email: The maintainers email (optional for each maintainer)
    url: A URL for the maintainer (optional for each maintainer)
icon: A URL to an SVG or PNG image to be used as an icon (optional).
appVersion: The version of the app that this contains (optional). Needn't be SemVer. Quotes recommended.
deprecated: Whether this chart is deprecated (optional, boolean)
annotations:
  example: A list of annotations keyed by name (optional).
*/
export interface HelmMeta {
    version: string;
    kubeVersion?: string;
    description?: string;
    type?: string;
    keywords?: Array<string>;
    appVersion?: string;
    home?: string;
    icon?: string;
    sources?: Array<string>;
    deprecated?: boolean;
    annotations?: Record<string, string>;
    maintainers?: Array<{
        name: string;
        email?: string;
        url?: string;
    }>;
    dependencies?: Array<{
        name: string;
        version: string;
        repository?: string;
        condition?: string;
        tags?: Array<string>;
        "import-values"?: Array<string>;
        alias?: string;
    }>;
}

export interface KubernetesConfig {
    kubernetes: {
        type: KubernetesConfigType;
        helm?: {
            name: string;
            chart: string;
            values?: object;
            args?: Array<string>;
        };
        chart?: {
            name: string;
            meta: HelmMeta;
            schema?: string;
            values?: object;
        };
        template?: {
            name: string;
            chart: string;
            helper?: boolean;
        };
        kubernetes?: {
            name: string;
        };
        patch?: {
            name: string;
        };
    };
}
