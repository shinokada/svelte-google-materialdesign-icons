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

  export let ariaLabel = 'tapas';
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
      d="M22 10V1h-8v9c0 1.86 1.28 3.41 3 3.86V21h-2v2h6v-2h-2v-7.14c1.72-.45 3-2 3-3.86zm-2-7v3h-4V3h4zm-4 7V8h4v2c0 1.1-.9 2-2 2s-2-.9-2-2zm-6-1H8V8h2a2.5 2.5 0 0 0 0-5H8V1H6v2H4a2.5 2.5 0 0 0 0 5h2v1H4a2.5 2.5 0 0 0 0 5h2v9h2v-9h2a2.5 2.5 0 0 0 0-5zM4 6c-.28 0-.5-.22-.5-.5S3.72 5 4 5h6c.28 0 .5.22.5.5s-.22.5-.5.5H4zm6 6H4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5z"
    />
  {:else if variation === 'filled'}
    <path
      d="M22 10V1h-8v9c0 1.86 1.28 3.41 3 3.86V21h-2v2h6v-2h-2v-7.14c1.72-.45 3-2 3-3.86zm-2-7v3h-4V3h4zm-7.5 8.5A2.5 2.5 0 0 1 10 14H8v9H6v-9H4a2.5 2.5 0 0 1 0-5h2V8H4a2.5 2.5 0 0 1 0-5h2V1h2v2h2a2.5 2.5 0 0 1 0 5H8v1h2a2.5 2.5 0 0 1 2.5 2.5z"
    />
  {:else if variation === 'round'}
    <path
      d="M22 10V2c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 1.86 1.28 3.41 3 3.86V21h-1c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-1v-7.14c1.72-.45 3-2 3-3.86zm-2-7v3h-4V3h4zM9.86 9H8V8h1.86c1.31 0 2.5-.94 2.63-2.24A2.5 2.5 0 0 0 10 3H8V2c0-.55-.45-1-1-1s-1 .45-1 1v1H4.14c-1.31 0-2.5.94-2.63 2.24A2.5 2.5 0 0 0 4 8h2v1H4.14c-1.31 0-2.5.94-2.63 2.24A2.5 2.5 0 0 0 4 14h2v8c0 .55.45 1 1 1s1-.45 1-1v-8h2a2.5 2.5 0 0 0 2.49-2.76C12.36 9.94 11.17 9 9.86 9z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M22 10V1h-8v9c0 1.86 1.28 3.41 3 3.86V21h-2v2h6v-2h-2v-7.14c1.72-.45 3-2 3-3.86zm-2-7v3h-4V3h4zM10 9H8V8h2a2.5 2.5 0 0 0 0-5H8V1H6v2H4a2.5 2.5 0 0 0 0 5h2v1H4a2.5 2.5 0 0 0 0 5h2v9h2v-9h2a2.5 2.5 0 0 0 0-5z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M16 10V8h4v2c0 1.1-.9 2-2 2s-2-.9-2-2zM4 6c-.28 0-.5-.22-.5-.5S3.72 5 4 5h6c.28 0 .5.22.5.5s-.22.5-.5.5H4zm6 6H4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5z"
      opacity=".3"
    /><path
      d="M22 10V1h-8v9c0 1.86 1.28 3.41 3 3.86V21h-2v2h6v-2h-2v-7.14c1.72-.45 3-2 3-3.86zm-2-7v3h-4V3h4zm-4 7V8h4v2c0 1.1-.9 2-2 2s-2-.9-2-2zm-6-1H8V8h2a2.5 2.5 0 0 0 0-5H8V1H6v2H4a2.5 2.5 0 0 0 0 5h2v1H4a2.5 2.5 0 0 0 0 5h2v9h2v-9h2a2.5 2.5 0 0 0 0-5zM4 6c-.28 0-.5-.22-.5-.5S3.72 5 4 5h6c.28 0 .5.22.5.5s-.22.5-.5.5H4zm6 6H4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5z"
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
@prop export let ariaLabel = 'tapas';
-->
