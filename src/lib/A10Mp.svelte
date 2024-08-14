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

  export let ariaLabel = '10mp';
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
      d="M13 11.5h2.5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H13c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.5-4.5H15v3h-1.5V7zm-6 7h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm1-2.5H10v-6H7V7h1.5zm5 7H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6zM15 14h1.5v1.5H15V14z"
    /><path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"
    />
  {:else if variation === 'filled'}
    <path
      d="M13.5 7H15v3h-1.5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15.5h-1.5V14h-1v3H8v-3H7v4.5H5.5v-5c0-.55.45-1 1-1H11c.55 0 1 .45 1 1v5zm3.5 0H14v-6h3.5c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1h-2v1.5zM10 5.5v6H8.5V7H7V5.5h3zm6.5 5c0 .55-.45 1-1 1H13c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h2.5c.55 0 1 .45 1 1v4zm-1 3.5H17v1.5h-1.5z"
    />
  {:else if variation === 'round'}
    <path
      d="M13.5 7H15v3h-1.5V7zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7.25 15.5c-.41 0-.75-.34-.75-.75V14h-1v2.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14h-1v3.75c0 .41-.34.75-.75.75S6 18.16 6 17.75V13.5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v4.25c0 .41-.34.75-.75.75zm2.5 0c-.41 0-.75-.34-.75-.75V13.5c0-.55.45-1 1-1H17c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1h-2v.75c0 .41-.34.75-.75.75zM10 6.5v4.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7h-.75C7.34 7 7 6.66 7 6.25s.34-.75.75-.75H9c.55 0 1 .45 1 1zm6.5 4c0 .55-.45 1-1 1H13c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h2.5c.55 0 1 .45 1 1v4zM15 14h1.5v1.5H15V14z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M13.5 7H15v3h-1.5V7zM21 3H3v18h18V3zm-8.5 15.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5v6zm2.5 0h-1.5v-6H18V17h-3v1.5zm-5-13v6H8.5V7H7V5.5h3zm6.5 0v6H12v-6h4.5zM15 14h1.5v1.5H15V14z"
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
@prop export let ariaLabel = '10mp';
-->
