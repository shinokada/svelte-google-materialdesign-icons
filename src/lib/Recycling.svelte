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

  export let ariaLabel = 'recycling';
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
      d="M5.77 7.15 7.2 4.78l1.03-1.71c.39-.65 1.33-.65 1.72 0l1.48 2.46-1.23 2.06-1 1.62-3.43-2.06zm15.95 5.82-1.6-2.66-3.46 2L18.87 16H20a2 2 0 0 0 2-2c0-.36-.1-.71-.28-1.03zM16 21h1.5a2 2 0 0 0 1.79-1.11L20.74 17H16v-2l-4 4 4 4v-2zm-6-4H5.7l-.84 1.41c-.3.5-.32 1.12-.06 1.65.28.57.87.94 1.52.94H10v-4zm-3.88-2.65 1.73 1.04L6.48 9.9 1 11.27l1.7 1.02-.41.69c-.35.59-.38 1.31-.07 1.92l1.63 3.26 2.27-3.81zm10.9-9.21-1.3-2.17C15.35 2.37 14.7 2 14 2h-3.53l3.12 5.2-1.72 1.03 5.49 1.37 1.37-5.49-1.71 1.03z"
    />
  {:else if variation === 'filled'}
    <path
      d="M5.77 7.15 7.2 4.78l1.03-1.71c.39-.65 1.33-.65 1.72 0l1.48 2.46-1.23 2.06-1 1.62-3.43-2.06zm15.95 5.82-1.6-2.66-3.46 2L18.87 16H20a2 2 0 0 0 2-2c0-.36-.1-.71-.28-1.03zM16 21h1.5a2 2 0 0 0 1.79-1.11L20.74 17H16v-2l-4 4 4 4v-2zm-6-4H5.7l-.84 1.41c-.3.5-.32 1.12-.06 1.65.28.57.87.94 1.52.94H10v-4zm-3.88-2.65 1.73 1.04L6.48 9.9 1 11.27l1.7 1.02-.41.69c-.35.59-.38 1.31-.07 1.92l1.63 3.26 2.27-3.81zm10.9-9.21-1.3-2.17C15.35 2.37 14.7 2 14 2h-3.53l3.12 5.2-1.72 1.03 5.49 1.37 1.37-5.49-1.71 1.03z"
    />
  {:else if variation === 'round'}
    <path
      d="M6.2 7.41a.501.501 0 0 1-.17-.68L7.2 4.78l1.03-1.71c.39-.65 1.33-.65 1.72 0l1.48 2.46-1.23 2.06-.72 1.2a.54.54 0 0 1-.71.17L6.2 7.41zm15.52 5.56-1.34-2.24a.512.512 0 0 0-.68-.18l-2.6 1.5c-.24.14-.32.45-.18.69L18.87 16h1.09c.61 0 1.2-.26 1.59-.73.3-.37.45-.82.45-1.27 0-.36-.1-.71-.28-1.03zM16 21h1.5a2 2 0 0 0 1.79-1.11L20.74 17H16v-.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79a.5.5 0 0 0 .85-.35V21zm-6.5-4H5.7l-.84 1.41c-.3.5-.32 1.12-.06 1.65.28.57.87.94 1.52.94H9.5c.28 0 .5-.22.5-.5v-3c0-.28-.22-.5-.5-.5zm-3.38-2.65.7.42c.38.23.85-.12.74-.55l-.96-3.84a.49.49 0 0 0-.6-.36l-3.83.96c-.43.11-.52.68-.14.91l.66.4-.41.69c-.35.59-.38 1.31-.07 1.92l1.63 3.26 2.28-3.81zm10.9-9.21-1.3-2.17C15.35 2.37 14.7 2 14 2h-3.53l3.12 5.2-.69.41c-.38.23-.3.81.14.91l3.83.96c.27.07.54-.1.61-.36l.96-3.83a.499.499 0 0 0-.74-.55l-.68.4z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M5.77 7.15 7.2 4.78l1.03-1.71c.39-.65 1.33-.65 1.72 0l1.48 2.46-1.23 2.06-1 1.62-3.43-2.06zm15.95 5.82-1.6-2.66-3.46 2L18.87 16H20a2 2 0 0 0 2-2c0-.36-.1-.71-.28-1.03zM16 21h1.5a2 2 0 0 0 1.79-1.11L20.74 17H16v-2l-4 4 4 4v-2zm-6-4H5.7l-.84 1.41c-.3.5-.32 1.12-.06 1.65.28.57.87.94 1.52.94H10v-4zm-3.88-2.65 1.73 1.04L6.48 9.9 1 11.27l1.7 1.02-.41.69c-.35.59-.38 1.31-.07 1.92l1.63 3.26 2.27-3.81zm10.9-9.21-1.3-2.17C15.35 2.37 14.7 2 14 2h-3.53l3.12 5.2-1.72 1.03 5.49 1.37 1.37-5.49-1.71 1.03z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M5.77 7.15 7.2 4.78l1.03-1.71c.39-.65 1.33-.65 1.72 0l1.48 2.46-1.23 2.06-1 1.62-3.43-2.06zm15.95 5.82-1.6-2.66-3.46 2L18.87 16H20a2 2 0 0 0 2-2c0-.36-.1-.71-.28-1.03zM16 21h1.5a2 2 0 0 0 1.79-1.11L20.74 17H16v-2l-4 4 4 4v-2zm-6-4H5.7l-.84 1.41c-.3.5-.32 1.12-.06 1.65.28.57.87.94 1.52.94H10v-4zm-3.88-2.65 1.73 1.04L6.48 9.9 1 11.27l1.7 1.02-.41.69c-.35.59-.38 1.31-.07 1.92l1.63 3.26 2.27-3.81zm10.9-9.21-1.3-2.17C15.35 2.37 14.7 2 14 2h-3.53l3.12 5.2-1.72 1.03 5.49 1.37 1.37-5.49-1.71 1.03z"
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
@prop export let ariaLabel = 'recycling';
-->
