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
    '<path d="M12 2C6.48 2 2 6.48 2 12c0 1.33.26 2.61.74 3.77L8 10.5l3.3 2.78L14.58 10H13V8h5v5h-2v-1.58L11.41 16l-3.29-2.79-4.4 4.4A9.996 9.996 0 0 0 12 22h8c1.1 0 2-.9 2-2v-8c0-5.52-4.48-10-10-10zm7.5 18.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>';
  let svgoutlined =
    '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h8c1.1 0 2-.9 2-2v-8c0-5.52-4.48-10-10-10zm0 18c-2.89 0-5.43-1.54-6.83-3.84l2.95-2.95L11.41 16 16 11.42V13h2V8h-5v2h1.58l-3.28 3.28L8 10.5l-3.69 3.7C4.11 13.5 4 12.76 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm7.5.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>';
  let svground =
    '<path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 1.33.26 2.61.74 3.77l4.61-4.62a1 1 0 0 1 1.35-.06l2.6 2.19L14.58 10H14c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1v-.58l-3.94 3.93a.99.99 0 0 1-1.35.05l-2.59-2.19-4.4 4.4A9.996 9.996 0 0 0 12 22h8c1.1 0 2-.9 2-2v-8zm-2.5 8.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>';
  let svgsharp =
    '<path d="M12 2C6.48 2 2 6.48 2 12c0 1.33.26 2.61.74 3.77L8 10.5l3.3 2.78L14.58 10H13V8h5v5h-2v-1.58L11.41 16l-3.29-2.79-4.4 4.4A9.996 9.996 0 0 0 12 22h10V12c0-5.52-4.48-10-10-10zm7.5 18.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>';
  let svgtwotone =
    '<path d="M12 20c-2.89 0-5.43-1.54-6.83-3.84l2.95-2.95L11.41 16 16 11.42V13h2V8h-5v2h1.58l-3.28 3.28L8 10.5l-3.69 3.7C4.11 13.5 4 12.76 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm7.5.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" opacity=".3"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h8c1.1 0 2-.9 2-2v-8c0-5.52-4.48-10-10-10zm0 18c-2.89 0-5.43-1.54-6.83-3.84l2.95-2.95L11.41 16 16 11.42V13h2V8h-5v2h1.58l-3.28 3.28L8 10.5l-3.69 3.7C4.11 13.5 4 12.76 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm7.5.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>';
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
  export let ariaLabel = 'data exploration';
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
[Go to docs](https://svelte-google-materialdesign-icons.vercel.app)
## Props
@prop export let size: string = ctx.size || '24';
@prop export let role: string = ctx.role || 'img';
@prop export let color: string = ctx.color || 'currentColor';
@prop export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' =
    ctx.variation || 'outlined';
@prop export let ariaLabel = 'data exploration';
-->
