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

  export let ariaLabel = 'real estate agent';
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
      d="M21 6.5V14h-2V7.5L14 4 9 7.5V9H7V6.5l7-5 7 5zm-5.5.5h-1v1h1V7zm-2 0h-1v1h1V7zm2 2h-1v1h1V9zm-2 0h-1v1h1V9zm5.5 7h-2c0-1.2-.75-2.28-1.87-2.7L8.97 11H1v11h6v-1.44l7 1.94 8-2.5v-1c0-1.66-1.34-3-3-3zM3 20v-7h2v7H3zm10.97.41L7 18.48V13h1.61l5.82 2.17c.34.13.57.46.57.83 0 0-1.99-.05-2.3-.15l-2.38-.79-.63 1.9 2.38.79c.51.17 1.04.26 1.58.26H19c.39 0 .74.23.9.56l-5.93 1.84z"
    />
  {:else if variation === 'filled'}
    <path
      d="M1 22h4V11H1v11zm19-5h-7l-2.09-.73.33-.94L13 16h2.82c.65 0 1.18-.53 1.18-1.18 0-.49-.31-.93-.77-1.11L8.97 11H7v9.02L14 22l8-3c-.01-1.1-.89-2-2-2zM14 1.5l-7 5V9h2l8.14 3.26C18.26 12.71 19 13.79 19 15h2V6.5l-7-5zm-.5 8.5h-1V9h1v1zm0-2h-1V7h1v1zm2 2h-1V9h1v1zm0-2h-1V7h1v1z"
    />
  {:else if variation === 'round'}
    <path
      d="M3 22c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2s-2 .9-2 2v7c0 1.1.9 2 2 2zm8.37-5.57 1.47.51c.11.04.22.06.33.06H20c1.11 0 2 .89 2.01 2l-7.39 2.77c-.4.15-.84.17-1.25.05L7 20.02V11h1.6c.24 0 .48.04.7.13l6.93 2.59a1.182 1.182 0 0 1-.41 2.29h-2.63c-.12 0-.24-.02-.36-.07l-1.12-.43c-.26-.1-.55.04-.64.3-.09.25.04.53.3.62zM20.16 5.9l-5-3.57c-.7-.5-1.63-.5-2.32 0l-5 3.57c-.53.38-.84.98-.84 1.63V9h1.61c.25 0 .51.05.74.14l7.79 3.11C18.26 12.71 19 13.79 19 15h2V7.53c0-.65-.31-1.25-.84-1.63zM13 10c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm0-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm2 2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm0-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M1 22h4V11H1v11zM14 1.5l-7 5V9h2l10 4v2h2V6.5l-7-5zm-.5 8.5h-1V9h1v1zm0-2h-1V7h1v1zm2 2h-1V9h1v1zm0-2h-1V7h1v1zM22 19l-8 3-7-1.98V11h1.97L17 14v2h-4l-1.76-.68-.33.94L13 17h9v2z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="m10.5 9.44 5.32 1.99c1.24.46 2.21 1.41 2.74 2.57H19V7.5L14 4 9 7.5V9h.33l1.17.44zm4-2.44h1v1h-1V7zm0 2h1v1h-1V9zm-2-2h1v1h-1V7zm0 2h1v1h-1V9zM3 13h2v7H3v-7zm16.9 5.57-5.93 1.84L7 18.48V13h1.61l5.82 2.17c.34.13.57.46.57.83 0 0-1.99-.05-2.3-.15l-2.38-.79-.63 1.9 2.38.79c.51.17 1.04.26 1.58.26H19c.39 0 .74.23.9.56z"
      opacity=".3"
    /><path
      d="M15.5 7h-1v1h1V7zm-2 0h-1v1h1V7zm2 2h-1v1h1V9zm-2 0h-1v1h1V9zM21 6.5V14h-2V7.5L14 4 9 7.5V9H7V6.5l7-5 7 5zM19 16h-2c0-1.2-.75-2.28-1.87-2.7L8.97 11H1v11h6v-1.44l7 1.94 8-2.5v-1c0-1.66-1.34-3-3-3zM3 20v-7h2v7H3zm10.97.41L7 18.48V13h1.61l5.82 2.17c.34.13.57.46.57.83 0 0-1.99-.05-2.3-.15l-2.38-.79-.63 1.9 2.38.79c.51.17 1.04.26 1.58.26H19c.39 0 .74.23.9.56l-5.93 1.84z"
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
@prop export let ariaLabel = 'real estate agent';
-->
