<script lang="ts">
  interface CtxType {
    size?: string;
    role?: string;
    color?: string;
    variation?: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone';
  }

  import { getContext } from 'svelte';
  const ctx: CtxType = getContext('iconCtx') ?? {};

  export let size: string = ctx.size || '24';
  export let role: string = ctx.role || 'img';
  export let color: string = ctx.color || 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' =
    ctx.variation || 'outlined';

  let svgpath: string;
  let svgfilled =
    '<path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm4-11c0 2.61 1.67 4.83 4 5.66V17h2v2H4v-2h2v-7c0-2.79 1.91-5.14 4.5-5.8v-.7c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.7c.71.18 1.36.49 1.95.9A5.902 5.902 0 0 0 14 9zm10-1h-3V5h-2v3h-3v2h3v3h2v-3h3V8z"/>';
  let svgoutlined =
    '<path d="M16 14v3H8v-7c0-2.21 1.79-4 4-4 .85 0 1.64.26 2.28.72l1.43-1.43A5.87 5.87 0 0 0 13.5 4.2v-.7c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.7C7.91 4.86 6 7.21 6 10v7H4v2h16v-2h-2v-3h-2zm-4 8c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zM24 8h-3V5h-2v3h-3v2h3v3h2v-3h3V8z"/>';
  let svground =
    '<path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm4-11c0 2.61 1.67 4.83 4 5.66V17h1c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1h1v-7c0-2.79 1.91-5.14 4.5-5.8v-.7c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.7c.71.18 1.36.49 1.95.9A5.902 5.902 0 0 0 14 9zm9-1h-2V6c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1z"/>';
  let svgsharp =
    '<path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm4-11c0 2.61 1.67 4.83 4 5.66V17h2v2H4v-2h2v-7c0-2.79 1.91-5.14 4.5-5.8V2h3v2.2c.71.18 1.36.49 1.95.9A5.902 5.902 0 0 0 14 9zm10-1h-3V5h-2v3h-3v2h3v3h2v-3h3V8z"/>';
  let svgtwotone =
    '<path d="M16 14v3H8v-7c0-2.21 1.79-4 4-4 .85 0 1.64.26 2.28.72l1.43-1.43A5.87 5.87 0 0 0 13.5 4.2v-.7c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.7C7.91 4.86 6 7.21 6 10v7H4v2h16v-2h-2v-3h-2zm-4 8c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zM24 8h-3V5h-2v3h-3v2h3v3h2v-3h3V8z"/>';
  switch (variation) {
    case 'filled':
      svgpath = svgfilled;
      break;
    case 'outlined':
      svgpath = svgoutlined;
      break;
    case 'round':
      svgpath = svground;
      break;
    case 'sharp':
      svgpath = svgsharp;
      break;
    case 'two-tone':
      svgpath = svgtwotone;
      break;
    default:
      svgpath = svgoutlined;
  }
  export let ariaLabel = 'notification add';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...$$restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  aria-label={ariaLabel}
  viewBox="0 0 24 24"
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
>
  {@html svgpath}
</svg>

<!--
@component
[Go to docs](https://svelte-google-materialdesign-icons.codewithshin.com)
## Props
@prop export let size: string = ctx.size || '24';
@prop export let role: string = ctx.role || 'img';
@prop export let color: string = ctx.color || 'currentColor';
@prop export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' =
    ctx.variation || 'outlined';
@prop export let ariaLabel = 'notification add';
-->
