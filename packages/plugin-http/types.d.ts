import fastify from "fastify";
import { FastifyInstance } from "fastify/types/instance";
import {
    RouteOptions,
    RouteShorthandMethod,
    RouteGenericInterface,
    DefaultRoute,
} from "fastify/types/route";
import {
    RawServerBase,
    RawRequestDefaultExpression,
    RawServerDefault,
    RawReplyDefaultExpression,
    ContextConfigDefault,
} from "fastify/types/utils";

import { NextHandleFunction, SimpleHandleFunction } from "connect";

type Handler = SimpleHandleFunction | NextHandleFunction;

type BaseHTTPConfig<
    RawServer extends RawServerBase = RawServerDefault,
    RawRequest extends RawRequestDefaultExpression<
        RawServer
    > = RawRequestDefaultExpression<RawServer>,
    RawReply extends RawReplyDefaultExpression<
        RawServer
    > = RawReplyDefaultExpression<RawServer>,
    RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
    ContextConfig = ContextConfigDefault
> = RouteOptions<RawServer, RawRequest, RawReply, RouteGeneric, ContextConfig>;

type HTTPConfigExclusions =
    | "onRequest"
    | "preParsing"
    | "preValidation"
    | "preHandler"
    | "preSerialization"
    | "onSend"
    | "onResponse"
    | "handler"
    | "errorHandler"
    | "validatorCompiler"
    | "serializerCompiler"
    | "schemaErrorFormatter";

export type HTTPConfig = Omit<BaseHTTPConfig, HTTPConfigExclusions> & {
    path: BaseHTTPConfig["url"];
};

export function useHTTP(): void;
export function useHTTP(config: HTTPConfig): void;

export function useMiddleware(handler: Handler, name?: string): void;
export function useMiddleware(
    path: string,
    handler: Handler,
    name?: string
): void;
export function useMiddleware(
    paths: Array<string>,
    handler: Handler,
    name?: string
): void;
