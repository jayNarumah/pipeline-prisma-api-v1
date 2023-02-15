import { CompanyResource } from "./company.model";
import { PipelineRouteResource } from "./pipeline-route.model";

export interface PipelineResource {
    id: number;
    uid: string;
    name: string;
    pipelineTypeId: number;
    companyId: number;

    pipelineType?: PipelineResource;
    company?: CompanyResource;
    pipelineRoute?: PipelineRouteResource[];
}