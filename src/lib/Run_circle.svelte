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

  export let ariaLabel = 'run circle';
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
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
    /><path
      d="M13.54 8.97c-.23-.47-.76-.71-1.26-.53L9 9.65V12h1v-1.65l1.54-.57-.96 4.89-2.78-.57-.2.98 3.76.77.52-2.64L13 14.42V18h1v-3.97l-1.32-1.44.41-2.35C13.99 11.46 15.3 12 16 12v-1c-.41 0-1.63-.33-2.46-2.03z"
    /><circle cx="13.5" cy="7" r="1" />
  {:else if variation === 'filled'}
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.5 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.5 6c-.7 0-2.01-.54-2.91-1.76l-.41 2.35L14 14.03V18h-1v-3.58l-1.11-1.21-.52 2.64-3.77-.77.2-.98 2.78.57.96-4.89-1.54.57V12H9V9.65l3.28-1.21c.49-.18 1.03.06 1.26.53.83 1.7 2.05 2.03 2.46 2.03v1z"
    />
  {:else if variation === 'round'}
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.5 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm1.91 5.91c-.71-.2-1.63-.74-2.32-1.66l-.41 2.35 1.19 1.3c.08.08.13.2.13.32v3.28c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-3.08l-1.11-1.21-.43 2.15c-.05.27-.32.45-.59.39l-2.78-.57a.5.5 0 0 1-.39-.59c.06-.27.32-.44.59-.39l2.29.47.96-4.89-1.54.57v1.15c0 .28-.22.5-.5.5s-.5-.22-.5-.5V10c0-.21.13-.4.33-.47l2.95-1.09a1 1 0 0 1 1.25.51c.65 1.35 1.55 1.85 2.1 2 .22.05.37.23.37.45v.04c0 .31-.29.55-.59.47z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.5 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.5 6c-.7 0-2.01-.54-2.91-1.76l-.41 2.35L14 14.03V18h-1v-3.58l-1.11-1.21-.52 2.64-3.77-.77.2-.98 2.78.57.96-4.89-1.54.57V12H9V9.65l3.28-1.21c.49-.18 1.03.06 1.26.53.83 1.7 2.05 2.03 2.46 2.03v1z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1.5 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.5 6c-.7 0-2.01-.54-2.91-1.76l-.41 2.35L14 14.03V18h-1v-3.58l-1.11-1.21-.52 2.64-3.77-.77.2-.98 2.78.57.96-4.89-1.54.57V12H9V9.65l3.28-1.21c.49-.18 1.03.06 1.26.53.83 1.7 2.05 2.03 2.46 2.03v1z"
      opacity=".3"
    /><path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
    /><path
      d="M13.54 8.97c-.23-.47-.76-.71-1.26-.53L9 9.65V12h1v-1.65l1.54-.57-.96 4.89-2.78-.57-.2.98 3.76.77.52-2.64L13 14.42V18h1v-3.97l-1.32-1.44.41-2.35C13.99 11.46 15.3 12 16 12v-1c-.41 0-1.63-.33-2.46-2.03z"
    /><circle cx="13.5" cy="7" r="1" />
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
@prop export let ariaLabel = 'run circle';
-->
