import { useCallback, useState } from 'react';
import Icon from '../atoms/Icon';
import S from './index.styled';
import { SiNextdotjs, SiReact, SiRedux, SiStorybook, SiStyledcomponents } from 'react-icons/si';
import { RiBearSmileFill } from 'react-icons/ri';
import { useModalStore } from '@/zustand/store';

function ProjectModal() {
    const [isHoverCloseButton, setIsHoverCloseButton] = useState(false);
    const [title, skills, sub_scribe, video, closeModal] = useModalStore((state) => [
        state.title,
        state.skills,
        state.sub_scribe,
        state.video,
        state.closeModal,
    ]);
    const closeButtonMouseOver = useCallback(() => {
        setIsHoverCloseButton(true);
    }, [isHoverCloseButton]);
    const closeButtonMouseLeave = useCallback(() => {
        setIsHoverCloseButton(false);
    }, [isHoverCloseButton]);

    const closeButtonHandler = () => {
        closeModal();
    };

    return (
        <S.Background>
            <S.Container>
                <S.CloseButton
                    onMouseLeave={closeButtonMouseLeave}
                    onMouseOver={closeButtonMouseOver}
                    onClick={closeButtonHandler}
                >
                    {isHoverCloseButton ? 'Close' : 'X'}
                </S.CloseButton>
                {!video ? <S.NoneVideo>I'm sorry, but the video is not available </S.NoneVideo> : <S.Video />}

                <S.InfoBox>
                    <S.Title>{title}</S.Title>
                    <S.Skills>
                        {skills.map((skill) => {
                            if (skill === 'nextjs') {
                                return (
                                    <Icon
                                        font_size={'sub_title_03'}
                                        font_weight={'light'}
                                        icon={<SiNextdotjs />}
                                        text="NextJs"
                                    />
                                );
                            }

                            if (skill === 'react') {
                                return (
                                    <Icon
                                        font_size={'sub_title_03'}
                                        font_weight={'light'}
                                        icon={<SiReact />}
                                        text="ReactJs"
                                    />
                                );
                            }

                            if (skill === 'storybook') {
                                return (
                                    <Icon
                                        font_size={'sub_title_03'}
                                        font_weight={'light'}
                                        icon={<SiStorybook />}
                                        text="Storybook"
                                    />
                                );
                            }

                            if (skill === 'redux') {
                                return (
                                    <Icon
                                        font_size={'sub_title_03'}
                                        font_weight={'light'}
                                        icon={<SiRedux />}
                                        text="Redux"
                                    />
                                );
                            }

                            if (skill === 'zustand') {
                                return (
                                    <Icon
                                        font_size={'sub_title_03'}
                                        font_weight={'light'}
                                        icon={<RiBearSmileFill />}
                                        text="Zustand"
                                    />
                                );
                            }
                            if (skill === 'styled_components') {
                                return (
                                    <Icon
                                        font_size={'sub_title_03'}
                                        font_weight={'light'}
                                        icon={<SiStyledcomponents />}
                                        text="StyledComponents"
                                    />
                                );
                            }
                        })}
                    </S.Skills>

                    <S.SubScribeTitle>SubScribe</S.SubScribeTitle>
                    <S.SubTitleBox>{sub_scribe}</S.SubTitleBox>
                </S.InfoBox>
            </S.Container>
        </S.Background>
    );
}

export default ProjectModal;
