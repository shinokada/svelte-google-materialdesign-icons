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

  export let ariaLabel = 'mp';
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
      d="M17 9h-3.5v6H15v-1.5h2c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-.5 3H15v-1.5h1.5V12zm-5-3H7c-.55 0-1 .45-1 1v5h1.5v-4.5h1v3H10v-3h1V15h1.5v-5c0-.55-.45-1-1-1z"
    /><path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 19V5h14v14H5z"
    />
  {:else if variation === 'filled'}
    <path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM6.5 9H11c.55 0 1 .45 1 1v5h-1.5v-4.5h-1v3H8v-3H7V15H5.5v-5c0-.55.45-1 1-1zm9 6H14V9h3.5c.55 0 1 .45 1 1v2.5c0 .55-.45 1-1 1h-2V15zm0-3H17v-1.5h-1.5V12z"
    />
  {:else if variation === 'round'}
    <path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7 9h4.5c.55 0 1 .45 1 1v4.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V10.5h-1v2.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V10.5h-1v3.75c0 .41-.34.75-.75.75S6 14.66 6 14.25V10c0-.55.45-1 1-1zm7.25 6c-.41 0-.75-.33-.75-.75V10c0-.55.45-1 1-1H17c.55 0 1 .45 1 1v2.5c0 .55-.45 1-1 1h-2v.75c0 .41-.34.75-.75.75zm.75-3h1.5v-1.5H15V12z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M21 3H3v18h18V3zM6 9h6.5v6H11v-4.5h-1v3H8.5v-3h-1V15H6V9zm9 6h-1.5V9H18v4.5h-3V15zm0-3h1.5v-1.5H15V12z"
    />
  {:else if variation === 'two-tone'}
    <path d="M15 10.5h1.5V12H15z" opacity=".3" /><path
      d="M5 5v14h14V5H5zm7.5 10H11v-4.5h-1v3H8.5v-3h-1V15H6v-5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5zm5.5-2.5c0 .55-.45 1-1 1h-2V15h-1.5V9H17c.55 0 1 .45 1 1v2.5z"
      opacity=".3"
    /><path
      d="M17 9h-3.5v6H15v-1.5h2c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-.5 3H15v-1.5h1.5V12zm-5-3H7c-.55 0-1 .45-1 1v5h1.5v-4.5h1v3H10v-3h1V15h1.5v-5c0-.55-.45-1-1-1z"
    /><path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 19V5h14v14H5z"
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
@prop export let ariaLabel = 'mp';
-->
