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

  export let ariaLabel = 'dinner dining';
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
      d="m2 19 2 2h16l2-2zm1-1h16.97c.29-3.26-2.28-6-5.48-6-2.35 0-4.35 1.48-5.14 3.55-.41-.23-.87-.38-1.35-.47V9h1.75C10.99 9 12 7.99 12 6.75h9v-1.5h-9C12 4.01 10.99 3 9.75 3H3v1.5h1v.75H3v1.5h1v.75H3V9h1v7.39c-.44.46-.78 1-1 1.61zm11.5-4c.99 0 1.91.4 2.58 1.14.24.26.44.55.58.86h-6.32c.58-1.21 1.81-2 3.16-2zM8 4.5h2v.75H8V4.5zm0 2.25h2v.75H8v-.75zM5.5 4.5h1v.75h-1V4.5zm0 2.25h1v.75h-1v-.75zM5.5 9h1v6.06c-.35.06-.68.17-1 .3V9z"
    />
  {:else if variation === 'filled'}
    <path
      d="M2 19h20l-2 2H4l-2-2zM5 6h1v1H5V6zm0-2h1v1H5V4zm4 0v1H7V4h2zm0 3H7V6h2v1zm-3 8.23c-.36.11-.69.28-1 .47V8h1v7.23zm-2 1.29c-.38.44-.68.93-.84 1.48h16.82c.01-.16.03-.33.03-.5a5.497 5.497 0 0 0-10.58-2.1c-.59-.25-1.24-.4-1.93-.4-.17 0-.33.02-.5.04V8h2c1.03.06 1.9-.96 2-2h10V5H11c-.1-1.05-.97-1.97-2-2H3v1h1v1H3v1h1v1H3v1h1v8.52z"
    />
  {:else if variation === 'round'}
    <path
      d="m2.85 19.85 1 1c.1.1.22.15.36.15H19.8c.13 0 .26-.05.35-.15l1-1a.5.5 0 0 0-.35-.85H3.21a.5.5 0 0 0-.36.85zM3 18h16.97c.29-3.26-2.28-6-5.48-6-2.35 0-4.35 1.48-5.14 3.55-.41-.23-.87-.38-1.35-.47V9h1.75C10.99 9 12 7.99 12 6.75h8.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H12C12 4.01 10.99 3 9.75 3h-6c-.41 0-.75.34-.75.75s.34.75.75.75H4v.75h-.25c-.41 0-.75.34-.75.75s.34.75.75.75H4v.75h-.25c-.41 0-.75.34-.75.75s.34.75.75.75H4v7.39c-.44.46-.78 1-1 1.61zM8 4.5h2v.75H8V4.5zm0 2.25h2v.75H8v-.75zM5.5 4.5h1v.75h-1V4.5zm0 2.25h1v.75h-1v-.75zM5.5 9h1v6.06c-.35.06-.68.17-1 .3V9z"
    />
  {:else if variation === 'sharp'}
    <path
      d="m2 19 2 2h16l2-2zm1-1h16.97c.29-3.26-2.28-6-5.48-6-2.35 0-4.35 1.48-5.14 3.55-.41-.23-.87-.38-1.35-.47V9h4V6.75h9v-1.5h-9V3H3v1.5h1v.75H3v1.5h1v.75H3V9h1v7.39c-.44.46-.78 1-1 1.61zM8 7.5v-.75h2v.75H8zm2-2.25H8V4.5h2v.75zM5.5 4.5h1v.75h-1V4.5zm0 2.25h1v.75h-1v-.75zM6.5 9v6.06c-.35.06-.68.17-1 .3V9h1z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M17.08 15.14A3.44 3.44 0 0 0 14.5 14c-1.35 0-2.58.79-3.16 2h6.32c-.14-.31-.34-.6-.58-.86z"
      opacity=".3"
    /><path
      d="m2 19 2 2h16l2-2zm1-1h16.97c.29-3.26-2.28-6-5.48-6-2.35 0-4.35 1.48-5.14 3.55-.41-.23-.87-.38-1.35-.47V9h1.75C10.99 9 12 7.99 12 6.75h9v-1.5h-9C12 4.01 10.99 3 9.75 3H3v1.5h1v.75H3v1.5h1v.75H3V9h1v7.39c-.44.46-.78 1-1 1.61zm11.5-4c.99 0 1.91.4 2.58 1.14.24.26.44.55.58.86h-6.32c.58-1.21 1.81-2 3.16-2zM8 4.5h2v.75H8V4.5zm0 2.25h2v.75H8v-.75zM5.5 4.5h1v.75h-1V4.5zm0 2.25h1v.75h-1v-.75zM5.5 9h1v6.06c-.35.06-.68.17-1 .3V9z"
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
@prop export let ariaLabel = 'dinner dining';
-->
