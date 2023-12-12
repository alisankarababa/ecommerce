export function getClassName(classesDefault, classesFromArgument) {

    return classesFromArgument ? `${classesDefault} ${classesFromArgument}` : classesDefault;
}