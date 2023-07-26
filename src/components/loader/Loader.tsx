import React, { FC } from 'react'
import { ClipLoader } from 'react-spinners'
import { LoaderParent, LoaderChild, LoadingTetleWrapper } from './style'

interface ILoader {
    children: any
    isLoading?: boolean
    size?: number
    loadingTitle?: { title: string; fw: number | string; fz: number }
}

export const Loader: FC<ILoader> = ({ children, isLoading, size, loadingTitle }) => (
    <LoaderParent>
        <>
            {isLoading && (
                <LoaderChild>
                    {loadingTitle && (
                        <LoadingTetleWrapper fw={loadingTitle.fw} fz={loadingTitle.fz}>
                            {loadingTitle.title}
                        </LoadingTetleWrapper>
                    )}
                    <ClipLoader size={size || 30} />
                </LoaderChild>
            )}
            {children}
        </>
    </LoaderParent>
)

Loader.defaultProps = {
    isLoading: false,
    size: 30,
    loadingTitle: undefined,
}
