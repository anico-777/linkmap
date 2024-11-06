// 初期データ（テスト用データとしての連絡先情報）
const contacts = [
    { name: "たけし", frequency: 10 },
    { name: "さくら", frequency: 70 },
    { name: "ゆうこ", frequency: 90 },
    { name: "りょう", frequency: 40 },
    { name: "えみ", frequency: 20 },
    { name: "こういち", frequency: 150 }
];

// 対人マップを生成する関数
function drawRelationshipMap() {
    const duration = document.getElementById('duration').value;
    const numContacts = parseInt(document.getElementById('numContacts').value);
    const selectedContacts = contacts.slice(0, numContacts);
    const svgElement = document.getElementById("relationshipMap");

    // SVG内の既存の要素をクリア
    svgElement.innerHTML = '';

    const centerX = svgElement.clientWidth / 2;
    const centerY = svgElement.clientHeight / 2;

    selectedContacts.forEach((contact, index) => {
        const angle = (index / selectedContacts.length) * 2 * Math.PI;
        const baseDistance = 150; // 基本距離
        const minDistance = 50; // 最小距離
        const maxFrequency = 100; // 最大頻度
        const distance = baseDistance - ((contact.frequency / maxFrequency) * (baseDistance - minDistance));
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;

        // 線を描画
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", centerX);
        line.setAttribute("y1", centerY);
        line.setAttribute("x2", x);
        line.setAttribute("y2", y);
        line.setAttribute("stroke", "black");
        line.setAttribute("stroke-width", 1);
        svgElement.appendChild(line);

        // アイコンを描画
        const icon = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        icon.setAttribute("cx", x);
        icon.setAttribute("cy", y);
        icon.setAttribute("r", 15);
        icon.setAttribute("fill", "#A7DBED"); // 水色を設定
        svgElement.appendChild(icon);

        // 名前のテキストを追加
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", x);
        text.setAttribute("y", y - 20); // 少し上に配置
        text.setAttribute("fill", "black");
        text.setAttribute("font-size", "12");
        text.setAttribute("text-anchor", "middle");
        text.textContent = contact.name;
        svgElement.appendChild(text);
    });
}
