<script lang="ts">
  import type { ComponentType } from 'svelte';
  export let icon: ComponentType;
  export let size: number = 24;
  export let role: string = 'img';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'outlined';
  export let ariaLabel: string = 'Icon';
</script>

<svelte:component
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  {...$$restProps} 
  {role}
  this={icon} 
  {size} 
  {variation}
  class={$$props.class} 
  {ariaLabel}
/>