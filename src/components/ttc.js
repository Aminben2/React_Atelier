import React from 'react'
import { Pht } from './pht'
import { Tva } from './tva'
import { Button } from './buttons'
import { Result } from './result'

export const Ttc = () => {
    return (
        <form className='ttc'>
            <fieldset>
                <legend>Calcul de PTTC</legend>
                <Pht />
                <Tva />
                <Button />
                <Result />
            </fieldset>
        </form>
    )
}
