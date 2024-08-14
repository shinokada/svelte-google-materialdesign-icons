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

  export let ariaLabel = 'web stories';
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
      d="M17 4v16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h9v16zm8-14v12c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5z"
    />
  {:else if variation === 'filled'}
    <path
      d="M17 4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2V4zM2 20c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v16zm19-2c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5v12z"
    />
  {:else if variation === 'round'}
    <path
      d="M17 4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2V4zM2 20c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v16zm19-2c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5v12z"
    />
  {:else if variation === 'sharp'}
    <path d="M17 4h2v16h-2V4zM2 2v20h13V2H2zm19 16h1.5V6H21v12z" />
  {:else if variation === 'two-tone'}
    <path d="M4 4h9v16H4z" opacity=".3" /><path
      d="M17 4v16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h9v16zm8-14v12c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5z"
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
@prop export let ariaLabel = 'web stories';
-->
