import { defineComponent as C, openBlock as l, createElementBlock as o, createElementVNode as r, normalizeClass as f, createCommentVNode as v, renderSlot as M, ref as m, computed as x, createTextVNode as S, toDisplayString as a, mergeProps as R, onMounted as U, onUnmounted as F, Fragment as A, withDirectives as L, withKeys as b, withModifiers as $, vModelText as P, renderList as T, vShow as q } from "vue";
const W = { class: "flex items-center justify-center" }, G = ["disabled", "aria-atomic"], J = {
  key: 0,
  class: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, Q = /* @__PURE__ */ r("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), X = /* @__PURE__ */ r("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), Y = [
  Q,
  X
], Z = { key: 1 }, ke = /* @__PURE__ */ C({
  __name: "Button",
  props: {
    loading: { type: Boolean, default: !1 }
  },
  setup(u) {
    const n = u;
    return (s, w) => (l(), o("div", W, [
      r("button", {
        disabled: n.loading,
        class: f(["flex w-full justify-center rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 items-center transition ease-in-out duration-150", { "inline-flex cursor-not-allowed": n.loading }]),
        "aria-atomic": n.loading
      }, [
        n.loading ? (l(), o("svg", J, Y)) : v("", !0),
        n.loading ? (l(), o("span", Z, "Выполняется...")) : M(s.$slots, "default", { key: 2 })
      ], 10, G)
    ]));
  }
});
let j = (u = 21) => crypto.getRandomValues(new Uint8Array(u)).reduce((n, s) => (s &= 63, s < 36 ? n += s.toString(36) : s < 62 ? n += (s - 26).toString(36).toUpperCase() : s > 62 ? n += "-" : n += "_", n), "");
const ee = { class: "flex items-center justify-between" }, te = ["for"], le = { class: "text-red-600 font-bold" }, oe = { class: "text-sm" }, se = { class: "mt-2 relative" }, ne = ["id", "type", "value", "placeholder"], re = {
  key: 0,
  class: "absolute flex pl-4 pointer-events-none text-gray-400/90 dark:text-slate-500 top-[9px]"
}, ae = { class: "opacity-0" }, ie = {
  key: 0,
  class: "text-slate-600 dark:text-slate-400/70"
}, de = {
  key: 1,
  class: "text-sm text-red-600"
}, ue = { key: 0 }, ce = { key: 1 }, $e = /* @__PURE__ */ C({
  __name: "Input",
  props: {
    id: { default: `text-input-${j()}` },
    type: { default: "text" },
    errors: { default: null },
    label: { default: null },
    help: { default: null },
    symbol: { default: null },
    placeholder: { default: "" },
    modelValue: { default: null }
  },
  emits: ["update:modelValue"],
  setup(u, { emit: n }) {
    const s = u, w = n, i = m(null), h = x(() => "required" in s);
    return (e, g) => (l(), o("div", {
      class: f([e.$attrs.class, { "mb-2": e.label }])
    }, [
      r("div", ee, [
        e.label ? (l(), o("label", {
          key: 0,
          class: f(["block text-sm font-medium leading-6 text-gray-900", { "text-red-600": e.errors }]),
          for: e.id
        }, [
          S(a(e.label) + ":", 1),
          r("span", le, a(h.value ? "*" : ""), 1)
        ], 10, te)) : v("", !0),
        r("div", oe, [
          M(e.$slots, "append")
        ])
      ]),
      r("div", se, [
        r("input", R({
          id: e.id,
          ref_key: "input",
          ref: i
        }, { ...e.$attrs, class: null }, {
          class: ["block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 disabled:opacity-60 disabled:cursor-not-allowed", { "ring-red-600 placeholder:text-red-600": e.errors }],
          type: e.type,
          value: e.modelValue,
          onInput: g[0] || (g[0] = (_) => w("update:modelValue", _.target.value)),
          placeholder: e.placeholder
        }), null, 16, ne),
        e.symbol ? (l(), o("div", re, [
          r("div", ae, a(e.modelValue || e.placeholder), 1),
          S(" " + a(e.symbol), 1)
        ])) : v("", !0)
      ]),
      e.help ? (l(), o("small", ie, a(e.help), 1)) : v("", !0),
      e.errors ? (l(), o("div", de, [
        Array.isArray(e.errors) ? (l(), o("span", ue, a(e.errors.join(", ")), 1)) : (l(), o("span", ce, a(e.errors), 1))
      ])) : v("", !0)
    ], 2));
  }
}), pe = ["for"], me = { class: "absolute text-sm top-2 left-0 flex items-center pl-3 pointer-events-none" }, fe = ["id", "onKeydown", "placeholder"], ve = {
  key: 0,
  class: "max-h-60 overflow-auto"
}, he = ["onClick", "onMouseenter"], ge = {
  key: 1,
  class: "px-3 py-2"
}, ye = {
  key: 0,
  class: "text-sm text-red-600"
}, be = { key: 0 }, we = { key: 1 }, xe = /* @__PURE__ */ C({
  __name: "Select",
  props: {
    id: { default: `select-${j()}` },
    label: { default: null },
    options: {},
    placeholder: { default: "Выберите значение" },
    valueKey: { default: "id" },
    labelKey: { default: "label" },
    errors: { default: null }
  },
  emits: ["update:modelValue"],
  setup(u, { emit: n }) {
    const s = u, w = n, i = m(""), h = m(""), e = m(!1), g = m(null), _ = m(null), d = m(-1), D = () => {
      e.value = !0;
    }, V = () => {
      e.value = !0;
    }, K = () => {
      e.value = !1, i.value = "";
    }, O = (t) => {
      i.value = "", h.value = t[s.labelKey], e.value = !1, w("update:modelValue", t[s.valueKey]);
    }, y = x(() => i.value ? s.options.filter(
      (t) => t[s.labelKey].toLowerCase().includes(i.value.toLowerCase())
    ) : s.options), I = () => {
      d.value < y.value.length - 1 && d.value++;
    }, z = () => {
      d.value > 0 && d.value--;
    }, E = () => {
      d.value >= 0 && d.value < y.value.length && O(y.value[d.value]);
    }, H = x(() => {
      var p;
      if (!e.value)
        return "";
      const t = (p = _.value) == null ? void 0 : p.getBoundingClientRect(), c = window.innerHeight;
      return t && t.bottom > c ? "bottom-0 transform translate-y-full" : "";
    }), B = (t) => {
      var c;
      (c = g.value) != null && c.contains(t.target) || (e.value = !1);
    };
    return U(() => {
      document.addEventListener("click", B);
    }), F(() => {
      document.removeEventListener("click", B);
    }), (t, c) => (l(), o(A, null, [
      t.label ? (l(), o("label", {
        key: 0,
        for: t.id,
        class: f(["block text-sm font-medium leading-6 text-gray-900", { "text-red-600": t.errors }])
      }, a(t.label) + ":", 11, pe)) : v("", !0),
      r("div", {
        class: "relative",
        ref_key: "selectWrapper",
        ref: g
      }, [
        r("div", me, a(i.value ? "" : h.value), 1),
        L(r("input", {
          type: "text",
          id: t.id,
          "onUpdate:modelValue": c[0] || (c[0] = (p) => i.value = p),
          onClick: V,
          onFocus: V,
          onKeydown: [
            b(K, ["tab"]),
            b(K, ["esc"]),
            b($(I, ["prevent"]), ["arrow-down"]),
            b($(z, ["prevent"]), ["arrow-up"]),
            b($(E, ["prevent"]), ["enter"])
          ],
          onInput: D,
          placeholder: h.value ? "" : t.placeholder,
          class: f(["block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 disabled:opacity-60 disabled:cursor-not-allowed", { "ring-red-600 placeholder:text-red-600": t.errors }])
        }, null, 42, fe), [
          [P, i.value]
        ]),
        L(r("div", {
          ref_key: "dropdown",
          ref: _,
          class: f(["absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg", H.value])
        }, [
          y.value.length > 0 ? (l(), o("ul", ve, [
            (l(!0), o(A, null, T(y.value, (p, k) => (l(), o("li", {
              key: k,
              onClick: (N) => O(p),
              onMouseenter: (N) => d.value = k,
              class: f([{ "bg-gray-100": k === d.value }, "px-3 py-2 cursor-pointer hover:bg-gray-100 sm:text-sm"])
            }, a(p[t.labelKey]), 43, he))), 128))
          ])) : (l(), o("div", ge, "Нет вариантов"))
        ], 2), [
          [q, e.value]
        ]),
        t.errors ? (l(), o("div", ye, [
          Array.isArray(t.errors) ? (l(), o("span", be, a(t.errors.join(", ")), 1)) : (l(), o("span", we, a(t.errors), 1))
        ])) : v("", !0)
      ], 512)
    ], 64));
  }
});
export {
  ke as Button,
  $e as Input,
  xe as Select
};
