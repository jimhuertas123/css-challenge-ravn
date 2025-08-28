import './RightSidebar.css';

interface RightSidebarProps {

}

const RightSidebar: React.FC<RightSidebarProps> = () => {
    return (
        <aside className="right-sidebar-container">
            <section className="right-sidebar-profile">

            </section>
            <section className="right-sidebar-stats">

            </section>
            <section className="right-sidebar-activity">

            </section>
            <section className="right-sidebar-suscription">

            </section>
        </aside>
    );
}

export default RightSidebar;