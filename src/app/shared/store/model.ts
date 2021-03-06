import { Action, ActionReducer } from '@ngrx/store';
import { Patch, PatchListener } from 'immer';

/**
 * Reducer extension for capturing patches from immer.
 */
export interface PatchActionReducer<T, V extends Action = Action> extends ActionReducer<T, V> {
  (state: T | undefined, action: V, patchListener: PatchListener): T;
}

/**
 * Wrapper for patches between two different states.
 */
export interface Patches {
  patches: Patch[];
  inversePatches: Patch[];
}

/**
 * Predicate for deciding whether differences from
 * two consecutive actions of the same type should be merged.
 */
export type MergeRule = (a: Action, b: Action) => boolean;

/**
 * Configuration for undoRedo reducer.
 */
export interface WiederConfig {
  /**
   * How many state differences should be buffered in
   * either direction.
   */
  maxBufferSize: number;
  /**
   * Types of actions to use for calculating patches
   * between states (leave empty to allow all actions).
   */
  allowedActionTypes?: string[];
  /**
   * Types of actions whose state difference should be
   * merged when they appear consecutively
   */
  mergeActionTypes?: string[];
  /**
   * Predicates for deciding whether differences from
   * two consecutive actions of the same type should be merged.
   */
  mergeRules?: Map<string, MergeRule>;
  /**
   * Override for the undo action's type.
   */
  undoActionType?: string;
  /**
   * Override for the redo action's type.
   */
  redoActionType?: string;
  /**
   * Override for the break-merge action's type.
   */
  breakMergeActionType?: string;
  /**
   * Override for the clear action's type.
   */
  clearActionType?: string;
  /**
   * Whether ability for undo/redo should be tracked in the state
   * through properties `canUndo` and `canRedo`.
   */
  track?: boolean;
}

export const defaultConfig: WiederConfig = {
  allowedActionTypes: [],
  mergeActionTypes: [],
  mergeRules: new Map<string, MergeRule>(),
  maxBufferSize: 32,
  undoActionType: 'UNDO',
  redoActionType: 'REDO',
  breakMergeActionType: 'BREAK_MERGE',
  clearActionType: 'CLEAR',
  track: false
};
