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
    '<path d="M20.49 3.51c-.56-.56-2.15-.97-4.16-.97-3.08 0-7.15.96-9.98 3.79-4.69 4.7-4.25 12.74-2.84 14.16.56.56 2.15.97 4.16.97 3.08 0 7.15-.96 9.98-3.79 4.69-4.7 4.25-12.74 2.84-14.16zM7.76 7.76c2.64-2.64 6.35-3.12 8.03-3.19-2.05.94-4.46 2.45-6.61 4.61a23.462 23.462 0 0 0-4.62 6.63c.1-2.48.88-5.74 3.2-8.05zm8.48 8.48c-2.64 2.64-6.35 3.12-8.03 3.19 2.05-.94 4.46-2.45 6.61-4.61 2.16-2.16 3.67-4.58 4.62-6.63-.1 2.48-.88 5.74-3.2 8.05z"/>';
  let svgoutlined =
    '<path d="M20.49 3.51c-.56-.56-2.15-.97-4.16-.97-3.08 0-7.15.96-9.98 3.79-4.69 4.7-4.25 12.74-2.84 14.16.56.56 2.15.97 4.16.97 3.08 0 7.15-.96 9.98-3.79 4.69-4.7 4.25-12.74 2.84-14.16zM5.71 18.29c.63-1.89 2.16-4.99 4.87-7.7 2.68-2.68 5.78-4.23 7.7-4.88-.63 1.89-2.16 4.99-4.88 7.7-2.66 2.68-5.76 4.23-7.69 4.88zM7.76 7.76c2.64-2.64 6.34-3.12 8.03-3.19-2.05.94-4.46 2.46-6.61 4.61a23.206 23.206 0 0 0-4.61 6.63c.09-2.48.87-5.74 3.19-8.05zm8.48 8.48c-2.64 2.64-6.34 3.12-8.03 3.19 2.05-.94 4.46-2.46 6.61-4.61 2.16-2.16 3.67-4.58 4.62-6.63-.1 2.48-.88 5.74-3.2 8.05z"/>';
  let svground =
    '<path d="M20.49 3.51c-.56-.56-2.15-.97-4.16-.97-3.08 0-7.15.96-9.98 3.79-4.69 4.7-4.25 12.74-2.84 14.16.56.56 2.15.97 4.16.97 3.08 0 7.15-.96 9.98-3.79 4.69-4.7 4.25-12.74 2.84-14.16zM7.76 7.76c2.64-2.64 6.35-3.12 8.03-3.19-2.05.94-4.46 2.45-6.61 4.61a23.206 23.206 0 0 0-4.61 6.63c.09-2.48.87-5.74 3.19-8.05zm8.48 8.48c-2.64 2.64-6.35 3.12-8.03 3.19 2.05-.94 4.46-2.45 6.61-4.61 2.16-2.16 3.67-4.58 4.62-6.63-.1 2.48-.88 5.74-3.2 8.05z"/>';
  let svgsharp =
    '<path d="M20.49 3.51c-.56-.56-2.15-.97-4.16-.97-3.08 0-7.15.96-9.98 3.79-4.69 4.7-4.25 12.74-2.84 14.16.56.56 2.15.97 4.16.97 3.08 0 7.15-.96 9.98-3.79 4.69-4.7 4.25-12.74 2.84-14.16zM7.76 7.76c2.64-2.64 6.35-3.12 8.03-3.19-2.05.94-4.46 2.45-6.61 4.61a23.206 23.206 0 0 0-4.61 6.63c.09-2.48.87-5.74 3.19-8.05zm8.48 8.48c-2.64 2.64-6.35 3.12-8.03 3.19 2.05-.94 4.46-2.45 6.61-4.61 2.16-2.16 3.67-4.58 4.62-6.63-.1 2.48-.88 5.74-3.2 8.05z"/>';
  let svgtwotone =
    '<path d="M18.29 5.71c-1.93.64-5.02 2.19-7.7 4.88-2.71 2.71-4.24 5.81-4.87 7.7 1.93-.64 5.03-2.2 7.7-4.87 2.71-2.72 4.24-5.82 4.87-7.71zM9.17 9.17c2.15-2.15 4.56-3.67 6.61-4.61-1.68.08-5.38.56-8.02 3.2-2.32 2.32-3.1 5.58-3.2 8.04.94-2.05 2.45-4.47 4.61-6.63zm5.66 5.66a23.203 23.203 0 0 1-6.61 4.61c1.68-.08 5.39-.55 8.03-3.19 2.32-2.32 3.1-5.58 3.2-8.04-.95 2.04-2.46 4.46-4.62 6.62z" opacity=".3"/><path d="M20.49 3.51c-.56-.56-2.15-.97-4.16-.97-3.08 0-7.15.96-9.98 3.79-4.69 4.7-4.25 12.74-2.84 14.16.56.56 2.15.97 4.16.97 3.08 0 7.15-.96 9.98-3.79 4.69-4.7 4.25-12.74 2.84-14.16zM5.71 18.29c.63-1.89 2.16-4.99 4.87-7.7 2.68-2.68 5.78-4.23 7.7-4.88-.63 1.89-2.16 4.99-4.88 7.7-2.66 2.68-5.76 4.23-7.69 4.88zM7.76 7.76c2.64-2.64 6.34-3.12 8.03-3.19-2.05.94-4.46 2.46-6.61 4.61a23.206 23.206 0 0 0-4.61 6.63c.09-2.48.87-5.74 3.19-8.05zm8.48 8.48c-2.64 2.64-6.34 3.12-8.03 3.19 2.05-.94 4.46-2.46 6.61-4.61 2.16-2.16 3.67-4.58 4.62-6.63-.1 2.48-.88 5.74-3.2 8.05z"/>';
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
  export let ariaLabel = 'sports rugby';
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
@prop export let ariaLabel = 'sports rugby';
-->
