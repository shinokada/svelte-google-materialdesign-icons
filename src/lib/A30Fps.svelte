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

  export let ariaLabel = '30fps';
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
      d="M2 5v3h6v2.5H3v3h5V16H2v3h6c1.66 0 3-1.34 3-3v-1.9A2.1 2.1 0 0 0 8.9 12 2.1 2.1 0 0 0 11 9.9V8c0-1.66-1.34-3-3-3H2zm17 3v8h-4V8h4m0-3h-4c-1.66 0-3 1.34-3 3v8c0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3z"
    />
  {:else if variation === 'filled'}
    <path
      d="M2 5v3h6v2.5H3v3h5V16H2v3h6c1.66 0 3-1.34 3-3v-1.9A2.1 2.1 0 0 0 8.9 12 2.1 2.1 0 0 0 11 9.9V8c0-1.66-1.34-3-3-3H2zm17 3v8h-4V8h4m0-3h-4c-1.66 0-3 1.34-3 3v8c0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3z"
    />
  {:else if variation === 'round'}
    <path
      d="M2 6.5C2 7.33 2.67 8 3.5 8H8v2.5H4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5H8V16H3.5c-.83 0-1.5.67-1.5 1.5S2.67 19 3.5 19H8c1.66 0 3-1.34 3-3v-1.9A2.1 2.1 0 0 0 8.9 12 2.1 2.1 0 0 0 11 9.9V8c0-1.66-1.34-3-3-3H3.5C2.67 5 2 5.67 2 6.5zM19 8v8h-4V8h4m0-3h-4c-1.66 0-3 1.34-3 3v8c0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3z"
    />
  {:else if variation === 'sharp'}
    <path d="M2 5v3h6v2.5H3v3h5V16H2v3h9V5H2zm17 3v8h-4V8h4m3-3H12v14h10V5z" />
  {:else if variation === 'two-tone'}
    <path
      d="M2 5v3h6v2.5H3v3h5V16H2v3h6c1.66 0 3-1.34 3-3v-1.9A2.1 2.1 0 0 0 8.9 12 2.1 2.1 0 0 0 11 9.9V8c0-1.66-1.34-3-3-3H2zm17 3v8h-4V8h4m0-3h-4c-1.66 0-3 1.34-3 3v8c0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3z"
    />
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
@prop export let ariaLabel = '30fps';
-->
