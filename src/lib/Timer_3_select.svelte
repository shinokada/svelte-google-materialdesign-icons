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

  export let ariaLabel = 'timer 3 select';
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
      d="M21 11v2h-4v1h2.5c.83 0 1.5.68 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H15v-2h4v-1h-2.5c-.82 0-1.5-.68-1.5-1.5v-2c0-.82.68-1.5 1.5-1.5H21zM4 5v3h6v2.5H4v3h6V16H4v3h6c1.66 0 3-1.34 3-3v-1.9a2.1 2.1 0 0 0-2.1-2.1A2.1 2.1 0 0 0 13 9.9V8c0-1.66-1.34-3-3-3H4z"
    />
  {:else if variation === 'filled'}
    <path
      d="M21 11v2h-4v1h2.5c.83 0 1.5.68 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H15v-2h4v-1h-2.5c-.82 0-1.5-.68-1.5-1.5v-2c0-.82.68-1.5 1.5-1.5H21zM4 5v3h6v2.5H4v3h6V16H4v3h6c1.66 0 3-1.34 3-3v-1.9a2.1 2.1 0 0 0-2.1-2.1A2.1 2.1 0 0 0 13 9.9V8c0-1.66-1.34-3-3-3H4z"
    />
  {:else if variation === 'round'}
    <path
      d="M21 12c0 .55-.45 1-1 1h-3v1h2.5c.83 0 1.5.68 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H16c-.55 0-1-.45-1-1s.45-1 1-1h3v-1h-2.5c-.82 0-1.5-.68-1.5-1.5v-2c0-.82.68-1.5 1.5-1.5H20c.55 0 1 .45 1 1zM4 6.5C4 7.33 4.67 8 5.5 8H10v2.5H5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5H10V16H5.5c-.83 0-1.5.67-1.5 1.5S4.67 19 5.5 19H10c1.66 0 3-1.34 3-3v-1.9a2.1 2.1 0 0 0-2.1-2.1A2.1 2.1 0 0 0 13 9.9V8c0-1.66-1.34-3-3-3H5.5C4.67 5 4 5.67 4 6.5z"
    />
  {:else if variation === 'sharp'}
    <path d="M21 11v2h-4v1h4v5h-6v-2h4v-1h-4v-5h6zM4 5v3h6v2.5H4v3h6V16H4v3h9V5H4z" />
  {:else if variation === 'two-tone'}
    <path
      d="M21 11v2h-4v1h2.5c.83 0 1.5.68 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H15v-2h4v-1h-2.5c-.82 0-1.5-.68-1.5-1.5v-2c0-.82.68-1.5 1.5-1.5H21zM4 5v3h6v2.5H4v3h6V16H4v3h6c1.66 0 3-1.34 3-3v-1.9a2.1 2.1 0 0 0-2.1-2.1A2.1 2.1 0 0 0 13 9.9V8c0-1.66-1.34-3-3-3H4z"
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
@prop export let ariaLabel = 'timer 3 select';
-->
