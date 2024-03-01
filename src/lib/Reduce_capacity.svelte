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
    '<path d="M16 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4.78 3.58A6.95 6.95 0 0 0 18 7c-.67 0-1.31.1-1.92.28.58.55.92 1.32.92 2.15V10h5v-.57c0-.81-.48-1.53-1.22-1.85zM6 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.92 1.28C7.31 7.1 6.67 7 6 7c-.99 0-1.93.21-2.78.58A2.01 2.01 0 0 0 2 9.43V10h5v-.57c0-.83.34-1.6.92-2.15zM10 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6H8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 16 9.43V10zm-1 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6h-8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 21 21.43V22zM5 16c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6H3v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 11 21.43V22zm1.75-9v-2h-1.5v2H9l3 3 3-3h-2.25z"/>';
  let svgoutlined =
    '<path d="M16 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4.78 3.58A6.95 6.95 0 0 0 18 7c-.67 0-1.31.1-1.92.28.58.55.92 1.32.92 2.15V10h5v-.57c0-.81-.48-1.53-1.22-1.85zM6 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.92 1.28C7.31 7.1 6.67 7 6 7c-.99 0-1.93.21-2.78.58A2.01 2.01 0 0 0 2 9.43V10h5v-.57c0-.83.34-1.6.92-2.15zM10 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6H8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 16 9.43V10zm-1 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6h-8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 21 21.43V22zM5 16c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6H3v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 11 21.43V22zm1.75-9v-2h-1.5v2H9l3 3 3-3h-2.25z"/>';
  let svground =
    '<path d="M16 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4.78 3.58A6.95 6.95 0 0 0 18 7c-.67 0-1.31.1-1.92.28.58.55.92 1.32.92 2.15V10h5v-.57c0-.81-.48-1.53-1.22-1.85zM6 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.92 1.28C7.31 7.1 6.67 7 6 7c-.99 0-1.93.21-2.78.58A2.01 2.01 0 0 0 2 9.43V10h5v-.57c0-.83.34-1.6.92-2.15zM10 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6H8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 16 9.43V10zm-1 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6h-8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 21 21.43V22zM5 16c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6H3v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 11 21.43V22zm2.79-9h-1.04v-1.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75V13h-1.04c-.45 0-.67.54-.35.85l1.79 1.79c.2.2.51.2.71 0l1.79-1.79a.5.5 0 0 0-.36-.85z"/>';
  let svgsharp =
    '<path d="M16 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4.78 3.58A6.95 6.95 0 0 0 18 7c-.67 0-1.31.1-1.92.28.58.55.92 1.32.92 2.15V10h5v-.57c0-.81-.48-1.53-1.22-1.85zM6 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.92 1.28C7.31 7.1 6.67 7 6 7c-.99 0-1.93.21-2.78.58A2.01 2.01 0 0 0 2 9.43V10h5v-.57c0-.83.34-1.6.92-2.15zM10 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6H8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 16 9.43V10zm-1 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6h-8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 21 21.43V22zM5 16c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6H3v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 11 21.43V22zm1.75-9v-2h-1.5v2H9l3 3 3-3h-2.25z"/>';
  let svgtwotone =
    '<path d="M16 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4.78 3.58A6.95 6.95 0 0 0 18 7c-.67 0-1.31.1-1.92.28.58.55.92 1.32.92 2.15V10h5v-.57c0-.81-.48-1.53-1.22-1.85zM6 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.92 1.28C7.31 7.1 6.67 7 6 7c-.99 0-1.93.21-2.78.58A2.01 2.01 0 0 0 2 9.43V10h5v-.57c0-.83.34-1.6.92-2.15zM10 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6H8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 16 9.43V10zm-1 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6h-8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 21 21.43V22zM5 16c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6H3v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 11 21.43V22zm1.75-9v-2h-1.5v2H9l3 3 3-3h-2.25z"/>';
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
  export let ariaLabel = 'reduce capacity';
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
@prop export let ariaLabel = 'reduce capacity';
-->
