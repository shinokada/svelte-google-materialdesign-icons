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

  export let ariaLabel = 'local play';
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
      d="M22 10V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-1.99-3.46L4 6h16v2.54zM9.07 16 12 14.12 14.93 16l-.89-3.36 2.69-2.2-3.47-.21L12 7l-1.27 3.22-3.47.21 2.69 2.2z"
    />
  {:else if variation === 'filled'}
    <path
      d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"
    />
  {:else if variation === 'round'}
    <path
      d="M20 12c0-.76.43-1.42 1.06-1.76.6-.33.94-1.01.94-1.7V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.89-1.99 1.99v2.55c0 .69.33 1.37.94 1.69C3.58 10.58 4 11.24 4 12s-.43 1.43-1.06 1.76c-.6.33-.94 1.01-.94 1.7v2.25C2 19.1 2.9 20 4 20h16c1.1 0 2-.9 2-2v-2.54c0-.69-.34-1.37-.94-1.7-.63-.34-1.06-1-1.06-1.76zm-5.5 4.1L12 14.5l-2.5 1.61c-.38.24-.87-.11-.75-.55l.75-2.88-2.3-1.88a.503.503 0 0 1 .29-.89l2.96-.17 1.08-2.75c.17-.42.77-.42.93 0l1.08 2.76 2.96.17c.45.03.64.6.29.89l-2.3 1.88.76 2.86c.12.45-.37.8-.75.55z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M20 12c0-1.1.9-2 2-2V4H2.01v6c1.1 0 1.99.9 1.99 2s-.89 2-2 2v6h20v-6c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M4.01 8.54C5.2 9.23 6 10.52 6 12s-.81 2.77-2 3.46V18h16v-2.54c-1.19-.69-2-1.99-2-3.46s.81-2.77 2-3.46V6H4l.01 2.54zm6.72 1.68L12 7l1.26 3.23 3.47.2-2.69 2.2.89 3.37L12 14.12 9.07 16l.88-3.37-2.69-2.2 3.47-.21z"
      opacity=".3"
    /><path
      d="M20 4H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2V6c0-1.1-.9-2-2-2zm0 4.54c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-1.99-3.46L4 6h16v2.54zM9.07 16 12 14.12 14.93 16l-.89-3.36 2.69-2.2-3.47-.21L12 7l-1.27 3.22-3.47.21 2.69 2.2z"
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
@prop export let ariaLabel = 'local play';
-->
