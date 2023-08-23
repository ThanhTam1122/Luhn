import type { ReduxState } from "@/lib/redux";

export const selectedNumbers = (state: ReduxState) => state.generator.selectedNumbers
export const generatedToken = (state: ReduxState) => state.generator.generatedToken