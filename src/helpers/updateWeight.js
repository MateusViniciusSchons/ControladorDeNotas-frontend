export default function updateWeight(fields) {
    fields.map(field => {
        field.peso = '';
        return null;
    });

    return fields;
}