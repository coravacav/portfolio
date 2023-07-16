import PageContainer from '@/lib/pageContainer';
import { prose } from '@/styles/prose';

export default function ProjectsPage() {
    return (
        <PageContainer title="Resume" description="My qualifications and experience.">
            <div className={prose}>
                <h2>Education</h2>
            </div>
        </PageContainer>
    );
}
