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

  export let ariaLabel = 'curtains';
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
      d="M20 19V3H4v16H2v2h20v-2h-2zm-2-8.14c-2.05-.58-3.64-2.93-3.94-5.86H18v5.86zM15.81 12c-2.04 1.35-3.5 3.94-3.76 7h-.09c-.26-3.06-1.72-5.65-3.76-7 2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7zM9.94 5c-.3 2.93-1.89 5.27-3.94 5.86V5h3.94zM6 13.14c2.05.58 3.64 2.93 3.94 5.86H6v-5.86zM14.06 19c.3-2.93 1.89-5.27 3.94-5.86V19h-3.94z"
    />
  {:else if variation === 'filled'}
    <path
      d="M20 19V3H4v16H2v2h20v-2h-2zM8.19 12c2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7-2.04 1.35-3.5 3.94-3.76 7h-.09c-.26-3.06-1.72-5.65-3.76-7z"
    />
  {:else if variation === 'round'}
    <path
      d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1h-1zM8.19 12c2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7-2.04 1.35-3.5 3.94-3.76 7h-.09c-.26-3.06-1.72-5.65-3.76-7z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M20 19V3H4v16H2v2h20v-2h-2zM8.19 12c2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7-2.04 1.35-3.5 3.94-3.76 7h-.09c-.26-3.06-1.72-5.65-3.76-7z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M6 13.14V19h3.94c-.3-2.93-1.89-5.27-3.94-5.86zM9.94 5H6v5.86C8.05 10.27 9.64 7.93 9.94 5zm4.12 14H18v-5.86c-2.05.59-3.64 2.93-3.94 5.86zM18 10.86V5h-3.94c.3 2.93 1.89 5.27 3.94 5.86z"
      opacity=".3"
    /><path
      d="M20 19V3H4v16H2v2h20v-2h-2zM6 5h3.94c-.3 2.93-1.89 5.27-3.94 5.86V5zm0 14v-5.86c2.05.58 3.64 2.93 3.94 5.86H6zm5.95 0c-.26-3.06-1.72-5.65-3.76-7 2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7-2.04 1.35-3.5 3.94-3.76 7h-.09zM18 19h-3.94c.3-2.93 1.89-5.27 3.94-5.86V19zm0-8.14c-2.05-.58-3.64-2.93-3.94-5.86H18v5.86z"
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
@prop export let ariaLabel = 'curtains';
-->
