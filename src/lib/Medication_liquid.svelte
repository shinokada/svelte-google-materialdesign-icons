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

  export let ariaLabel = 'medication liquid';
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
      d="M3 3h12v2H3zM2 21h14V6H2v15zm3-9h2.5V9.5h3V12H13v3h-2.5v2.5h-3V15H5v-3zm15-6c-1.68 0-3 1.76-3 4 0 1.77.83 3.22 2 3.76V21h2v-7.24c1.17-.54 2-1.99 2-3.76 0-2.24-1.32-4-3-4z"
    />
  {:else if variation === 'filled'}
    <path
      d="M3 3h12v2H3zm11 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1 9h-2.5v2.5h-3V15H5v-3h2.5V9.5h3V12H13v3zm7-9c-1.68 0-3 1.76-3 4 0 1.77.83 3.22 2 3.76V20c0 .55.45 1 1 1s1-.45 1-1v-6.24c1.17-.54 2-1.99 2-3.76 0-2.24-1.32-4-3-4z"
    />
  {:else if variation === 'round'}
    <path
      d="M4 5h10c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm10 1H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-2.5 9h-1v1c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-1h-1c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12h1v-1c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1h1c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM20 6c-1.68 0-3 1.76-3 4 0 1.77.83 3.22 2 3.76V20c0 .55.45 1 1 1s1-.45 1-1v-6.24c1.17-.54 2-1.99 2-3.76 0-2.24-1.32-4-3-4z"
    />
  {:else if variation === 'sharp'}
    <path d="M3 3h12v2H3zm4.5 14.5h3V15H13v-3h-2.5V9.5h-3V12H5v3h2.5z" /><path
      d="M14 6H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 13H4V8h10v11zm6-13c-1.68 0-3 1.76-3 4 0 1.77.83 3.22 2 3.76V20c0 .55.45 1 1 1s1-.45 1-1v-6.24c1.17-.54 2-1.99 2-3.76 0-2.24-1.32-4-3-4zm0 6c-.41 0-1-.78-1-2s.59-2 1-2 1 .78 1 2-.59 2-1 2z"
    />
  {:else if variation === 'two-tone'}
    <g opacity=".3"
      ><defs><path id="a" d="M4 8h10v11H4z" opacity=".3" /></defs><use
        xlink:href="#a"
        overflow="visible"
      /><clipPath id="b"><use xlink:href="#a" overflow="visible" /></clipPath><path
        d="M4 19h10V8H4v11zm1-7h2.5V9.5h3V12H13v3h-2.5v2.5h-3V15H5v-3z"
        clip-path="url(#b)"
      /></g
    ><path
      d="M3 3h12v2H3zm11 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 13H4V8h10v11z"
    /><path d="M7.5 17.5h3V15H13v-3h-2.5V9.5h-3V12H5v3h2.5z" /><ellipse
      cx="20"
      cy="10"
      opacity=".3"
      rx="1"
      ry="2"
    /><path
      d="M20 6c-1.68 0-3 1.76-3 4 0 1.77.83 3.22 2 3.76V20c0 .55.45 1 1 1s1-.45 1-1v-6.24c1.17-.54 2-1.99 2-3.76 0-2.24-1.32-4-3-4zm0 6c-.41 0-1-.78-1-2s.59-2 1-2 1 .78 1 2-.59 2-1 2z"
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
@prop export let ariaLabel = 'medication liquid';
-->
