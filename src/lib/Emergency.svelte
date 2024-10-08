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

  export let ariaLabel = 'emergency';
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
      d="M21.29 13.9 18 12l3.29-1.9c.48-.28.64-.89.37-1.37l-2-3.46a1.01 1.01 0 0 0-1.37-.37L15 6.8V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3.8L5.71 4.9a1.01 1.01 0 0 0-1.37.37l-2 3.46c-.28.48-.11 1.09.37 1.37L6 12l-3.29 1.9c-.48.28-.64.89-.37 1.37l2 3.46c.28.48.89.64 1.37.37L9 17.2V21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3.8l3.29 1.9c.48.28 1.09.11 1.37-.37l2-3.46c.28-.48.11-1.09-.37-1.37zm-2.86 2.97-4.68-2.7c-.33-.2-.75.04-.75.43V20h-2v-5.4c0-.38-.42-.63-.75-.43l-4.68 2.7-1-1.73 4.68-2.7c.33-.19.33-.67 0-.87l-4.68-2.7 1-1.73 4.68 2.7c.33.19.75-.05.75-.44V4h2v5.4c0 .38.42.63.75.43l4.68-2.7 1 1.73-4.68 2.7c-.33.19-.33.67 0 .87l4.68 2.7-1 1.74z"
    />
  {:else if variation === 'filled'}
    <path
      d="m20.79 9.23-2-3.46L14 8.54V3h-4v5.54L5.21 5.77l-2 3.46L8 12l-4.79 2.77 2 3.46L10 15.46V21h4v-5.54l4.79 2.77 2-3.46L16 12z"
    />
  {:else if variation === 'round'}
    <path
      d="m20.29 8.37-1-1.73a1.01 1.01 0 0 0-1.37-.37L14 8.54V4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v4.54L6.07 6.27a.993.993 0 0 0-1.36.36l-1 1.73c-.28.48-.12 1.1.36 1.37L8 12l-3.93 2.27c-.48.28-.64.89-.37 1.37l1 1.73c.28.48.89.64 1.37.37L10 15.46V20c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-4.54l3.93 2.27c.48.28 1.09.11 1.37-.37l1-1.73c.28-.48.11-1.09-.37-1.37L16 12l3.93-2.27c.48-.27.64-.89.36-1.36z"
    />
  {:else if variation === 'sharp'}
    <path
      d="m20.79 9.23-2-3.46L14 8.54V3h-4v5.54L5.21 5.77l-2 3.46L8 12l-4.79 2.77 2 3.46L10 15.46V21h4v-5.54l4.79 2.77 2-3.46L16 12z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="m18.43 16.87-4.68-2.7c-.33-.2-.75.04-.75.43V20h-2v-5.4c0-.38-.42-.63-.75-.43l-4.68 2.7-1-1.73 4.68-2.7c.33-.19.33-.67 0-.87l-4.68-2.7 1-1.73 4.68 2.7c.33.19.75-.05.75-.44V4h2v5.4c0 .38.42.63.75.43l4.68-2.7 1 1.73-4.68 2.7c-.33.19-.33.67 0 .87l4.68 2.7-1 1.74z"
      opacity=".3"
    /><path
      d="M21.29 13.9 18 12l3.29-1.9c.48-.28.64-.89.37-1.37l-2-3.46a1.01 1.01 0 0 0-1.37-.37L15 6.8V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3.8L5.71 4.9a1.01 1.01 0 0 0-1.37.37l-2 3.46c-.28.48-.11 1.09.37 1.37L6 12l-3.29 1.9c-.48.28-.64.89-.37 1.37l2 3.46c.28.48.89.64 1.37.37L9 17.2V21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3.8l3.29 1.9c.48.28 1.09.11 1.37-.37l2-3.46c.28-.48.11-1.09-.37-1.37zm-2.86 2.97-4.68-2.7c-.33-.2-.75.04-.75.43V20h-2v-5.4c0-.38-.42-.63-.75-.43l-4.68 2.7-1-1.73 4.68-2.7c.33-.19.33-.67 0-.87l-4.68-2.7 1-1.73 4.68 2.7c.33.19.75-.05.75-.44V4h2v5.4c0 .38.42.63.75.43l4.68-2.7 1 1.73-4.68 2.7c-.33.19-.33.67 0 .87l4.68 2.7-1 1.74z"
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
@prop export let ariaLabel = 'emergency';
-->
