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

  export let ariaLabel = '18 up rating';
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
    <path d="M8.5 15H10V9H7v1.5h1.5z" /><path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"
    /><path
      d="M12.5 15H15c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-2.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.5-5h1.5v1.5H13V10zm0 2.5h1.5V14H13v-1.5z"
    />
  {:else if variation === 'filled'}
    <path d="M13 12.5h1.5V14H13zm0-2.5h1.5v1.5H13z" /><path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 12H8.5v-4.5H7V9h3v6zm6-1c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H15c.55 0 1 .45 1 1v4z"
    />
  {:else if variation === 'round'}
    <path d="M13 12.5h1.5V14H13zm0-2.5h1.5v1.5H13z" /><path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9.25 15c-.41 0-.75-.34-.75-.75V10.5h-.75c-.41 0-.75-.34-.75-.75S7.34 9 7.75 9H9c.55 0 1 .45 1 1v4.25c0 .41-.34.75-.75.75zM16 14c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H15c.55 0 1 .45 1 1v4z"
    />
  {:else if variation === 'sharp'}
    <path d="M13 12.5h1.5V14H13zm0-2.5h1.5v1.5H13z" /><path
      d="M21 3H3v18h18V3zM10 15H8.5v-4.5H7V9h3v6zm6-1c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H15c.55 0 1 .45 1 1v4z"
    />
  {:else if variation === 'two-tone'}
    replace_svg_two
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
@prop export let ariaLabel = '18 up rating';
-->
