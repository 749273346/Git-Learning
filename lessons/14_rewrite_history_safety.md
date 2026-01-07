# 第14课：历史改写与安全（含敏感信息清除）
目标：了解何时改写历史、如何清除意外提交的敏感信息，并确保安全。

1. 优先选择还原而不是改写
   - 有问题的提交：git revert <提交ID>
   - 明确保留完整历史，便于审计与回滚

2. 必要时改写历史（谨慎）
   - 纠正提交信息或合并零碎提交：
     - git rebase -i HEAD~N 修改 pick/squash/reword
   - 修正作者信息：
     - git commit --amend --author="姓名 <邮箱>"

3. 清除敏感信息（如误提交密钥）
   - 先在代码中替换为安全方案（环境变量、本地配置），并立即旋转密钥
   - 使用 filter 工具彻底删除历史中的秘密：
     - 安装：python -m pip install git-filter-repo（或使用内置可执行）
     - 运行（示例，删除 .env 中的 SECRET_KEY）：
       - git filter-repo --path .env --invert-paths
   - 强制推送并通知协作者：
     - git push --force
     - 所有人重新克隆或重置到新的历史

4. 安全建议
   - 永不把密钥、令牌写入仓库
   - 提交前使用 .gitignore 忽略本地敏感文件
   - 开启双因素认证，使用最小权限的令牌
