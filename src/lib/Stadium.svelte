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

  export let ariaLabel = 'stadium';
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
      d="M7 5 3 7V3l4 2zm11-2v4l4-2-4-2zm-7-1v4l4-2-4-2zm2 16h-2v4c-5.05-.15-9-1.44-9-3v-9c0-1.66 4.48-3 10-3s10 1.34 10 3v9c0 1.56-3.95 2.85-9 3v-4zm-8-7.96c1.38.49 3.77.96 7 .96s5.62-.47 7-.96C19 9.86 16.22 9 12 9s-7 .86-7 1.04zm15 1.76c-1.82.73-4.73 1.2-8 1.2s-6.18-.47-8-1.2v6.78c.61.41 2.36 1.01 5 1.28V16h6v3.86c2.64-.27 4.39-.87 5-1.28V11.8z"
    />
  {:else if variation === 'filled'}
    <path
      d="M7 5 3 7V3l4 2zm11-2v4l4-2-4-2zm-7-1v4l4-2-4-2zm-6 8.04c1.38.49 3.77.96 7 .96s5.62-.47 7-.96C19 9.86 16.22 9 12 9s-7 .86-7 1.04zM15 17H9v4.88c-4.06-.39-7-1.54-7-2.88v-9c0-1.66 4.48-3 10-3s10 1.34 10 3v9c0 1.34-2.94 2.48-7 2.87V17z"
    />
  {:else if variation === 'round'}
    <path
      d="M6.11 5.45 3.72 6.64A.502.502 0 0 1 3 6.19V3.81c0-.37.39-.61.72-.45L6.1 4.55c.37.19.37.71.01.9zM18 3.81v2.38c0 .37.39.61.72.45l2.38-1.19c.37-.18.37-.71 0-.89l-2.38-1.19a.494.494 0 0 0-.72.44zm-7-1v2.38c0 .37.39.61.72.45l2.38-1.19c.37-.18.37-.71 0-.89l-2.38-1.19a.494.494 0 0 0-.72.44zm-6 7.23c1.38.49 3.77.96 7 .96s5.62-.47 7-.96C19 9.86 16.22 9 12 9s-7 .86-7 1.04zM14 17h-4c-.55 0-1 .45-1 1v3.88c-4.06-.39-7-1.54-7-2.88v-9c0-1.66 4.48-3 10-3s10 1.34 10 3v9c0 1.34-2.94 2.48-7 2.87V18c0-.55-.45-1-1-1z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M7 5 3 7V3l4 2zm11-2v4l4-2-4-2zm-7-1v4l4-2-4-2zm-6 8.04c1.38.49 3.77.96 7 .96s5.62-.47 7-.96C19 9.86 16.22 9 12 9s-7 .86-7 1.04zM15 17H9v4.88c-4.06-.39-7-1.54-7-2.88v-9c0-1.66 4.48-3 10-3s10 1.34 10 3v9c0 1.34-2.94 2.48-7 2.87V17z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M5 10.04c1.38.49 3.77.96 7 .96s5.62-.47 7-.96C19 9.86 16.22 9 12 9s-7 .86-7 1.04zm15 1.76c-1.82.73-4.73 1.2-8 1.2s-6.18-.47-8-1.2v6.78c.61.41 2.36 1.01 5 1.28V16h6v3.86c2.64-.27 4.39-.87 5-1.28V11.8z"
      opacity=".3"
    /><path
      d="M7 5 3 7V3l4 2zm11-2v4l4-2-4-2zm-7-1v4l4-2-4-2zm2 16h-2v4c-5.05-.15-9-1.44-9-3v-9c0-1.66 4.48-3 10-3s10 1.34 10 3v9c0 1.56-3.95 2.85-9 3v-4zm-8-7.96c1.38.49 3.77.96 7 .96s5.62-.47 7-.96C19 9.86 16.22 9 12 9s-7 .86-7 1.04zm15 1.76c-1.82.73-4.73 1.2-8 1.2s-6.18-.47-8-1.2v6.78c.61.41 2.36 1.01 5 1.28V16h6v3.86c2.64-.27 4.39-.87 5-1.28V11.8z"
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
@prop export let ariaLabel = 'stadium';
-->
