import { ChartComponent } from "./chart";
import { HelmComponent } from "./helm";
import { KubernetesComponent } from "./kubernetes";
import { PatchComponent } from "./patch";
import { ChartTemplateComponent } from "./template";

export type KubernetesComponents =
    | HelmComponent
    | ChartComponent
    | ChartTemplateComponent
    | KubernetesComponent
    | PatchComponent;
