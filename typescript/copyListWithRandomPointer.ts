class RPNode {
  val: number
  next: RPNode | null
  random: RPNode | null
  constructor(val?: number, next?: RPNode, random?: RPNode) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
    this.random = (random === undefined ? null : random)
  }
}

function copyRandomList(head: RPNode | null): RPNode | null {
  const map = new Map<RPNode, RPNode>();
  return dfs(head, map);
};

function dfs(head: RPNode | null, map: Map<RPNode, RPNode>): RPNode | null {
  if (!head) return null;
  if (map.has(head)) return map.get(head) as RPNode;
  const copy = new RPNode(head.val);
  map.set(head, copy);
  copy.next = dfs(head.next, map);
  copy.random = dfs(head.random, map);
  return copy;
}
