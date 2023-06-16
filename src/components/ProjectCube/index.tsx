import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

import S from './index.styled';
import theme from '@/styles/theme';

function ProjectCube() {
    const boxRef = useRef(null);

    return (
        <S.Container>
            <Canvas frameloop="always">
                <ambientLight intensity={0.1} />
                <directionalLight color={'white'} position={[1, 6, 5]} />
                <mesh position={[2, -1, -2]} rotation={[Math.PI / 2, 5, 6]}>
                    <boxGeometry args={[3, 3, 3]} />
                    <meshStandardMaterial color={theme.color.primary_500} />
                </mesh>
            </Canvas>
        </S.Container>
    );
}

export default ProjectCube;
