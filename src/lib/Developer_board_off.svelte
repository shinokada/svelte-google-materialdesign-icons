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

  export let ariaLabel = 'developer board off';
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
      d="M7.83 5H18v10.17L19.83 17H22v-2h-2v-2h2v-2h-2V9h2V7h-2V5c0-1.1-.9-2-2-2H5.83l2 2zM12 9.17V7h4v3h-3.17L12 9.17zM9.83 7H11v1.17L9.83 7zm4 4H16v2.17L13.83 11zM18 21c.06 0 .11 0 .16-.01l2.32 2.32 1.41-1.41L2.1 2.1.69 3.51l1.32 1.32C2 4.89 2 4.94 2 5v14c0 1.1.9 2 2 2h14zM4 19V6.83l2 2V12h3.17l1 1H6v4h5v-3.17l1 1V17h2.17l2 2H4z"
    />
  {:else if variation === 'filled'}
    <path
      d="M7.83 5H18v10.17L19.83 17H22v-2h-2v-2h2v-2h-2V9h2V7h-2V5c0-1.1-.9-2-2-2H5.83l2 2zM12 9.17V7h4v3h-3.17L12 9.17zM9.83 7H11v1.17L9.83 7zm4 4H16v2.17L13.83 11zM18 21c.06 0 .11 0 .16-.01l2.32 2.32 1.41-1.41L2.1 2.1.69 3.51l1.32 1.32C2 4.89 2 4.94 2 5v14c0 1.1.9 2 2 2h14zM4 19V6.83l2 2V12h3.17l1 1H6v4h5v-3.17l1 1V17h2.17l2 2H4z"
    />
  {:else if variation === 'round'}
    <path
      d="M7.83 5H18v10.17L19.83 17H21c.55 0 1-.45 1-1s-.45-1-1-1h-1v-2h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V9h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V5c0-1.1-.9-2-2-2H5.83l2 2zM15 10h-2c-.06 0-.13-.01-.19-.02l-.79-.79C12.01 9.13 12 9.06 12 9V8c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1zm-4-2v.17L9.83 7H10c.55 0 1 .45 1 1zm5 4v1.17L13.83 11H15c.55 0 1 .45 1 1zM1.39 2.81a.996.996 0 0 0 0 1.41l.61.61V19c0 1.1.9 2 2 2h14c.06 0 .11 0 .16-.01l1.61 1.61a.996.996 0 1 0 1.41-1.41L2.81 2.81c-.39-.39-1.03-.39-1.42 0zM4 19V6.83l2 2V11c0 .55.45 1 1 1h2.17l1.02 1.02c-.06-.01-.13-.02-.19-.02H7c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-2c0-.06-.01-.13-.02-.19L12 14.83V16c0 .55.45 1 1 1h1.18l2 2H4z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M7.83 5H18v10.17L19.83 17H22v-2h-2v-2h2v-2h-2V9h2V7h-2V3H5.83l2 2zM12 9.17V7h4v3h-3.17L12 9.17zM9.83 7H11v1.17L9.83 7zm4 4H16v2.17L13.83 11zm4.34 10 2.31 2.31 1.41-1.41L2.1 2.1.69 3.51 2 4.83V21h16.17zM4 19V6.83l2 2V12h3.17l1 1H6v4h5v-3.17l1 1V17h2.17l2 2H4z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M4 19V6.83l2 2V12h3.17l1 1H6v4h5v-3.17l1 1V17h2.17l2 2H4zm12-5.83V11h-2.17l-1-1H16V7h-4v2.17l-1-1V7H9.83l-2-2H18v10.17l-2-2z"
      opacity=".3"
    /><path
      d="M7.83 5H18v10.17L19.83 17H22v-2h-2v-2h2v-2h-2V9h2V7h-2V5c0-1.1-.9-2-2-2H5.83l2 2zM12 9.17V7h4v3h-3.17L12 9.17zM9.83 7H11v1.17L9.83 7zm4 4H16v2.17L13.83 11zM18 21c.06 0 .11 0 .16-.01l2.32 2.32 1.41-1.41L2.1 2.1.69 3.51l1.32 1.32C2 4.89 2 4.94 2 5v14c0 1.1.9 2 2 2h14zM4 19V6.83l2 2V12h3.17l1 1H6v4h5v-3.17l1 1V17h2.17l2 2H4z"
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
@prop export let ariaLabel = 'developer board off';
-->
