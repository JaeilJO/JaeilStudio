import SkillConfig from '../../util/SkillConfig';
import SkillAccordionItem from './SkillAccordionItem';
import S from './index.styeld';

import { useState } from 'react';

function SkillAccordion() {
    const [currentItem, setCurrentItem] = useState('Next.js');

    return (
        <S.Container>
            {SkillConfig.map((item) => (
                <SkillAccordionItem
                    key={item.key}
                    title={item.title}
                    $isSelect={currentItem === item.title}
                    icon={item.icon}
                    setCurrentItem={setCurrentItem}
                />
            ))}
        </S.Container>
    );
}

export default SkillAccordion;
