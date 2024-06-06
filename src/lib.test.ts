import {describe, expect, it} from "@jest/globals";
import {five} from "./lib";

describe('lib', () => {
    describe('five', () => {
        it('returns five', () => {
            const result = five();
            expect(result).toEqual(5)
        })
    })
})