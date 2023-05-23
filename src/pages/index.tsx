import Section from './components/Section';
import Header from './components/layouts/Header';

export default function Home() {
    return (
        <>
            <Header />
            <Section
                id={'about'}
                type="white"
                option={{
                    left: false,
                    right: true,
                }}
            >
                <></>
            </Section>
            <Section
                id={'skills'}
                type="black"
                option={{
                    left: false,
                    right: true,
                }}
            >
                <></>
            </Section>
        </>
    );
}
