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

  export let ariaLabel = 'sip';
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
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v12h16V6H4zm7 3h2v6h-2V9zm3 0h4c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-2.5v2H14V9zm3.5 1.5h-2v1h2v-1zm-11 .75H9c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H5v-1.5h3.5v-.75H6c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h4v1.5H6.5v.75z"
    />
  {:else if variation === 'filled'}
    <path d="M15.5 10.5h2v1h-2z" /><path
      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-10 6.5H6.5v.75H9c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H5v-1.5h3.5v-.75H6c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h4v1.5zm3 4.5h-2V9h2v6zm6-3c0 .55-.45 1-1 1h-2.5v2H14V9h4c.55 0 1 .45 1 1v2z"
    />
  {:else if variation === 'round'}
    <path d="M15.5 10.5h2v1h-2z" /><path
      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM10 9.75c0 .41-.34.75-.75.75H6.5v.75H9c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H5.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H8.5v-.75H6c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h3.25c.41 0 .75.34.75.75zM12 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm7-3c0 .55-.45 1-1 1h-2.5v1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V10c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v2z"
    />
  {:else if variation === 'sharp'}
    <path d="M15.5 10.5h2v1h-2z" /><path
      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-10 6.5H6.5v.75H10V15H5v-1.5h3.5v-.75H5V9h5v1.5zm3 4.5h-2V9h2v6zm6-6v4h-3.5v2H14V9h5z"
    />
  {:else if variation === 'two-tone'}
    <path d="M15.5 10.5h2v1h-2z" opacity=".3" /><path
      d="M4 18h16V6H4v12zm10-9h4c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-2.5v2H14V9zm-3 0h2v6h-2V9zm-6 4.5h3.5v-.75H6c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h4v1.5H6.5v.75H9c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H5v-1.5z"
      opacity=".3"
    /><path
      d="M10 14v-1.75c0-.55-.45-1-1-1H6.5v-.75H10V9H6c-.55 0-1 .45-1 1v1.75c0 .55.45 1 1 1h2.5v.75H5V15h4c.55 0 1-.45 1-1z"
    /><path
      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"
    /><path
      d="M11 9h2v6h-2zm4.5 4H18c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1h-4v6h1.5v-2zm0-2.5h2v1h-2v-1z"
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
@prop export let ariaLabel = 'sip';
-->
