interface Props {
    id?: string;
    type?: string;
    errors?: string[] | string | null;
    label?: string | null;
    help?: string | null;
    symbol?: string | null;
    placeholder?: string;
    modelValue?: string | number | null;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    id: string;
    type: string;
    errors: null;
    label: null;
    help: null;
    symbol: null;
    placeholder: string;
    modelValue: null;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | null) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    id: string;
    type: string;
    errors: null;
    label: null;
    help: null;
    symbol: null;
    placeholder: string;
    modelValue: null;
}>>> & {
    "onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
}, {
    symbol: string | null;
    type: string;
    label: string | null;
    id: string;
    errors: string | string[] | null;
    help: string | null;
    placeholder: string;
    modelValue: string | number | null;
}, {}>, {
    append?(_: {}): any;
}>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
