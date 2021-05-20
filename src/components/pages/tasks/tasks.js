import { useState } from "react";
import TaskMenu from "../../menu";
import taskData from "../../../fixtures/board-data.json";

const tasksFixture = taskData;
const tasksURL = "https://431243-co32399.tmweb.ru/api/board/TB1";

export { tasksFixture, tasksURL };

export default function RenderTaskMenu(taskMenus) {
    let background = "#ddd";

    const [activeMenus, setActiveMenus] = useState(taskMenus);

    const handleArrowClick = (menuName) => {
        console.log("handleArrowClick");
        let newActiveMenus = [...activeMenus];

        if (newActiveMenus.includes(menuName)) {
            var index = newActiveMenus.indexOf(menuName);
            if (index > -1) {
                newActiveMenus.splice(index, 1);
            }
        } else {
            newActiveMenus.push(menuName);
        }

        setActiveMenus(newActiveMenus);
    };

    const handleMenuClick = (data) => {
        // return data.subtasks.length ? 1 : alert("NO SUBTASKS!");
    };

    const ListMenu = ({ dept, data, hasSubMenu, menuName, menuIndex }) => {
        console.log("dept", dept);
        console.log("subtasks", data.subtasks);

        return (
            <TaskMenu.LI>
                <TaskMenu.Item dept={dept}>
                    <TaskMenu.Label onClick={() => handleMenuClick(data)}>
                        {`${data.title} (${data.key || ""})\n`}
                        {`With description:\t"${data.description}"\n`}
                        {`For board\t${data.board}\n`}
                        {`With owner\t${data.owner}\n\n`}
                    </TaskMenu.Label>
                    <TaskMenu.Label alignment={"center"}>
                        {`status: ${data.status || "?"}\n`}
                        {`estimation: ${data.estimation.toString() || "?"}\n`}
                        {`assignee: ${data.assignee || "?"}`}
                    </TaskMenu.Label>
                    {hasSubMenu && (
                        <TaskMenu.Arrow
                            onClick={() => handleArrowClick(menuName)}
                            toggle={activeMenus.includes(menuName)}
                        />
                    )}
                </TaskMenu.Item>
                {hasSubMenu && (
                    <SubMenu
                        dept={dept}
                        data={data.subtasks}
                        toggle={activeMenus.includes(menuName)}
                        menuIndex={menuIndex}
                    />
                )}
            </TaskMenu.LI>
        );
    };

    const SubMenu = ({ dept, data, toggle, menuIndex }) => {
        if (!toggle) {
            return null;
        }

        dept = dept + 1;
        background = "#faafbf";

        return (
            <TaskMenu.UL background={background}>
                {data.map((menu, index) => {
                    const menuName = `submenu-${dept}-${menuIndex}-${index}`;
                    console.log("menu", menu);
                    menu = taskMenus.filter((inst) => inst._id === menu)[0];

                    return (
                        <ListMenu
                            dept={dept}
                            data={menu}
                            hasSubMenu={menu.subtasks && menu.subtasks.length ? true : false}
                            menuName={menuName}
                            key={menuName}
                            menuIndex={index}
                        />
                    );
                })}
            </TaskMenu.UL>
        );
    };

    background = "#ddd";

    return (
        <TaskMenu menus={taskMenus}>
            <TaskMenu.UL background={background}>
                {taskMenus.map((menu, index) => {
                    const dept = 1;
                    const menuName = `subtask-menu-${dept}-${index}`;

                    return (
                        <ListMenu
                            dept={dept}
                            data={menu}
                            hasSubMenu={menu.subtasks && menu.subtasks.length ? true : false}
                            menuName={menuName}
                            key={menuName}
                            menuIndex={index}
                        />
                    );
                })}
            </TaskMenu.UL>
        </TaskMenu>
    );
}
