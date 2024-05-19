interface Option {
    [key: string]: any;
}
interface ErrorData {
    [key: string | number]: string[] | string | null;
}
interface Props {
    id: string;
    label: string | null;
    options: Option[];
    placeholder: string;
    valueKey: string;
    labelKey: string;
    errors?: ErrorData | null;
    modelValue?: any;
}
declare const _default: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    id: string;
    label: null;
    valueKey: string;
    labelKey: string;
    placeholder: string;
    errors: null;
    modelValue: null;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    id: string;
    label: null;
    valueKey: string;
    labelKey: string;
    placeholder: string;
    errors: null;
    modelValue: null;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    label: string | null;
    id: string;
    errors: ErrorData | null;
    placeholder: string;
    modelValue: any;
    valueKey: string;
    labelKey: string;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
