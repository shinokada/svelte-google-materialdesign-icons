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

  export let ariaLabel = 'control camera';
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
  {#if variation === 'outlined'}
    <path
      d="M5.54 8.46 2 12l3.54 3.54 1.76-1.77L5.54 12l1.76-1.77zm6.46 10-1.77-1.76-1.77 1.76L12 22l3.54-3.54-1.77-1.76zm6.46-10-1.76 1.77L18.46 12l-1.76 1.77 1.76 1.77L22 12zm-10-2.92 1.77 1.76L12 5.54l1.77 1.76 1.77-1.76L12 2z"
    /><circle cx="12" cy="12" r="3" />
  {:else if variation === 'filled'}
    <path
      d="M15.54 5.54 13.77 7.3 12 5.54 10.23 7.3 8.46 5.54 12 2zm2.92 10-1.76-1.77L18.46 12l-1.76-1.77 1.76-1.77L22 12zm-10 2.92 1.77-1.76L12 18.46l1.77-1.76 1.77 1.76L12 22zm-2.92-10 1.76 1.77L5.54 12l1.76 1.77-1.76 1.77L2 12z"
    /><circle cx="12" cy="12" r="3" />
  {:else if variation === 'round'}
    <path
      d="M4.65 9.35 2.7 11.3a.996.996 0 0 0 0 1.41l1.95 1.95c.49.49 1.28.49 1.77 0 .48-.49.48-1.27 0-1.76l-.88-.9.88-.89c.48-.49.48-1.27 0-1.76s-1.28-.49-1.77 0zm12.93 0c-.48.49-.48 1.27 0 1.76l.88.89-.88.89c-.48.49-.48 1.27 0 1.76.49.49 1.28.49 1.77 0l1.95-1.95a.996.996 0 0 0 0-1.41l-1.95-1.95c-.49-.48-1.29-.48-1.77.01zM12 18.46l-.89-.88c-.49-.48-1.27-.48-1.76 0a1.25 1.25 0 0 0 0 1.77l1.95 1.95c.39.39 1.02.39 1.41 0l1.95-1.95c.49-.49.49-1.28 0-1.77-.49-.48-1.27-.48-1.76 0l-.9.88zM9.35 6.42c.49.48 1.27.48 1.76 0l.89-.88.89.88c.49.48 1.27.48 1.76 0 .49-.49.49-1.28 0-1.77L12.7 2.7a.996.996 0 0 0-1.41 0L9.35 4.65a1.25 1.25 0 0 0 0 1.77z"
    /><circle cx="12" cy="12" r="3" />
  {:else if variation === 'sharp'}
    <path
      d="M5.54 8.46 2 12l3.54 3.54 1.76-1.77L5.54 12l1.76-1.77zm12.92 0-1.76 1.77L18.46 12l-1.76 1.77 1.76 1.77L22 12zm-6.46 10-1.77-1.76-1.77 1.76L12 22l3.54-3.54-1.77-1.76zM8.46 5.54l1.77 1.76L12 5.54l1.77 1.76 1.77-1.76L12 2z"
    /><circle cx="12" cy="12" r="3" />
  {:else if variation === 'two-tone'}
    <path
      d="M7.3 13.77 5.54 12l1.76-1.77-1.76-1.77L2 12l3.54 3.54zm8.24 4.69-1.77-1.76L12 18.46l-1.77-1.76-1.77 1.76L12 22zm2.92-2.92L22 12l-3.54-3.54-1.76 1.77L18.46 12l-1.76 1.77zM12 5.54l1.77 1.76 1.77-1.76L12 2 8.46 5.54l1.77 1.76z"
    /><circle cx="12" cy="12" r="3" />
  {/if}
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
@prop export let ariaLabel = 'control camera';
-->
