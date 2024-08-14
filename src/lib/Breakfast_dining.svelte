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

  export let ariaLabel = 'breakfast dining';
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
      d="M18 3H6C3.79 3 2 4.79 2 7c0 1.48.81 2.75 2 3.45V19c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8.55c1.19-.69 2-1.97 2-3.45 0-2.21-1.79-4-4-4zm1 5.72-1 .58V19H6V9.31l-.99-.58C4.38 8.35 4 7.71 4 7c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2 0 .71-.38 1.36-1 1.72z"
    /><path
      d="M12.71 9.29C12.51 9.1 12.26 9 12 9s-.51.1-.71.29l-3 3a.996.996 0 0 0 0 1.41l3 3c.2.2.45.3.71.3s.51-.1.71-.29l3-3a.996.996 0 0 0 0-1.41l-3-3.01zM12 14.58 10.41 13 12 11.41 13.59 13 12 14.58z"
    />
  {:else if variation === 'filled'}
    <path
      fill-rule="evenodd"
      d="M18 3H6C3.79 3 2 4.79 2 7c0 1.48.81 2.75 2 3.45V19c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8.55c1.19-.69 2-1.97 2-3.45 0-2.21-1.79-4-4-4zm-4 12h-4v-4h4v4z"
    />
  {:else if variation === 'round'}
    <path
      d="M18 3H6C3.79 3 2 4.79 2 7c0 1.48.81 2.75 2 3.45V19c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8.55c1.19-.69 2-1.97 2-3.45 0-2.21-1.79-4-4-4zm-2.29 10.7-3 3c-.39.39-1.02.39-1.42 0l-3-3a.996.996 0 0 1 0-1.41l3-3a.996.996 0 0 1 1.41 0l3 3c.4.39.4 1.02.01 1.41z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M17.85 3H6.14C4.15 3 2.36 4.39 2.05 6.36c-.27 1.75.59 3.29 1.95 4.09V21h16V10.45a3.996 3.996 0 0 0 1.95-4.11C21.63 4.38 19.83 3 17.85 3zm-1.44 10L12 17.42 7.59 13 12 8.59 16.41 13z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M18 5H6c-1.1 0-2 .9-2 2 0 .71.38 1.35 1.01 1.73l.99.58V19h12V9.3l1-.58c.63-.36 1-1.01 1-1.72 0-1.1-.9-2-2-2zm-2.29 8.7-3 3c-.2.2-.45.3-.71.3s-.51-.1-.71-.29l-3-3a.996.996 0 0 1 0-1.41l3-3c.2-.2.45-.3.71-.3s.51.1.71.29l3 3c.39.39.39 1.02 0 1.41z"
      opacity=".3"
    /><path
      d="M18 3H6C3.79 3 2 4.79 2 7c0 1.48.81 2.75 2 3.45V19c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8.55c1.19-.69 2-1.97 2-3.45 0-2.21-1.79-4-4-4zm1 5.72-1 .58V19H6V9.31l-.99-.58C4.38 8.35 4 7.71 4 7c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2 0 .71-.38 1.36-1 1.72z"
    /><path
      d="M12.71 9.29C12.51 9.1 12.26 9 12 9s-.51.1-.71.29l-3 3a.996.996 0 0 0 0 1.41l3 3c.2.2.45.3.71.3s.51-.1.71-.29l3-3a.996.996 0 0 0 0-1.41l-3-3.01zM12 14.58 10.41 13 12 11.41 13.59 13 12 14.58z"
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
@prop export let ariaLabel = 'breakfast dining';
-->
